# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
React_Portfolio
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 07
│  │  │  └─ 7d3c7c0825e394130e934df6bb14bd6035a6d2
│  │  ├─ 0c
│  │  │  ├─ 390b27c59cf98ee241ec12537fc10ae873a5d9
│  │  │  ├─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  │  └─ 82049f488eb2e14471554f5dbdd01e7ad244c4
│  │  ├─ 10
│  │  │  └─ 0d5e3aa85b1204ce89fba4257e0926ac39298a
│  │  ├─ 12
│  │  │  └─ 07c8203bfdd6e41adf15186b6a8db86ec43f3a
│  │  ├─ 13
│  │  │  └─ 3a1ad66762de4ff6553105ddc0dab96baf4f3b
│  │  ├─ 14
│  │  │  └─ 4c838c0058d26ad3dd673359b7bb4339a98657
│  │  ├─ 17
│  │  │  └─ 46b34b876db57cffbe1df643d44dd6b9a7c2b4
│  │  ├─ 1d
│  │  │  └─ 2fab37f9e99c2787c509833a13651ab332d341
│  │  ├─ 1e
│  │  │  └─ 7871824c79b44f1ef09bd1eb72679520b966a8
│  │  ├─ 20
│  │  │  └─ b893f61da834509c897631c89eb8654ff26464
│  │  ├─ 23
│  │  │  └─ 2e2ed39b63dc0474c7c023b68e9f396547f349
│  │  ├─ 26
│  │  │  └─ 8cf01047206a6784a68c685efebf914202f64f
│  │  ├─ 27
│  │  │  └─ 289e884845836a5d54849e8033cf31c2cb21ca
│  │  ├─ 29
│  │  │  └─ 8c3a4a7cbc1d44c3380f3d1fa4dba2c0c18e44
│  │  ├─ 2a
│  │  │  └─ c166c57c7de5b279cc54e79b3efd7b80c76dd3
│  │  ├─ 2e
│  │  │  └─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  ├─ 30
│  │  │  └─ d4b6f4310876172e96dd693cc16ed51532ceb5
│  │  ├─ 31
│  │  │  ├─ d373eefc061ba4eefba1b21138f7a07e2bd315
│  │  │  └─ d83b4be969b8dfca380a2e94e919cd30ded619
│  │  ├─ 32
│  │  │  └─ 7319607eb310b3c67450426aafc7dc8722e6b3
│  │  ├─ 33
│  │  │  └─ 8bd33963d724eac74d04ce3f64676b76c7b70a
│  │  ├─ 36
│  │  │  └─ 0e8e83dfe7a44196ff272ac88648cbb537768c
│  │  ├─ 39
│  │  │  └─ 9d056f3a3b722a7bdd6f3418e88784b595b741
│  │  ├─ 3c
│  │  │  └─ 15f7999663ed8f7df406317b84a92302a0eeab
│  │  ├─ 3e
│  │  │  └─ 212e1d4307a332e8511f530bc48a4ad5ed6f95
│  │  ├─ 45
│  │  │  └─ 40e5319b610f321bc185504a7aa05dbe460774
│  │  ├─ 47
│  │  │  └─ af36e6d1828075d894364ec8189ba6b1b7214c
│  │  ├─ 4f
│  │  │  └─ edd6212744128331c9967684792dd435bae971
│  │  ├─ 50
│  │  │  └─ f3bdbb5978fe9d3c5a5c1b1d7496a79b5ee966
│  │  ├─ 54
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 67
│  │  │  └─ e399377825554050285faf09cb01d212171f53
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 76
│  │  │  └─ 346e46d4b81aeaa64bec85ed800da146dc8da6
│  │  ├─ 7b
│  │  │  └─ e1489a995ced8522b87354871fd7b64892a22c
│  │  ├─ 7f
│  │  │  └─ b5d6b4f75e2d7ef3b50c8c6351d1e9bec7683f
│  │  ├─ 89
│  │  │  ├─ 0b5346e2e9f977c6384eee8276fc39031eac47
│  │  │  └─ a305e028000a86c03e85344e31eb59d56354a0
│  │  ├─ 8e
│  │  │  └─ 620247450616a4f0e8bd22a55c6f18625ca0b0
│  │  ├─ 92
│  │  │  └─ b99011ae7b1dbfc1552bf711711b0ce4495526
│  │  ├─ 95
│  │  │  └─ f31007e72c1f5203be70381609ef454d2dc3e9
│  │  ├─ a0
│  │  │  └─ 3b307037191c534ee0457270be8b6deeb16f63
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ 08ab8714c34d37f722978dbbf6c9fcb3b2fbd3
│  │  ├─ a7
│  │  │  └─ 287d9edf29eb74ed3d8b02a4a47e916d362f10
│  │  ├─ a8
│  │  │  └─ f8ef7ed6c2029012873916cdf712b4a648c13e
│  │  ├─ b4
│  │  │  └─ 4b6e5827375da9e0b6007a3a8584a37fe5ab5c
│  │  ├─ b5
│  │  │  └─ 49bcc4f64092672325fbb15397c4579169f849
│  │  ├─ be
│  │  │  └─ 26195839eaffbbe3b65c81b2dc3692c10b80fb
│  │  ├─ cc
│  │  │  └─ afc25c8ee9f858b154e466201c00ea7160f9ff
│  │  ├─ d1
│  │  │  └─ 61b4f8f6b11e9c9b0f6e7fb8ece8ffd2b70a3f
│  │  ├─ da
│  │  │  └─ fad951cdf326b617d2e79a068c2d7fd6089d4d
│  │  ├─ db
│  │  │  └─ 909118f6395ca410a91bc12f67d59cfcd62561
│  │  ├─ dc
│  │  │  └─ fe94e1f41326f2f8c0d9002fdbb49b17dccf4d
│  │  ├─ e0
│  │  │  ├─ 374a86eaf3ee14b6d6ea3fcc95db77cf988771
│  │  │  └─ 3e2effa90d8e979e5e334e3b3de109d845cd04
│  │  ├─ e1
│  │  │  └─ 80f250def1564772680029908b90f1fd163ef0
│  │  ├─ e2
│  │  │  └─ 9781897341e4749357aa0b034171c956c776d6
│  │  ├─ e3
│  │  │  └─ 4b7bf8d3f9af5c3498f86147de2cb445671457
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ea
│  │  │  └─ 583c12d53478b6cdefbf19af1edf3c9c7b78e2
│  │  ├─ ee
│  │  │  └─ 7f42f02cc2212cc9584f8e73419d2992e58465
│  │  ├─ f3
│  │  │  └─ 9d5e730783ceb6430e4cacceaf26a168f1f851
│  │  ├─ f7
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ fc
│  │  │  └─ 3841223cd251b3874aceac65bc72fec5191147
│  │  ├─ fd
│  │  │  └─ c217658a63346fc433e64086a43af3866bafab
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ about.jpg
│  │  ├─ food.jpg
│  │  ├─ gym.jpg
│  │  ├─ gym1.jpg
│  │  ├─ kevinRushLogo.png
│  │  ├─ kevinRushProfile.jpg
│  │  ├─ kevinRushProfile.png
│  │  ├─ me.jpg
│  │  ├─ me1.jpeg
│  │  ├─ portfolio.jpg
│  │  ├─ projects
│  │  │  ├─ project-1.jpg
│  │  │  ├─ project-2.jpg
│  │  │  ├─ project-3.jpg
│  │  │  ├─ project-4.jpg
│  │  │  └─ Tushar Pimple.pdf
│  │  └─ react.svg
│  ├─ components
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Exprience.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Project.jsx
│  │  └─ Technologies.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```