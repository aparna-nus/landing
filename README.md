# Nellanickal Commercium Landing Page

A modern, animated React landing page for Nellanickal Commercium export house.

## Features

- ✨ Smooth animations and transitions
- 📊 Counter animations for statistics
- 🚢 Lottie animation integration
- 🎨 Beautiful color scheme inspired by the provided design
- 📱 Fully responsive design
- ⚙️ Easy configuration for CMS integration
- 🔗 Smooth scroll navigation

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Lottie Animation

Place your `ship.json` Lottie animation file in the project root directory (same level as `package.json`).

### 3. Run Locally

```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## Configuration

All customizable content is in `config.js`:

- Company name
- Tagline and hero subtitle
- Statistics (products, categories, countries)
- Navigation links
- About section content
- Color scheme
- Animation settings

### Example: Change Statistics

```javascript
stats: {
  products: 150000,    // Change to your number
  categories: 150,     // Change to your number
  countries: 2         // Change to your number
}
```

### Example: Update Color Scheme

```javascript
colors: {
  primary: "#FF7A59",      // Main accent color
  secondary: "#FFD166",    // Secondary accent
  accent: "#7B68EE",       // Tertiary accent
  dark: "#1A1A2E",         // Dark text/backgrounds
  light: "#F8F9FA",        // Light backgrounds
  text: "#2D3748",         // Body text
  textLight: "#718096"     // Muted text
}
```

## Project Structure

```
.
├── App.jsx           # Main React component
├── App.css           # All styling
├── config.js         # Configuration file (easy CMS integration)
├── main.jsx          # React entry point
├── index.html        # HTML template
├── ship.json         # Lottie animation (you need to add this)
├── package.json      # Dependencies
└── vite.config.js    # Build configuration
```

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## CMS Integration Notes

The `config.js` file is structured for easy integration with Wix or other CMS platforms:

1. All text content is in one place
2. Links are centralized
3. Colors use CSS variables
4. Numbers and content are separate from logic

For Wix integration:
- Map `config.js` fields to Wix CMS collections
- Update `App.jsx` to fetch from Wix APIs instead of importing config
- Use Wix's color settings to override CSS variables

## Customization Tips

### Change Fonts
Edit the Google Fonts import in `App.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

### Modify Animations
Adjust animation settings in `config.js`:
```javascript
animations: {
  counterDuration: 2000,    // milliseconds for counter
  scrollBehavior: "smooth"  // scroll behavior
}
```

### Add More Sections
Add new sections in `App.jsx` and style them in `App.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Nellanickal Commercium. All rights reserved.
