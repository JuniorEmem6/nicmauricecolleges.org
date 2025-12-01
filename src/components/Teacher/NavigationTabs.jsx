import React from "react";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: "📊" },
    { id: "classes", name: "Classes", icon: "🏫" },
    // { id: "students", name: "Students", icon: "👨‍🎓" },
    { id: "assignments", name: "Assignments", icon: "📝" },
    // { id: "analytics", name: "Analytics", icon: "📈" },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="mr-2 text-lg">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;