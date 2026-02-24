import React, { useState, useEffect } from 'react';
import { Solar, Lunar } from 'lunar-javascript';
import { Calendar as CalendarIcon, Clock } from 'lucide-react'; // Added Clock
import { format } from 'date-fns';

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const lunar = Lunar.fromDate(currentDate);

  const getDayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[currentDate.getDay()];
  };

  const getTime = () => {
    return format(currentDate, 'HH:mm');
  };

  return (
    <div className="dashboard-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between h-full border border-gray-100"> {/* Consistent card styling */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-indigo-600" />
          Calendar
        </h2>
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            {getDayOfWeek()}
        </span>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <div className="text-6xl font-black text-gray-900 tracking-tight leading-none flex items-baseline gap-2">
           {getTime()}
           <Clock className="w-6 h-6 text-gray-400 self-end mb-2" />
        </div>
        <div className="text-lg text-gray-500 font-medium">
           {format(currentDate, 'MMMM do, yyyy')}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Lunar Date</span>
            <span className="text-indigo-600 font-bold text-lg">
                {lunar.getMonthInChinese()}月 {lunar.getDayInChinese()}
            </span>
        </div>
        <div className="flex items-center justify-between">
             <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Year</span>
             <span className="text-gray-700 font-medium text-sm">
                {lunar.getYearInChinese()}年 ({lunar.getYearShengXiao()})
             </span>
        </div>
        <div className="mt-3 text-xs text-gray-400 text-center italic">
            {lunar.getJieQi()} • {lunar.getGongli()}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
