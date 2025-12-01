// components/NavigationTabs.jsx
import React from "react";
import { FaChartLine, FaChalkboardTeacher, FaTasks } from "react-icons/fa";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: FaChartLine },
    { id: "classes", label: "My Classes", icon: FaChalkboardTeacher },
    // { id: 'teachers', label: 'Teachers', icon: FaUserTie },
    { id: "assignments", label: "Assignments", icon: FaTasks },
    // { id: 'analytics', label: 'Analytics', icon: FaChartBar },
    // { id: 'social', label: 'Social', icon: FaUsers }
  ];

  return (
    <nav className="bg-white/60 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 py-4 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                activeTab === id
                  ? "border-indigo-500 text-indigo-600 bg-indigo-50/50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Icon
                className={`text-lg ${
                  activeTab === id ? "text-indigo-600" : "text-gray-400"
                }`}
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationTabs;
