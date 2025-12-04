Stripe-Style Mega Menu Navbar (React + TypeScript + Tailwind)

A fully responsive, pixel-accurate Stripe-style Navbar with an advanced Solutions Mega Menu, built using React + TypeScript + Tailwind CSS + lucide-react.

This project replicates the same UX, spacing, grid structure, animations, and mobile behavior used on stripe.com, with additional improvements like dynamic width, caret pointer, transitions, and accessibility support.

🚀 Live Demo

(Add your deployed Vercel link here)
👉 https://your-deployment-url.vercel.app

✨ Features
🌐 Desktop Features

Full Stripe-style mega menu under “Solutions”

Hover + Focus interactions (keyboard accessible)

4 structured sections:

BY STAGE

BY USE CASE

BY INDUSTRY

ECOSYSTEM

2-column grid per section, exactly like Stripe

Smooth fade + slide animations

Dynamic width (not hardcoded)

Icon-driven items using lucide-react

Subtle hover, shadow & spacing identical to Stripe

Caret pointer above the dropdown (triangle!)

Arrow rotation on open/close

📱 Mobile Features

Hamburger → Slide-in mobile navigation

Solutions item opens a second screen
(with a Back button, matching Stripe mobile UX)

1-column grouped layout for mobile

CTA buttons pinned at bottom

Smooth transforms + opacity transitions

♿ Accessibility

aria-expanded, aria-haspopup

Escape key closes menus

Tab / Shift+Tab navigation support

Click-away detection

🛠 Tech Stack

React + TypeScript

Tailwind CSS

Vite

lucide-react (icons)

Custom hooks: useClickAway

Modern component structure & modular design

📁 Folder Structure
src/
├─ App.tsx
├─ main.tsx
├─ index.css
├─ types.d.ts
├─ data/
│  └─ navbarData.ts
├─ components/
│  ├─ Navbar/
│  │  ├─ Navbar.tsx
│  │  └─ Navbar.module.css
│  ├─ MegaMenu/
│  │  ├─ MegaMenu.tsx
│  │  └─ MegaMenu.module.css
│  ├─ MobileMenu/
│  │  └─ MobileMenu.tsx
│  └─ IconMap.tsx
└─ utils/
   └─ useClickAway.ts

🧩 How It Works
🧱 Mega Menu Layout

Each category is rendered using a 2-column internal grid
(this is the exact pattern Stripe uses in the screenshot)

Items have:

Icon

Label

Sub-description

Menu auto-expands based on content (no fixed width)

🔧 Dynamic Mega Menu Behavior

Opens on hover (desktop)

Opens on focus (keyboard)

Closes on:

mouse leave

focus out

click outside

Escape key

📱 Mobile Drawer

Smooth sliding drawer (translate-x + opacity)

Secondary screen for Solutions
↳ same data, reformatted into mobile-friendly UI

Back navigation & bottom-fixed CTAs

🛠 Installation
1. Clone the repo
git clone https://github.com/your-username/stripe-navbar.git
cd stripe-navbar

2. Install dependencies
npm install

3. Run the app
npm run dev



🔌 Dependencies Used
Library	Purpose
React	UI framework
TypeScript	Type safety & clean structure
Tailwind CSS	Utility-first styling
lucide-react	High-quality icons
Vite	Fast development bundler
🧪 Optional Improvements (Bonus)

You can extend this menu with:

Morphing animation between different mega menu types (like Stripe)

Focus-trap for full keyboard navigation

Reusable <Dropdown /> or <NavigationProvider />

Dark mode support

Animation presets (Framer Motion variant)

📝 Assumptions & Decisions

Exact Stripe text descriptions are not provided, so short placeholders are used

All data is kept in navbarData.ts for easy dynamic rendering

No external UI library (as required)

Hover on desktop, click on mobile