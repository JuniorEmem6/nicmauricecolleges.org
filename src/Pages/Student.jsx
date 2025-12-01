// components/StudentDashboard.jsx
import React, { useState, useEffect } from "react";
import DashboardHeader from "../components/Student/Header";
import NavigationTabs from "../components/Student/NavigationTabs";
import DashboardOverview from "../components/Student/DashboardOverview";
import ClassesSection from "../components/Student/ClassesSection";
import TeachersSection from "../components/Student/TeachersSection";
import AssignmentsSection from "../components/Student/AssignmentsSection";
import AnalyticsSection from "../components/Student/AnalyticsSection";
import SocialLearning from "../components/Student/SocialLearning";
import { Loader, AlertCircle, RefreshCw } from "lucide-react";
import Cookies from "js-cookie";

const StudentDashboard = ({ token }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userData, setUserData] = useState(null);
  const [userStat, setUserStat] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // API Service functions
  const apiService = {
    async getStudentData() {
      try {
        const response = await fetch("http://localhost:5000/user/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch student data: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error("Error fetching student data:", error);
        throw error;
      }
    },

    async getStudentNotifications() {
      try {
        const response = await fetch("http://localhost:5000/notification", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch notifications: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
      }
    },

    async markNotificationAsRead(notificationId) {
      try {
        const response = await fetch(
          `http://localhost:5000/notification/${notificationId}/read`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to mark notification as read: ${response.status}`
          );
        }

        return await response.json();
      } catch (error) {
        console.error("Error marking notification as read:", error);
        throw error;
      }
    },
  };

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch student data and notifications in parallel
      const [studentData, notificationsData] = await Promise.all([
        apiService.getStudentData(),
        apiService.getStudentNotifications(),
      ]);

      setUserData(studentData.user);
      setUserStat(studentData.stats);
      setNotifications(notificationsData.notifications);
    } catch (err) {
      console.error("Error loading student data:", err);
      setError(err.message || "Failed to load student data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadStudentData();
  };

  const handleMarkNotificationAsRead = async (id) => {
    try {
      await apiService.markNotificationAsRead(id);

      // Update local state optimistically
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    } catch (err) {
      console.error("Error marking notification as read:", err);
      // Revert optimistic update on error
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, read: false } : notif
        )
      );
    }
  };

  const handleSignOut = () => {
    // Delete a cookie named "token"
    Cookies.remove("token");

    //redirect the user after signout
    window.location.href = "/login";
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Render loading state
  if (loading && !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Loading your dashboard...
          </h2>
          <p className="text-gray-500 mt-2">
            Fetching your student information
          </p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error && !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Unable to Load Dashboard
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="space-y-3">
            <button
              onClick={loadStudentData}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
      <DashboardHeader
        userData={userData}
        notifications={notifications}
        onSearch={(query) => handleSearch(query)} // Handle search functionality
        onSignOut={handleSignOut} // Handle sign out
        searchQuery={searchQuery}
        setSearchQuery={handleSearch}
        onMarkNotificationRead={handleMarkNotificationAsRead}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        token={token}
      />

      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Refresh Indicator */}
        {refreshing && (
          <div className="flex items-center justify-center mb-4">
            <Loader className="w-5 h-5 text-blue-500 animate-spin mr-2" />
            <span className="text-sm text-gray-600">Updating data...</span>
          </div>
        )}

        {/* Error Banner */}
        {error && userData && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
            <button
              onClick={handleRefresh}
              className="text-red-700 hover:text-red-800 text-sm font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {/* Main Content */}
        {activeTab === "dashboard" && (
          <DashboardOverview
            userData={userData}
            userStats={userStat}
            searchQuery={searchQuery}
            loading={refreshing}
            token={token}
          />
        )}

        {activeTab === "classes" && (
          <ClassesSection
            searchQuery={searchQuery}
            studentId={userData?.id}
            loading={refreshing}
            stats={userStat}
            token={token}
          />
        )}

        {activeTab === "teachers" && (
          <TeachersSection
            searchQuery={searchQuery}
            studentId={userData?.id}
            loading={refreshing}
          />
        )}

        {activeTab === "assignments" && (
          <AssignmentsSection
            searchQuery={searchQuery}
            studentId={userData?.id}
            loading={refreshing}
          />
        )}

        {activeTab === "analytics" && (
          <AnalyticsSection studentId={userData?.id} loading={refreshing} />
        )}

        {activeTab === "social" && (
          <SocialLearning studentId={userData?.id} loading={refreshing} />
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
