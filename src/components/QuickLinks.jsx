import React from 'react';
import { Home, Image, Terminal } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      name: 'Home Assistant',
      url: 'http://192.168.1.16:8123/',
      icon: <Home className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      description: 'Smart Home Control',
    },
    {
      name: 'OpenClaw',
      url: 'http://127.0.0.1:18789/',
      icon: <Terminal className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-purple-600 to-purple-800',
      description: 'AI Workspace Agent',
    },
    {
      name: 'Immich',
      url: 'http://192.168.1.16:2283/',
      icon: <Image className="w-10 h-10 text-white" />,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      description: 'Photo Backup',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-40 bg-white"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 opacity-10 ${link.color} group-hover:opacity-20 transition-opacity duration-300`}></div>

          <div className="flex items-start justify-between z-10">
            <div className={`p-3 rounded-xl shadow-md ${link.color}`}>
              {link.icon}
            </div>
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
          </div>

          <div className="z-10 mt-auto">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-black transition-colors">
              {link.name}
            </h3>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {link.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
