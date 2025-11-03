// ============================================
// Smooth scrolling for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.top-nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active navigation highlighting
// ============================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = 'home';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.fontWeight = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.fontWeight = '600';
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ============================================
// Publications loader from Markdown
// ============================================
async function loadPublications() {
    const container = document.getElementById('publications-container');
    if (!container) {
        return;
    }

    const source = container.dataset.source || 'publications.md';

    try {
        const response = await fetch(source);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const markdown = await response.text();
        const publications = parsePublications(markdown);

        if (!publications.length) {
            container.innerHTML = '<p class="publications-empty">No publications available at the moment.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        publications.forEach(pub => fragment.appendChild(createPublicationElement(pub)));

        container.innerHTML = '';
        container.appendChild(fragment);
    } catch (error) {
        console.error('Failed to load publications:', error);
        if (window.location.protocol === 'file:') {
            container.innerHTML = '<p class="publications-error">Unable to load publications when opened directly from the filesystem. Please preview the site through a local server (for example, run <code>python -m http.server</code> inside the project folder) or deploy it to a web host.</p>';
        } else {
            container.innerHTML = '<p class="publications-error">Unable to load publications right now. Please refresh or try again later.</p>';
        }
    }
}

function parsePublications(markdown) {
    if (!markdown) {
        return [];
    }

    const normalised = markdown.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').trim();
    if (!normalised) {
        return [];
    }

    const blocks = normalised.split(/\n-{3,}\n/g).map(block => block.trim()).filter(Boolean);
    return blocks.map(block => extractPublication(block)).filter(Boolean);
}

function extractPublication(block) {
    const lines = block.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    if (!lines.length) {
        return null;
    }

    const titleLineIndex = lines.findIndex(line => line.startsWith('### '));
    if (titleLineIndex === -1) {
        return null;
    }

    const title = lines[titleLineIndex].replace(/^###\s*/, '').trim();
    lines.splice(titleLineIndex, 1);

    let image = null;
    if (lines.length && lines[0].startsWith('![')) {
        const imageLine = lines.shift();
        const match = imageLine.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (match) {
            image = {
                alt: match[1].trim() || title,
                src: match[2].trim()
            };
        }
    }

    const fields = {};
    lines.forEach(line => {
        if (!line.startsWith('- ')) {
            return;
        }

        const content = line.slice(2);
        const separatorIndex = content.indexOf(':');
        if (separatorIndex === -1) {
            return;
        }

        const key = content.slice(0, separatorIndex).trim().toLowerCase();
        const value = content.slice(separatorIndex + 1).trim();
        if (key) {
            fields[key] = value;
        }
    });

    const links = parseLinks(fields.links || '');

    return {
        title,
        image,
        authors: fields.authors || '',
        venue: fields.venue || '',
        summary: fields.tldr || fields['tl;dr'] || '',
        links
    };
}

function parseLinks(value) {
    if (!value) {
        return [];
    }

    const matches = [...value.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
    return matches.map(match => ({
        label: match[1],
        url: match[2]
    }));
}

function createPublicationElement(publication) {
    const wrapper = document.createElement('div');
    wrapper.className = 'publication';

    if (publication.image) {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'pub-image';

        const image = document.createElement('img');
        image.src = publication.image.src;
        image.alt = publication.image.alt || publication.title;
        image.loading = 'lazy';
        image.onerror = () => {
            image.onerror = null;
            image.src = createPlaceholderSvg(publication.image.alt || publication.title);
        };

        imageWrapper.appendChild(image);
        wrapper.appendChild(imageWrapper);
    } else {
        const placeholderWrapper = document.createElement('div');
        placeholderWrapper.className = 'pub-image';

        const image = document.createElement('img');
        image.src = createPlaceholderSvg(publication.title);
        image.alt = publication.title;

        placeholderWrapper.appendChild(image);
        wrapper.appendChild(placeholderWrapper);
    }

    const content = document.createElement('div');
    content.className = 'pub-content';

    const title = document.createElement('h3');
    title.className = 'pub-title';
    title.textContent = publication.title;
    content.appendChild(title);

    if (publication.authors) {
        const authors = document.createElement('p');
        authors.className = 'pub-authors';
        authors.innerHTML = renderInlineMarkdown(publication.authors);
        content.appendChild(authors);
    }

    if (publication.venue) {
        const venue = document.createElement('p');
        venue.className = 'pub-venue';
        venue.innerHTML = renderInlineMarkdown(publication.venue);
        content.appendChild(venue);
    }

    if (publication.links.length) {
        const linksContainer = document.createElement('div');
        linksContainer.className = 'pub-links';

        publication.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.target = '_blank';
            anchor.rel = 'noopener';
            anchor.textContent = `[${link.label}]`;
            linksContainer.appendChild(anchor);
        });

        content.appendChild(linksContainer);
    }

    if (publication.summary) {
        const summary = document.createElement('p');
        summary.className = 'pub-summary';
        summary.innerHTML = `<span class=\"pub-summary-label\">TLDR:</span> ${renderInlineMarkdown(publication.summary)}`;
        content.appendChild(summary);
    }

    wrapper.appendChild(content);
    return wrapper;
}

function renderInlineMarkdown(text) {
    return text
        .replace(/\\\*/g, '*')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href=\"$2\" target=\"_blank\" rel=\"noopener\">$1</a>');
}

function createPlaceholderSvg(label) {
    const safeLabel = (label || 'Image').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"240\" height=\"180\"><rect width=\"100%\" height=\"100%\" fill=\"#f2f2f2\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"14\" fill=\"#999\">${safeLabel}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

window.addEventListener('DOMContentLoaded', loadPublications);
