import React, { useState, useEffect } from "react";
import DashboardHeader from "../components/Teacher/DashboardHeader";
import NavigationTabs from "../components/Teacher/NavigationTabs";
import DashboardOverview from "../components/Teacher/DashboardOverview";
import ClassesSection from "../components/Teacher/ClassesSection";
import StudentsSection from "../components/Teacher/StudentSection";
import AssignmentsSection from "../components/Teacher/AssignmentSection";
import AnalyticsSection from "../components/Teacher/AnalyticsSection";
import GradebookSection from "../components/Teacher/GradebookSection";
import { Loader, AlertCircle, RefreshCw } from "lucide-react";
import Cookies from "js-cookie";

const TeacherDashboard = ({ token }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userData, setUserData] = useState(null);
  const [teacherStats, setTeacherStats] = useState(null);
  const [teacherActivity, setTeacherActivity] = useState(null);
  const [teacherClasses, setTeacherClasses] = useState(null)
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);


  const mockClasses = [
    {
      id: 1,
      name: "Mathematics 101",
      subject: "Mathematics",
      students: 28,
      schedule: "Mon, Wed, Fri 9:00 AM",
      room: "Room 101",
      gradeLevel: "10th Grade",
      color: "blue",
    },
    {
      id: 2,
      name: "Advanced Calculus",
      subject: "Mathematics",
      students: 24,
      schedule: "Tue, Thu 10:30 AM",
      room: "Room 205",
      gradeLevel: "12th Grade",
      color: "purple",
    },
    {
      id: 3,
      name: "Statistics & Probability",
      subject: "Mathematics",
      students: 32,
      schedule: "Mon, Wed 1:00 PM",
      room: "Room 103",
      gradeLevel: "11th Grade",
      color: "green",
    },
    {
      id: 4,
      name: "Mathematics 201",
      subject: "Mathematics",
      students: 26,
      schedule: "Tue, Thu 2:15 PM",
      room: "Room 102",
      gradeLevel: "10th Grade",
      color: "orange",
    },
    {
      id: 5,
      name: "Algebra II",
      subject: "Mathematics",
      students: 30,
      schedule: "Mon, Wed, Fri 11:00 AM",
      room: "Room 104",
      gradeLevel: "9th Grade",
      color: "red",
    },
    {
      id: 6,
      name: "Math Enrichment",
      subject: "Mathematics",
      students: 22,
      schedule: "Fri 3:00 PM",
      room: "Room 301",
      gradeLevel: "Mixed",
      color: "indigo",
    },
  ];

  const mockStudents = [
    {
      id: 1,
      name: "Emily Chen",
      email: "emily.chen@student.school.edu",
      class: "Mathematics 101",
      grade: "A",
      attendance: "98%",
      performance: 94,
      parentContact: "mother.chen@email.com",
      lastActive: "2024-01-15T08:45:00Z",
    },
    {
      id: 2,
      name: "Michael Brown",
      email: "michael.brown@student.school.edu",
      class: "Advanced Calculus",
      grade: "B+",
      attendance: "92%",
      performance: 87,
      parentContact: "parent.brown@email.com",
      lastActive: "2024-01-15T09:20:00Z",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      email: "sophia.rodriguez@student.school.edu",
      class: "Statistics & Probability",
      grade: "A-",
      attendance: "96%",
      performance: 91,
      parentContact: "mr.rodriguez@email.com",
      lastActive: "2024-01-14T14:30:00Z",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@student.school.edu",
      class: "Mathematics 201",
      grade: "B",
      attendance: "88%",
      performance: 82,
      parentContact: "wilson.family@email.com",
      lastActive: "2024-01-15T10:15:00Z",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      email: "olivia.martinez@student.school.edu",
      class: "Algebra II",
      grade: "A",
      attendance: "100%",
      performance: 96,
      parentContact: "martinez.home@email.com",
      lastActive: "2024-01-15T11:05:00Z",
    },
  ];

  const mockAssignments = [
    {
      id: 1,
      title: "Calculus Quiz - Limits",
      class: "Advanced Calculus",
      dueDate: "2024-01-18T23:59:00Z",
      submissions: 18,
      totalStudents: 24,
      status: "grading",
      points: 100,
      type: "quiz",
    },
    {
      id: 2,
      title: "Statistics Project",
      class: "Statistics & Probability",
      dueDate: "2024-01-25T23:59:00Z",
      submissions: 12,
      totalStudents: 32,
      status: "submitting",
      points: 200,
      type: "project",
    },
    {
      id: 3,
      title: "Algebra Homework 5",
      class: "Algebra II",
      dueDate: "2024-01-16T23:59:00Z",
      submissions: 28,
      totalStudents: 30,
      status: "graded",
      points: 50,
      type: "homework",
    },
    {
      id: 4,
      title: "Midterm Exam",
      class: "Mathematics 101",
      dueDate: "2024-01-30T23:59:00Z",
      submissions: 0,
      totalStudents: 28,
      status: "draft",
      points: 300,
      type: "exam",
    },
  ];

  const mockAnalytics = {
    classPerformance: [
      { className: "Mathematics 101", average: 85.2, improvement: 2.1 },
      { className: "Advanced Calculus", average: 82.7, improvement: 1.8 },
      {
        className: "Statistics & Probability",
        average: 88.9,
        improvement: 3.2,
      },
    ],
    assignmentCompletion: {
      submitted: 142,
      pending: 38,
      late: 12,
    },
    studentProgress: [
      { week: "Week 1", averageScore: 78.5 },
      { week: "Week 2", averageScore: 81.2 },
      { week: "Week 3", averageScore: 83.7 },
      { week: "Week 4", averageScore: 85.1 },
    ],
  };

  // Mock API Service functions for Teacher
  const apiService = {
    async getTeacherData() {
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
          throw new Error(`Failed to fetch teacher data: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error("Error fetching teacher data:", error);
        throw error;
      }
    },

    // async getTeacherNotifications() {
    //   await new Promise(resolve => setTimeout(resolve, 500));
    //   return { notifications: mockNotifications };
    // },

    // async markNotificationAsRead(notificationId) {
    //   await new Promise(resolve => setTimeout(resolve, 300));
    //   return { success: true };
    // },

    async getClasses() {
      try {
        const response = await fetch("http://localhost:5000/class/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch teacher data: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error("Error fetching teacher data:", error);
        throw error;
      }
    },

    // async getStudents() {
    //   await new Promise(resolve => setTimeout(resolve, 700));
    //   return { students: mockStudents };
    // },

    // async getAssignments() {
    //   await new Promise(resolve => setTimeout(resolve, 600));
    //   return { assignments: mockAssignments };
    // },

    // async getGradebook() {
    //   await new Promise(resolve => setTimeout(resolve, 900));
    //   return { gradebook: mockGradebook };
    // },

    // async getAnalytics() {
    //   await new Promise(resolve => setTimeout(resolve, 750));
    //   return { analytics: mockAnalytics };
    // }
  };

  useEffect(() => {
    loadTeacherData();
  }, []);

  const loadTeacherData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch teacher data and notifications in parallel
      const [teacherData, teacherClasses] = await Promise.all([apiService.getTeacherData(), apiService.getClasses()]);

      setUserData(teacherData.user);
      setTeacherStats(teacherData.stats);
      setTeacherActivity(teacherData.recentActivities);
      setTeacherClasses(teacherClasses.classes)
      // setNotifications(notificationsData.notifications || []);
    } catch (err) {
      console.error("Error loading teacher data:", err);
      setError(err.message || "Failed to load teacher data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadTeacherData();
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
    Cookies.remove("token");
    window.location.href = "/login";
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to pass mock data to child components
  const getMockDataForSection = (section) => {
    switch (section) {
      case "classes":
        return mockClasses;
      case "students":
        return mockStudents;
      case "assignments":
        return mockAssignments;
      case "gradebook":
        return mockGradebook;
      case "analytics":
        return mockAnalytics;
      default:
        return null;
    }
  };

  // Render loading state
  if (loading && !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Loading your teacher dashboard...
          </h2>
          <p className="text-gray-500 mt-2">
            Fetching your teaching information
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
              onClick={loadTeacherData}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            <button
              onClick={() => {
                setError(null);
                loadTeacherData();
              }}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Use Demo Data
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
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
            teacherStats={teacherStats}
            recentActivities={teacherActivity}
            searchQuery={searchQuery}
            loading={refreshing}
            mockData={getMockDataForSection("dashboard")}
          />
        )}

        {activeTab === "classes" && (
          <ClassesSection
            searchQuery={searchQuery}
            token={token}
            teacherId={userData?.id}
            loading={refreshing}
            mockData={teacherClasses}
          />
        )}

        {activeTab === "students" && (
          <StudentsSection
            searchQuery={searchQuery}
            teacherId={userData?.id}
            loading={refreshing}
            mockData={getMockDataForSection("students")}
          />
        )}

        {activeTab === "assignments" && (
          <AssignmentsSection
            searchQuery={searchQuery}
            teacherId={userData?.id}
            loading={refreshing}
            mockData={getMockDataForSection("assignments")}
          />
        )}

        {activeTab === "analytics" && (
          <AnalyticsSection
            teacherId={userData?.id}
            loading={refreshing}
            mockData={getMockDataForSection("analytics")}
          />
        )}

        {activeTab === "gradebook" && (
          <GradebookSection
            teacherId={userData?.id}
            loading={refreshing}
            mockData={getMockDataForSection("gradebook")}
          />
        )}
      </main>
    </div>
  );
};

export default TeacherDashboard;
