### Scalable Adaptation of 3D Geometric Foundation Models via Weak Supervision from Internet Video
![SAGE](assets/images/publications/sage.png)

- Authors: Z. Gao, K. Liu, D. Y. Chen, D. Shi, G. Lin, **J.-W. Bian**†, H. Chen, C. Shen
- Venue: NeurIPS 2026
- Topic: 3D Reconstruction & Geometry
- Links: [arXiv](https://arxiv.org/abs/2602.07891) | [Code](https://github.com/aim-uofa/SAGE) | [Scholar](https://scholar.google.com/scholar?q=Scalable+Adaptation+of+3D+Geometric+Foundation+Models+via+Weak+Supervision+from+Internet+Video)
- TLDR: Scales 3D geometric foundation models with raw Internet videos instead of 3D labels, mining training trajectories with sparse SfM anchors and dense rendering consistency; cuts Chamfer distance by 20-42% on unseen benchmarks for MV-DUSt3R and consistently improves VGGT.

---

### DynThinker: Unifying Static 3D and Dynamic 4D Spatial Reasoning
![DynThinker](assets/images/publications/dynthinker.png)

- Authors: Q. Cao, H. Li, Z. Guo, S. Gao, Z. Gao, H. Zhang, F. He, J. Han, H. Xu, X. Liang, **J.-W. Bian**†
- Venue: arXiv 2026
- Topic: Understanding & Reasoning
- Links: [arXiv](https://arxiv.org/abs/2610.20598) | [Scholar](https://scholar.google.com/scholar?q=DynThinker+Unifying+Static+3D+and+Dynamic+4D+Spatial+Reasoning)
- TLDR: A unified VLM that strengthens static 3D and dynamic 4D spatial reasoning together, using decoupled EMA to curb interference between the two and fusing priors from a dynamic geometry encoder; it achieves the best average across nine 3D and 4D benchmarks.

---

### SoL-Refiner: Speed-of-Light One-Step Refinement for High-Resolution Video
![SoL-Refiner](assets/images/publications/sol_refiner.jpg)

- Authors: H. Liu, T. Ye, S. Xue, S. Gao, Y. Li, J. Chen, H. Li, J. Yu, D. Wang, R. Zhang, L. Zhu, **J.-W. Bian**, S. Han, E. Xie
- Venue: arXiv 2026
- Topic: Generation
- Links: [Project](https://nvlabs.github.io/Sana/Sol-Refiner/) | [arXiv](https://arxiv.org/abs/2609.37969) | [Code](https://github.com/NVlabs/Sana/tree/sol-engine/models/sol-refiner) | [Open-H3-Regenerate-2K](https://nvlabs.github.io/Sana/Open-H3-Regenerate-2K/) | [Scholar](https://scholar.google.com/scholar?q=SoL-Refiner+Speed-of-Light+One-Step+Refinement+for+High-Resolution+Video)
- TLDR: A one-step video refiner that turns low-resolution generations into 4K video and runs 8.91x faster than multi-step refinement. It integrates our Open-H3-Regenerate-2K, the MiniMax H3 refiner that produces 2K video in three steps and is preferred over the official H3 2K API in 87% of user-study judgments.

---

### SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness
![SoL-Pi](assets/images/publications/sol_pi.png)

- Authors: H. Liu, T. Ye, S. Gao, Q. Cao, Y. Li, M. Zhuge, D. Wang, R. Zhang, **J.-W. Bian**, L. Zhu, L. Zhu, E. Xie, S. Han
- Venue: arXiv 2026
- Topic: Understanding & Reasoning
- Links: [Project](https://nvlabs.github.io/SoL-Pi/) | [arXiv](https://arxiv.org/abs/2609.20519) | [Code](https://github.com/NVlabs/SoL-Pi) | [Scholar](https://scholar.google.com/scholar?q=SoL-Pi+Recursively+Scaling+Auto-Research+Loops+for+Efficient+Agent+Harness)
- TLDR: An automated pipeline that recursively discovers and validates mechanisms for improving coding-agent harnesses, surfacing four mechanisms that cut inference cost while preserving task performance.

---

### PixWorld: Unifying 3D Scene Generation and Reconstruction in Pixel Space
![PixWorld](assets/images/publications/pixworld.png)

- Authors: S. Gao, Z. Wang, Q. Cao, D. Yu, C. Wang, **J.-W. Bian**†
- Venue: arXiv 2026
- Topic: Generation
- Links: [Project](https://sensengao.github.io/PixWorld/) | [arXiv](https://arxiv.org/abs/2607.05373) | [Code](https://github.com/SensenGao/PixWorld) | [Scholar](https://scholar.google.com/scholar?q=PixWorld+Unifying+3D+Scene+Generation+and+Reconstruction+in+Pixel+Space)
- TLDR: Unifies 3D scene generation and reconstruction under a single pixel-space diffusion paradigm, supervising diffusion directly on rendered images and using a geometry perception loss from a pretrained 3D foundation model.

---

### OneWorld: Taming Scene Generation with 3D Unified Representation Autoencoder
![OneWorld](assets/images/publications/one_world.png)

- Authors: S. Gao, Z. Wang, Q. Cao, D. Yu, C. Wang, T. Liu, M. Gong, **J.-W. Bian**†
- Venue: ECCV 2026
- Topic: Generation
- Links: [arXiv](https://arxiv.org/abs/2603.16099) | [Code](https://github.com/SensenGao/OneWorld) | [Scholar](https://scholar.google.com/scholar?q=OneWorld+Taming+Scene+Generation+3D+Unified+Representation+Autoencoder)
- TLDR: A 3D unified representation autoencoder for coherent multi-view scene generation with cross-view consistency and reduced train-inference discrepancy.

---

### VolSplat: Rethinking Feed-Forward 3D Gaussian Splatting with Voxel-Aligned Prediction
![VolSplat](assets/images/publications/volsplat.png)

- Authors: W. Wang, Y. Chen, Z. Zhang, H. Liu, H. Wang, Z. Feng, W. Qin, F. Chen, **J.-W. Bian**, Z. Zhu, D. Chen, B. Zhuang
- Venue: ECCV 2026
- Topic: 3D Reconstruction & Geometry
- Links: [Project](https://lhmd.top/volsplat) | [arXiv](https://arxiv.org/abs/2509.19297) | [Code](https://github.com/ziplab/VolSplat) | [Scholar](https://scholar.google.com/scholar?q=VolSplat+Rethinking+Feed-Forward+3D+Gaussian+Splatting+with+Voxel-Aligned+Prediction)
- TLDR: Replaces pixel-aligned Gaussians with voxel-aligned prediction from a 3D voxel grid, avoiding error-prone 2D feature matching and enabling adaptive Gaussian density for more consistent feed-forward 3DGS.

---

### SurfaceSplat: Connecting Surface Reconstruction and Gaussian Splatting
![SurfaceSplat](assets/images/publications/surface_splat.png)

- Authors: Z. Gao\*, **J.-W. Bian**\*, G. Lin, H. Chen, C. Shen
- Venue: ICCV 2025
- Topic: 3D Reconstruction & Geometry
- Links: [arXiv](https://arxiv.org/abs/2507.15602) | [Code](https://github.com/Gaozihui/SurfaceSplat) | [Scholar](https://scholar.google.com/scholar?q=SurfaceSplat%3A+Connecting+Surface+Reconstruction+and+Gaussian+Splatting)
- TLDR: Fuses signed-distance surface reconstruction with 3D Gaussian splats under a single optimisation so sparse multi-view data yields crisp, photo-consistent surfaces.

---

### GaussCtrl: Multi-View Consistent Text-Driven 3D Gaussian Splatting Editing
![GaussCtrl](assets/images/publications/gaussctrl.png)

- Authors: J. Wu\*, **J.-W. Bian**\*, X. Li, G. Wang, I. Reid, P. Torr, V. Prisacariu
- Venue: ECCV 2024
- Topic: Generation
- Links: [Project](https://gaussctrl.active.vision/) | [arXiv](https://arxiv.org/abs/2403.08733) | [Code](https://github.com/ActiveVisionLab/gaussctrl) | [Scholar](https://scholar.google.com/scholar?q=GaussCtrl%3A+Multi-View+Consistent+Text-Driven+3D+Gaussian+Splatting+Editing)
- TLDR: Drives 3D Gaussian splat editing with text prompts while enforcing multi-view control signals that keep geometry and appearance consistent across cameras.

---

### PoRF: Pose Residual Field for Accurate Neural Surface Reconstruction
![PoRF](assets/images/publications/porf.png)

- Authors: **J.-W. Bian**, W. Bian, V. A. Prisacariu, P. H. Torr
- Venue: ICLR 2024
- Topic: 3D Reconstruction & Geometry
- Links: [Project](https://porf.active.vision/) | [arXiv](https://arxiv.org/abs/2310.07449) | [Code](https://github.com/ActiveVisionLab/porf) | [Scholar](https://scholar.google.com/scholar?q=PoRF%3A+Pose+Residual+Field+for+Accurate+Neural+Surface+Reconstruction)
- TLDR: Predicts pose residual fields inside the neural surface optimiser, continually correcting camera drift to recover sharp geometry and textures.

---

### NoPe-NeRF: Optimising Neural Radiance Field with No Pose Prior
![NoPe-NeRF](assets/images/publications/nope_nerf.png)

- Authors: W. Bian, Z. Wang, K. Li, **J.-W. Bian**, V. A. Prisacariu
- Venue: CVPR 2023 (Highlight)
- Topic: 3D Reconstruction & Geometry
- Links: [Project](https://nopenet.active.vision/) | [arXiv](https://arxiv.org/abs/2212.07388) | [Code](https://github.com/ActiveVisionLab/NoPe-NeRF) | [Scholar](https://scholar.google.com/scholar?q=NoPe-NeRF%3A+Optimising+Neural+Radiance+Field+with+No+Pose+Prior)
- TLDR: Optimises NeRF and camera parameters jointly with a pose-free likelihood, removing the need for SfM pose initialisation on unordered photo collections.

---

### SC-DepthV3: Robust Self-supervised Monocular Depth Estimation for Dynamic Scenes
![SC-DepthV3](assets/images/publications/sc_depthv3.png)

- Authors: L. Sun\*, **J.-W. Bian**\*, H. Zhan, W. Yin, I. Reid, C. Shen
- Venue: TPAMI 2023
- Topic: 3D Reconstruction & Geometry
- Links: [arXiv](https://arxiv.org/abs/2211.03660) | [Code](https://github.com/JiawangBian/sc_depth_pl) | [Scholar](https://scholar.google.com/scholar?q=SC-DepthV3%3A+Robust+Self-supervised+Monocular+Depth+Estimation+for+Dynamic+Scenes)
- TLDR: Distils pretrained single-image depth priors into the self-supervised pipeline so monocular depth remains detailed and stable in dynamic environments.

---

### [SC-DepthV2] Auto-Rectify Network for Unsupervised Indoor Depth Estimation
![Auto-Rectify Network](assets/images/publications/auto_rectify.png)

- Authors: **J.-W. Bian**, H. Zhan, N. Wang, T.-J. Chin, C. Shen, I. Reid
- Venue: TPAMI 2022
- Topic: 3D Reconstruction & Geometry
- Links: [arXiv](https://arxiv.org/abs/2006.02708) | [Code](https://github.com/JiawangBian/sc_depth_pl) | [Scholar](https://scholar.google.com/scholar?q=Auto-Rectify+Network+for+Unsupervised+Indoor+Depth+Estimation)
- TLDR: Learns an auto-rectify module and depth network jointly so handheld indoor videos can be geometrically corrected and depth-estimated without supervision.

---

### [SC-Depth] Unsupervised Scale-consistent Depth Learning from Video
![Unsupervised Scale-consistent Depth Learning from Video](assets/images/publications/sc_depth_ijcv.png)

- Authors: **J.-W. Bian**, H. Zhan, N. Wang, Z. Li, L. Zhang, C. Shen, M.-M. Cheng, I. Reid
- Venue: IJCV 2021; NeurIPS 2019
- Topic: 3D Reconstruction & Geometry
- Links: [IJCV arXiv](https://arxiv.org/abs/2105.11610) | [NeurIPS Paper](https://proceedings.neurips.cc/paper/2019/hash/6364d3f0f495b6ab9dcf8d3b5c6e0b01-Abstract.html) | [NeurIPS arXiv](https://arxiv.org/abs/1908.10553) | [Code](https://github.com/JiawangBian/SC-SfMLearner-Release) | [Scholar](https://scholar.google.com/scholar?q=Unsupervised+Scale-consistent+Depth+Learning+from+Video)
- TLDR: Enforces cross-frame scale-consistency losses so unsupervised monocular depth predictions retain a stable metric scale across long video sequences.

---

### GMS: Grid-based Motion Statistics for Fast, Ultra-robust Feature Correspondence
![GMS](assets/images/publications/gms.png)

- Authors: **J.-W. Bian**, W.-Y. Lin, Y. Liu, L. Zhang, S.-K. Yeung, M.-M. Cheng, I. Reid
- Venue: CVPR 2017
- Topic: 3D Reconstruction & Geometry
- Links: [Paper](https://openaccess.thecvf.com/content_cvpr_2017/papers/Bian_GMS_Grid-based_Motion_CVPR_2017_paper.pdf) | [Code](https://github.com/JiawangBian/GMS-Feature-Matcher) | [Scholar](https://scholar.google.com/scholar?q=GMS+Grid-based+Motion+Statistics+Fast+Ultra-robust+Feature+Correspondence)
- TLDR: Uses grid-based motion statistics to filter correspondences, delivering extremely fast feature matching that stays robust to heavy outliers.
