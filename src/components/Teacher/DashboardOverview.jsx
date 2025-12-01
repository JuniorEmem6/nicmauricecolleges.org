import React, { useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  TrendingUp,
  Plus,
  AlertCircle,
  FileText,
} from "lucide-react";

const DashboardOverview = ({
  userData,
  teacherStats,
  searchQuery,
  loading,
  recentActivities,
}) => {
  // Initialize stats with default values to prevent undefined errors
  const [stats, setStats] = useState({
    total_students: 0,
    total_classes: 0,
    total_courses: 0,
    rating: "0",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Initialize stats when teacherStats prop changes
  useEffect(() => {
    if (teacherStats) {
      setStats({
        total_students: teacherStats.total_students || 0,
        total_classes: teacherStats.total_classes || 0,
        total_courses: teacherStats.total_courses || 0,
        rating: teacherStats.rating || "0",
      });
    }
  }, [teacherStats]);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Activity type icon component
  const ActivityIcon = ({ type }) => {
    const iconConfig = {
      assignment: { icon: FileText, color: "text-blue-500" },
      student: { icon: Users, color: "text-green-500" },
      class: { icon: BookOpen, color: "text-purple-500" },
    };

    const config = iconConfig[type] || iconConfig.assignment;
    const IconComponent = config.icon;

    return <IconComponent className={`h-4 w-4 ${config.color}`} />;
  };

  // Loading skeleton component
  const SkeletonLoader = () => (
    <div className="space-y-6 animate-pulse">
      {/* Welcome Section Skeleton */}
      <div className="bg-gray-200 rounded-lg p-6 h-32"></div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg p-6 h-32">
            <div className="flex items-center">
              <div className="p-3 bg-gray-300 rounded-lg w-12 h-12"></div>
              <div className="ml-4">
                <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-12"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-gray-200 rounded-lg p-6 h-64"></div>
        <div className="lg:col-span-2 bg-gray-200 rounded-lg p-6 h-64"></div>
      </div>

      {/* Deadlines Skeleton */}
      <div className="bg-gray-200 rounded-lg p-6 h-48"></div>
    </div>
  );

  if (loading || isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm p-6 border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome back, {userData?.first_name || "Teacher"}!
            </h1>
            <p className="text-gray-600 mb-4">
              Here's what's happening with your classes today.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                📚 {stats.total_classes} Active Classes
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                👨‍🎓 {stats.total_students} Students
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                📖 {stats.total_courses} Courses
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg px-4 py-3 shadow-sm border min-w-[200px]">
            <p className="text-sm font-medium text-gray-600">Today's Date</p>
            <p className="text-lg font-semibold text-gray-800">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Students
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total_students}
                </p>
              </div>
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="mt-2 text-xs text-gray-500 flex items-center">
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
            +5% from last month
          </div>
        </div>

        {/* Total Classes */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-green-500 hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Classes
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total_classes}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Active this semester
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-purple-500 hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Courses
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total_courses}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Across all departments
          </div>
        </div>

        {/* Performance Rating */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-orange-500 hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  Performance Rating
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.rating}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Based on student feedback
          </div>
        </div>
      </div>

      {/* Enhanced Recent Activities */}
      <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Recent Activities
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {recentActivities.length} activities
          </span>
        </div>
        <div className="space-y-4">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">
                  <ActivityIcon type={activity.activity_type} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.created_at}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize flex-shrink-0">
                  {activity.type}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <AlertCircle className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <p>No activities found</p>
              {searchQuery && (
                <p className="text-sm">Try adjusting your search terms</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Add missing Clock icon component
const Clock = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default DashboardOverview;
