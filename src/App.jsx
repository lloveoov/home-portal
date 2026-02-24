import React from 'react';
import WeatherWidget from './components/WeatherWidget.jsx';
import CalendarWidget from './components/CalendarWidget.jsx';
import QuickLinks from './components/QuickLinks.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight sm:text-6xl">
            My Home
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Your personal command center for everything.
          </p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Calendar Widget */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <CalendarWidget />
          </div>

          {/* Weather Widget */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <WeatherWidget />
          </div>

          {/* Future Widget Placeholder */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex-1 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Coming Soon</h3>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Feature</span>
              </div>
              <p className="text-gray-500">More widgets can be added here (e.g., Todoist, Spotify, System Stats).</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
                Quick Access
            </h2>
            <QuickLinks />
        </div>
      </div>
    </div>
  );
}

export default App;
