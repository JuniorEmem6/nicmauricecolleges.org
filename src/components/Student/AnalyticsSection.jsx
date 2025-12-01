// components/AnalyticsSection.jsx
import React from 'react';
import { 
  FaChartLine, 
  FaClock, 
  FaBook, 
  FaAward,
  FaCalendar,
  FaLightbulb,
  FaTrademark,
  FaTag
} from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';

const AnalyticsSection = () => {
  const analyticsData = {
    overallProgress: 72,
    weeklyStudyHours: 14,
    attendanceRate: 95,
    assignmentCompletion: 88,
    subjects: [
      { name: 'Mathematics', progress: 85, grade: 'A-', hours: 28 },
      { name: 'Computer Science', progress: 78, grade: 'B+', hours: 32 },
      { name: 'Physics', progress: 65, grade: 'B', hours: 18 },
      { name: 'Literature', progress: 92, grade: 'A', hours: 12 }
    ],
    studyPatterns: {
      mostProductive: 'Morning (8-11 AM)',
      preferredFormat: 'Video Lessons',
      weeklyGoal: 15,
      currentStreak: 12
    },
    recommendations: [
      'Focus on Physics concepts - you\'re spending less time here',
      'Try interactive quizzes for better retention',
      'Join the Advanced Calculus study group',
      'Schedule more morning study sessions'
    ]
  };

  const ProgressRing = ({ progress, size = 120, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#4f46e5"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{progress}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Learning Analytics</h2>
          <p className="text-gray-600">Track your progress and optimize your learning</p>
        </div>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
          Export Report
        </button>
      </div>

      {/* Overall Progress */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Overall Progress</h3>
            <span className="text-sm text-gray-500">This Semester</span>
          </div>
          <div className="flex items-center justify-center">
            <ProgressRing progress={analyticsData.overallProgress} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{analyticsData.weeklyStudyHours}h</div>
              <div className="text-sm text-gray-600">Weekly Study</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{analyticsData.attendanceRate}%</div>
              <div className="text-sm text-gray-600">Attendance</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Study Patterns</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <FaClock className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Most Productive Time</span>
              </div>
              <span className="text-sm font-semibold text-blue-700">{analyticsData.studyPatterns.mostProductive}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <FaBook className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Preferred Format</span>
              </div>
              <span className="text-sm font-semibold text-green-700">{analyticsData.studyPatterns.preferredFormat}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <FaTag className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Weekly Goal</span>
              </div>
              <span className="text-sm font-semibold text-purple-700">{analyticsData.studyPatterns.weeklyGoal}h</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <FaAward className="text-orange-600" />
                <span className="text-sm font-medium text-gray-700">Current Streak</span>
              </div>
              <span className="text-sm font-semibold text-orange-700">{analyticsData.studyPatterns.currentStreak} days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Subject Performance</h3>
        <div className="space-y-4">
          {analyticsData.subjects.map((subject, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <FaBook className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                  <p className="text-sm text-gray-600">{subject.hours} study hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{subject.progress}%</div>
                  <div className="text-sm text-gray-600">Progress</div>
                </div>
                <div className="text-right">
                  <div className={`font-semibold ${
                    subject.grade === 'A' ? 'text-green-600' :
                    subject.grade === 'A-' ? 'text-green-600' :
                    subject.grade === 'B+' ? 'text-blue-600' :
                    'text-yellow-600'
                  }`}>
                    {subject.grade}
                  </div>
                  <div className="text-sm text-gray-600">Grade</div>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center space-x-2">
          <FaLightbulb className="text-yellow-500" />
          <span>Personalized Recommendations</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {analyticsData.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
              <FaBookBookmark className="text-indigo-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Over Time */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Progress Timeline</h3>
        <div className="flex items-center justify-center py-8 text-gray-500">
          <div className="text-center">
            <FaChartLine className="text-4xl text-gray-300 mx-auto mb-4" />
            <p>Progress charts and historical data visualization</p>
            <p className="text-sm">(Interactive charts would be implemented here)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;