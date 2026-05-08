# PRISM // Theme Fusion Lab — Neon Nostalgia Edition 🌆

A vanilla HTML/CSS/JavaScript theme generator that lets developers blend two design philosophies into one — picking from 35+ aesthetics (Vaporwave, Game UI, Neo-Brutalism, Glassmorphic, Editorial, Terminal, Botanical, Y2K, and more) and watching the live preview re-skin in real time as the fused CSS tokens stream into a code panel beside it. Move the fusion ratio slider and the typography, colors, corner radii, and shadows interpolate continuously between the two source themes. Built with closure-based factory functions, `textContent` for all user input, and zero dependencies.

This edition wears its **Neon Nostalgia** skin — a glowing magenta-and-orange sun on the horizon, a perspective grid floor scrolling toward it, twinkling stars in a deep purple sky, CRT scanlines drifting across everything, and Monoton-tube wordmarks that bloom in hot pink. Pure synthwave. The app's chrome is the aesthetic the fusion engine can also generate.

## 👤 Author
**Jacqueline**
[Check out my GitHub Profile](https://github.com/jdbostonbu-ops)
🚀 **[Visit the Page](https://jdbostonbu-ops.github.io/neon-nastalgia-theme-generator/)*

<p align="center">
  <img src="neon-nostalgia-favicon.svg" alt="Prism Neon Nostalgia Edition Demo" width="300">
</p>

## 🎓 Built During Next Chapter — Phase I

This project was designed and built during **Phase I of Thinking with AI** at Next Chapter Apprenticeship — a four-month foundational sprint covering AI Prompting, CSS, HTML, JavaScript, and Forms. Each lab fed directly into this build:

- **AI Prompting** — Iterating on the fusion concept with Claude as a thinking partner. Pushing back when generated output drifted toward generic AI aesthetics. Treating the model as a collaborator who needed clear constraints, not a code vending machine.
- **HTML** — Semantic structure throughout. Proper `role="listbox"` and `role="option"` on the dropdowns, `aria-expanded` on triggers, `<output>` for live ratio display, `<input type="range">` with `aria-label`, and a visible `<label>` on every form field.
- **CSS** — Custom properties drive the entire theme system. The mini-site preview is a self-contained component with 14 CSS variables that get rewritten in real time by JavaScript. The neon atmosphere is constructed entirely in CSS — perspective-transformed grid floor, masked sun with horizontal slice lines, repeating-linear-gradient scanlines, multi-pinprick star field via layered radial gradients, and `text-shadow` glow on every interactive element. Animations use `cubic-bezier` springs and respect `@media (prefers-reduced-motion)`.
- **JavaScript** — Closure-based factory functions (`createFusionEngine`, `createDropdown`) keep state private and expose clean APIs. Color math interpolates RGB channels for continuous tokens; discrete tokens snap at the 50% boundary.
- **Forms** — The brand-name input demonstrates the week's lesson on form safety. User input is rendered to the DOM via `textContent`, never `innerHTML`, providing baseline protection against script injection.

## 🌐 Browser & Device Compatibility

| Browser / Device | Status | Performance Notes |
| :--- | :--- | :--- |
| **Google Chrome** | ✅ Optimized | Full support — perspective transforms, `mask-image`, animated grid floor, neon glow via layered `box-shadow`. |
| **Microsoft Edge** | ✅ Optimized | Matches Chrome rendering exactly. |
| **Firefox** | ✅ Supported | Full feature support; `mask-image` requires Firefox 53+. |
| **Apple Safari (macOS)** | ✅ Supported | Native `-webkit-mask-image` and `-webkit-backdrop-filter` for the strongest CRT effect. |
| **Safari (iOS)** | ✅ Supported | Touch-friendly slider, dropdown, and brand input. Mobile-first by design. |
| **iPad / iPadOS** | ✅ Supported | Three-up grid breakpoint at 1024px. |
| **Android Chrome** | ✅ Supported | Full mobile compatibility. |

## 🌟 Key Features

- **Theme Fusion Engine:** Pick two of 35+ design philosophies, drag a 0–100 ratio slider, and the live preview interpolates colors, corner radii, typography, casing, and shadows between them. Mid-fusion is a brand-new theme.
- **Live Code Panel:** As you fuse, the generated CSS variables stream into a syntax-highlighted code block (magenta properties, cyan values, yellow strings — neon-grade syntax coloring). Toggle to JSON view for the full token object with metadata. One-click copy to clipboard.
- **Animated Color-Swap Dropdowns:** 35+ themes grouped by family (Editorial, Minimalist, Bold, Atmospheric, Tech, Marketing, Story, Commerce, Lifestyle, Civic, Playful, Vintage, Specialized). Items fly in with a staggered 18ms delay; the entire row repaints to the theme's gradient on hover with magenta bloom shadow.
- **Brand Name Input — Injection-Safe:** Type any brand name into the input field; it renders into the preview's title, logo, footer, and URL bar via `textContent`. Pasting `<script>alert(1)</script>` displays the literal text — no DOM injection. The input itself glows in magenta as you type (Monoton font, neon `text-shadow`).
- **Synthwave Atmosphere:** A glowing sun with horizontal slice lines sits on the horizon, an animated perspective grid floor scrolls beneath it, twinkling stars dot the upper sky, CRT scanlines drift across the whole viewport, and a dark vignette frames the edges. Every panel has a magenta hairline border with a faint magenta-cyan stripe at the top.
- **Random Fusion:** One button picks two distinct themes at random and a balanced ratio (30–70 range). Great demo opener.
- **Fuse Animation:** Pressing the primary button triggers a celebratory spring shake on the preview, refreshing the fusion math.
- **Neon-Glow Interactions:** Every interactive element has a glow signature — buttons gain cyan bloom on hover, the slider thumb is a white pearl wrapped in magenta neon, the status dot pulses cyan, the brand wordmark `text-shadow`s magenta at three radii.
- **Mobile-First Layout:** Single-column on phones, three-up selector grid at 720px, split preview/code panel at 1024px.
- **Accessibility First:** Every animation respects `@media (prefers-reduced-motion)`. Every interactive element has a label or `aria-label`. Escape closes open dropdowns and returns focus to the trigger.
- **Zero Dependencies:** Pure Vanilla HTML5, CSS3, JavaScript ES6+ — no frameworks, no build tools, no npm.

## 🎨 The Theme Catalog (35+ philosophies)

Themes are grouped into thirteen design families. Mix any two — the most on-brand fusions for this edition pair retro Bold philosophies with Atmospheric or Specialized ones:

| Family | Philosophies |
| :--- | :--- |
| **Editorial** | Magazine Editorial · Newspaper Broadsheet · Long-form Reading |
| **Minimalist** | Swiss Typographic · Editorial Minimalism · Japanese / Muji |
| **Bold** | Neo-Brutalism · Maximalist · Memphis 80s · Y2K · **Vaporwave** |
| **Atmospheric** | Glassmorphic · Neumorphic · Claymorphic · Aurora Liquid Mesh |
| **Tech** | Dark Technical · Terminal Hacker · Dashboard Admin · Documentation Site |
| **Marketing** | SaaS Landing · Apple Product Page |
| **Story** | Cinematic Scrollytelling · Personal Portfolio |
| **Commerce** | Luxury Product · DTC Brand |
| **Lifestyle** | Wellness · Botanical · Outdoor Adventure |
| **Civic** | Trust / Civic / Mission-Driven |
| **Playful** | Hand-Drawn Indie · Risograph |
| **Vintage** | Vintage Typographic · Mid-Century Modern · Art Deco |
| **Specialized** | **Game UI / HUD** · Crypto Web3 · Fintech Sober |

The default fusion at page load is **Vaporwave × Game UI / HUD** at 50/50 — neon nostalgia squared.

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+) — closure-based factory functions, RGB color interpolation, CSS custom property mutation, event delegation, Clipboard API with execCommand fallback
- **Styling:** CSS3 — Custom Properties, CSS Grid, Flexbox, `transform: perspective() rotateX()` for the grid floor, layered `radial-gradient` star field, `repeating-linear-gradient` scanlines, `mask-image` for the masked sun, multi-stop `text-shadow` and `box-shadow` for neon bloom, `cubic-bezier` springs, `clamp()` fluid typography, `@media (prefers-reduced-motion)`
- **Typography:** Monoton (display, the iconic 80s neon-tube serif), Audiowide (heading sans), Fraunces (preview serif), Space Grotesk (body), JetBrains Mono (code) — Google Fonts CDN
- **Storage:** No backend, no cookies, no localStorage — stateless on every load
- **Deployment:** GitHub Pages — zero-config static hosting

## 🚀 The User Flow

- **Land** → app opens with Vaporwave × Game UI/HUD fused at 50/50, brand name "RETROGRADE"
- **Open Theme A dropdown** → 35+ philosophies grouped by family slide in with stagger; hover any row to see its color signature with magenta bloom
- **Pick a theme** → preview re-skins instantly; tokens update in the code panel and color strip
- **Drag the ratio slider** → watch the typography, palette, and corners interpolate continuously between A and B
- **Type a brand name** → preview's title, logo, footer, and URL bar update via `textContent`; the input itself glows magenta as you type
- **Press FUSE THEMES** → preview shakes; current fusion is reaffirmed
- **Press RANDOM** → two distinct themes picked at random, balanced ratio
- **Press COPY CSS** → fused tokens copied to clipboard, cyan toast confirms
- **Toggle code tabs** → switch between `tokens.css` view and `meta.json` view

## 📋 Architectural Notes

The app demonstrates three patterns developers can lift directly:

- **Closure-based factory functions** — `createFusionEngine()` and `createDropdown(config)` return public APIs while keeping state in the closure. No globals, no classes, no leakage.
- **CSS-variable-driven theming** — the mini-site preview reads 14 custom properties; JavaScript only mutates those properties, never DOM structure. The preview's HTML is fixed at page load.
- **Continuous vs discrete token interpolation** — colors and radii lerp smoothly via RGB channel math; fonts, casing, and italic flags snap at the 50% midpoint. The fusion feels organic without producing nonsensical mid-states.

## 🎓 Future Vision

- **Save & share fusions** — encode the fused token set into a URL hash so links are reproducible
- **Custom theme builder** — let users define a new philosophy by entering tokens directly
- **Export presets** — download generated CSS as a `tokens.css` file or as Tailwind config
- **More themes** — Swiss Brutalist 2.0, Solarpunk, Art Nouveau, Bauhaus
- **Dark/light auto-pairing** — when fusing a dark theme with a light one, intelligently invert text contrast
- **Accessibility audit** — color-contrast scoring on every fused output, with warnings for failing combinations

## 🎓 Background

This project is part of a non-traditional path into software engineering — 12 years running a full-service insurance agency (systems design, data modeling, risk analysis), 3 years as a Behavior Detection & Analysis Officer with the Department of Homeland Security (real-time anomaly detection, pattern classification), now applied to building accessible, AI-powered web applications. Prism is a portfolio piece about *design literacy* — proof that the same person who can build a wedding planner's luxe site and a fintech engineer's dark-technical portfolio also understands the underlying token systems well enough to remix them on demand.

⭐ Love this project? Give it a star and explore the other deployed projects in this portfolio.
