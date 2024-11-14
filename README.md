# Webb Desi Farms

Welcome to **Webb Desi Farms**, a single-page application (SPA) showcasing an interactive farm experience using Vite! This application allows users to explore different aspects of a farm, shop farm products, and manage a shopping cart. The app also includes theme toggling and multiple pages, making it a fully immersive farm experience. CSS class names used in BEM-style, some kebab-case format will be replaced.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Accessibility](#accessibility)
- [Legalities](#legalities)
- [License](#license)

## Features

- **Responsive Design**: Optimized for both desktop and mobile views.
- **Theme Toggle**: Switch between light and dark themes.
- **Interactive Pages**: Explore different farm aspects like animals, community, shop, and more.
- **Shopping Cart**: Add, remove, and update items with quantity management.
- **Routing**: Single-page navigation for smooth transitions between sections.
- **(TODO) Payment API integration**
- **(TODO) Node.js, Nginx integration**
- **(TODO) Kubernetes development**

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abulalabula/wd-farm-site.git
   cd webb-desi-farms
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Application**:
   ```
   npm run dev
   ```
## File Structure

Here’s the updated file structure based on your provided image:

```plaintext
webb-desi-farms/
├── public/
├── src/
│   ├── assets/                  # Images and icons (Now empty)
│   ├── components/              # Reusable components
│   │   ├── accordion-section/   
│   │   ├── button/              
│   │   ├── card/                
│   │   ├── cart/                # (Fixing) Shopping cart component
│   │   ├── footer/              
│   │   ├── form/                
│   │   ├── gallery/             
│   │   ├── hamburger-menu/      # Hamburger menu component
│   │   ├── header/              # (Fixing) Header component with navigation and theme toggle
│   │   ├── main-area/           
│   │   └── navigation/          
│   ├── pages/                   # Pages representing different sections of the app
│   ├── App.css                  # Main CSS file for app-wide styling
│   ├── App.jsx                  # Main component with routing
│   ├── index.css                # Global styles
│   └── main.jsx                 # React entry point
├── package.json                 # Dependencies and scripts
└── README.md                    

Note: This structure will be updated as additional files are provided.
```

## Accessibility

This web application follows accessibility best practices to ensure usability for all users, meeting the following requirements:

- **Semantic HTML**: 
  - Semantic elements (e.g., `<header>`, `<footer>`, `<main>`, `<nav>`) are used to define the structure.
  - Appropriate use of heading elements (`<h1>`, `<h2>`, etc.) without skipping levels, ensuring logical content structure.

- **Images and Alt Text**:
  - All foreground images include accurate and descriptive `alt` attributes.
  - Background images will not convey essential information.

- **Text and Readability**:
  - Font sizes use `rem` units with a minimum of `0.75rem`.
  - Pages are fully readable and functional at up to 200% zoom.

- **Keyboard Accessibility**:
  - All interactive elements and forms are accessible via both keyboard and mouse.
  - (Fixing) A skip link is included to allow keyboard users to jump to main content directly.

- **WCAG Contrast and Link Requirements**:
  - All content meets WCAG AA contrast guidelines.
  - (TODO) Each link is uniquely identifiable or labeled using `aria-label` where necessary.

- **Form Accessibility**:
  - Form fields have associated `<label>` elements for screen readers.
  - (TODO)Controls include accessible labels, either as text, associated labels, or `aria-label` attributes.

- **Motion Sensitivity**:
  - Any animations or transitions are placed within media queries that designed mobile-based.

## Legalities
- Test images are from http://unsplash.com. 
- CSS adapted from https://css.gg under the MIT License.

## License
This React project is licensed under the MIT License.