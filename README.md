<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,100:7c3aed&height=180&section=header&text=Memory%20Fragmentation%20Lab&fontColor=ffffff&fontSize=34" alt="Memory Fragmentation Lab banner"/>
  <br/><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=2600&pause=700&center=true&vCenter=true&width=650&lines=Allocate+contiguous+memory;Compare+first+best+and+worst+fit;See+external+fragmentation+grow" alt="Animated title"/>
  <br/><img src="https://img.shields.io/github/license/CyberLoop-dev/memory-fragmentation-lab" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/memory-fragmentation-lab" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/memory-fragmentation-lab" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/memory-fragmentation-lab" alt="Last commit"/>
  <br/><img src="assets/mark.svg" width="210" alt="Memory blocks illustration"/>
</p>

## 🧭 Overview

Memory Fragmentation Lab is a local operating-systems playground for contiguous allocation. Allocate and free blocks while comparing first-fit, best-fit, and worst-fit placement.

## ✨ Features

- 🧱 Visualize allocated blocks and free holes across a fixed memory space.
- 🎯 Switch between first-fit, best-fit, and worst-fit selection.
- 📊 Track free memory, largest hole, and an external-fragmentation estimate.
- ♻️ Free allocations and merge neighboring holes.
- 🔒 No uploads, accounts, or external libraries.

## 🎬 Demo

Start the app, choose an allocation strategy, enter a request size, and allocate or free blocks. The memory map and metrics update immediately; no hosted demo is claimed.

## 🚀 Quick Start

Requires Node.js 18 or newer.

```bash
npm start
```

Open http://localhost:4173.

## 🧰 Tech Stack

- 🟢 Node.js built-in HTTP server
- 🌐 HTML, CSS, browser JavaScript, and CSS Flexbox
- 📦 No third-party runtime dependencies

## 🗂️ Folder Structure

```text
memory-fragmentation-lab/
├── assets/mark.svg
├── app.js
├── index.html
├── server.js
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

## 🛣️ Roadmap

- [ ] Add paging and segmentation modes.
- [ ] Visualize compaction as a separate operation.
- [ ] Export allocation traces.

## 🤝 Contributing

Open issues for incorrect allocation behavior or accessibility improvements. Keep the simulator deterministic and document any new policy.

## 📄 License

MIT licensed. See [LICENSE](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,100:111827&height=105&section=footer" alt="Wave footer"/></p>
