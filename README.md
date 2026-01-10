# Businfo.click - Bus Information System

A modern, professional React-based frontend for a Sri Lankan bus information website, featuring route finding, fare calculation, timetables, and more.

## Features

- 🚌 **Route Finder** - Search for bus routes across Sri Lanka
- 💰 **Fare Calculator** - Calculate official bus fares (normal and expressway routes)
- 🕐 **Timetables** - View bus schedules and departure times
- 📍 **Stand Numbers** - Find bus stand locations at major terminals
- ✅ **Verified Data** - All information follows government regulatory guidelines
- 📱 **Responsive Design** - Works perfectly on all devices

## Pages

- **Home** - Landing page with hero section, stats, features, and testimonials
- **Find Routes** - Search for bus routes between locations
- **Normal Fare** - Calculate fares for regular bus routes
- **Highway Fare** - Calculate fares for expressway routes
- **Timetables** - View bus schedules
- **Stand Numbers** - Find bus stands at terminals
- **About** - Information about the platform
- **Contact** - Contact form and information

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router 6** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with CSS variables

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
businfo-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FindRoutes.jsx
│   │   ├── NormalFare.jsx
│   │   ├── HighwayFare.jsx
│   │   ├── Timetables.jsx
│   │   ├── StandNumbers.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --secondary-color: #64748b;
  --accent-color: #10b981;
  /* ... */
}
```

### Content
- Update page content in the respective files in `src/pages/`
- Modify navigation links in `src/components/Navbar.jsx`
- Update footer information in `src/components/Footer.jsx`

## Future Enhancements

- Backend API integration for real-time data
- Database for storing routes, fares, and schedules
- User authentication and saved routes
- Interactive maps for route visualization
- Multi-language support (Sinhala, Tamil, English)
- Progressive Web App (PWA) capabilities
- Push notifications for schedule updates

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please visit the Contact page or email support@businfo.click

---

Made with ❤️ for Sri Lankan travelers
