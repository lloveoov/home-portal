# Home Portal 🏠

A modern, card-based home dashboard to centralize your smart home services, calendar, and weather. Built with React, Vite, and Tailwind CSS.

## Features ✨

- **Quick Links:** Immediate access to Home Assistant, OpenClaw, Immich, and more.
- **Calendar Widget:** Real-time clock with Chinese Lunar Date (Nomral/Solar/Lunar conversion).
- **Weather Widget:** Auto-refreshing weather for Shanghai (configurable) via Open-Meteo API.
- **Responsive Design:** Works on desktop, tablet, and mobile.

## Tech Stack 🛠️

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data:** Lunar-Javascript (Calendar), Axios (Weather API)

## Getting Started 🚀

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lloveoov/home-portal.git
   cd home-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to view your portal.

4. Build for production:
   ```bash
   npm run build
   # The output will be in the dist/ folder
   npm run preview
   ```

## Configuration ⚙️

- **Quick Links:** Edit `src/components/QuickLinks.jsx` to add/remove services.
- **Weather Location:** Edit `LAT` and `LON` constants in `src/components/WeatherWidget.jsx`.

## License 📄

MIT
