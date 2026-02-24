# Home Portal 🏠

A modern, card-based home dashboard to centralize your smart home services, calendar, and weather. Built with React, Vite, and Tailwind CSS.

## Features ✨

- **Quick Links:** Immediate access to Home Assistant, OpenClaw, Immich, and more.
- **Calendar Widget:** Real-time clock with Chinese Lunar Date (Normal/Solar/Lunar conversion).
- **Weather Widget:** Auto-refreshing weather for Shanghai (configurable) via Open-Meteo API.
- **Responsive Design:** Works on desktop, tablet, and mobile.
- **Docker Support:** Easy deployment with Docker Compose.

## Tech Stack 🛠️

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data:** Lunar-Javascript (Calendar), Axios (Weather API)

## Getting Started 🚀

### Option 1: Docker (Recommended for Deployment) 🐳

1. Install Docker Desktop for Windows.
2. Clone the repository:
   ```bash
   git clone https://github.com/lloveoov/home-portal.git
   cd home-portal
   ```
3. Run with Docker Compose:
   ```bash
   docker-compose up -d --build
   ```
4. Access via browser:
   - Local: http://localhost
   - Network: `http://<YOUR_PC_IP>`

### Option 2: Development Mode

1. Install Node.js (v18+) and dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173.

## Configuration ⚙️

- **Quick Links:** Edit `src/components/QuickLinks.jsx`.
- **Weather Location:** Edit `LAT` and `LON` constants in `src/components/WeatherWidget.jsx`.

## Roadmap 🗺️

- [ ] Multi-user support & personalization
- [ ] Google/Outlook Calendar integration
- [ ] Todoist integration

## License 📄

MIT
