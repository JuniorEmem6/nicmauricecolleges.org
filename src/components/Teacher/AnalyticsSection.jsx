import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Award,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Filter,
  ChevronDown,
  Eye,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

const AnalyticsSection = ({ teacherId, loading, mockData }) => {
  const [timeRange, setTimeRange] = useState("month"); // week, month, semester, year
  const [activeView, setActiveView] = useState("overview"); // overview, performance, engagement
  const [selectedClass, setSelectedClass] = useState("all");
  const [chartData, setChartData] = useState(null);
  const [isExporting, setIsExporting] = useState(false);

  // Enhanced comprehensive mock analytics data with safe defaults
  const defaultMockData = {
    overview: {
      totalStudents: 142,
      averagePerformance: 82.5,
      completionRate: 88.3,
      attendanceRate: 94.2,
      improvement: 2.7,
      satisfaction: 4.7,
      totalClasses: 6,
      activeAssignments: 8
    },
    classPerformance: [
      { 
        id: 1,
        className: "Mathematics 101", 
        average: 85.2, 
        improvement: 2.1,
        students: 28,
        topPerformer: "Emily Chen",
        weakestArea: "Algebra",
        color: "blue"
      },
      { 
        id: 2,
        className: "Advanced Calculus", 
        average: 82.7, 
        improvement: 1.8,
        students: 24,
        topPerformer: "Michael Brown",
        weakestArea: "Integration",
        color: "purple"
      },
      { 
        id: 3,
        className: "Statistics & Probability", 
        average: 88.9, 
        improvement: 3.2,
        students: 32,
        topPerformer: "Sophia Rodriguez",
        weakestArea: "Probability Theory",
        color: "green"
      },
      { 
        id: 4,
        className: "Mathematics 201", 
        average: 79.8, 
        improvement: 1.2,
        students: 26,
        topPerformer: "James Wilson",
        weakestArea: "Geometry",
        color: "orange"
      },
      { 
        id: 5,
        className: "Algebra II", 
        average: 84.5, 
        improvement: 2.8,
        students: 30,
        topPerformer: "Olivia Martinez",
        weakestArea: "Quadratic Equations",
        color: "red"
      }
    ],
    performanceTrends: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
      mathematics: [78, 82, 85, 83, 87, 89],
      science: [75, 78, 82, 80, 84, 86],
      average: [76.5, 80, 83.5, 81.5, 85.5, 87.5]
    },
    assignmentAnalytics: {
      submitted: 142,
      pending: 38,
      late: 12,
      averageScore: 82.3,
      completionRate: 78.9,
      graded: 104,
      needsGrading: 38
    },
    studentProgress: [
      { 
        id: 1,
        name: "Emily Chen", 
        progress: 94, 
        trend: "up",
        assignmentsCompleted: 24,
        lastActive: "2 hours ago",
        avatar: "EC"
      },
      { 
        id: 2,
        name: "Michael Brown", 
        progress: 87, 
        trend: "up",
        assignmentsCompleted: 22,
        lastActive: "1 day ago",
        avatar: "MB"
      },
      { 
        id: 3,
        name: "Sophia Rodriguez", 
        progress: 91, 
        trend: "stable",
        assignmentsCompleted: 25,
        lastActive: "5 hours ago",
        avatar: "SR"
      },
      { 
        id: 4,
        name: "James Wilson", 
        progress: 82, 
        trend: "down",
        assignmentsCompleted: 20,
        lastActive: "3 days ago",
        avatar: "JW"
      },
      { 
        id: 5,
        name: "Olivia Martinez", 
        progress: 96, 
        trend: "up",
        assignmentsCompleted: 26,
        lastActive: "1 hour ago",
        avatar: "OM"
      }
    ],
    engagementMetrics: {
      participationRate: 76.4,
      averageTimeSpent: "2.3 hours/day",
      resourceDownloads: 145,
      discussionPosts: 89,
      questionsAsked: 67,
      averageResponseTime: "2.4 hours"
    },
    gradeDistribution: {
      A: 28,
      B: 45,
      C: 52,
      D: 15,
      F: 2
    },
    attendanceData: {
      present: 134,
      absent: 8,
      late: 12,
      averageAttendance: 94.2
    }
  };

  // Safe data initialization
  useEffect(() => {
    const data = mockData || defaultMockData;
    // Ensure all required fields exist with safe defaults
    const safeData = {
      overview: {
        totalStudents: 0,
        averagePerformance: 0,
        completionRate: 0,
        attendanceRate: 0,
        improvement: 0,
        satisfaction: 0,
        ...data.overview
      },
      classPerformance: data.classPerformance || [],
      performanceTrends: {
        labels: [],
        mathematics: [],
        science: [],
        average: [],
        ...data.performanceTrends
      },
      assignmentAnalytics: {
        submitted: 0,
        pending: 0,
        late: 0,
        averageScore: 0,
        completionRate: 0,
        ...data.assignmentAnalytics
      },
      studentProgress: data.studentProgress || [],
      engagementMetrics: {
        participationRate: 0,
        averageTimeSpent: "0 hours/day",
        resourceDownloads: 0,
        discussionPosts: 0,
        questionsAsked: 0,
        ...data.engagementMetrics
      },
      gradeDistribution: {
        A: 0, B: 0, C: 0, D: 0, F: 0,
        ...data.gradeDistribution
      },
      attendanceData: {
        present: 0,
        absent: 0,
        late: 0,
        averageAttendance: 0,
        ...data.attendanceData
      }
    };
    setChartData(safeData);
  }, [mockData]);

  // Safe data access functions
  const getOverviewData = () => chartData?.overview || {};
  const getClassPerformance = () => chartData?.classPerformance || [];
  const getPerformanceTrends = () => chartData?.performanceTrends || { labels: [], average: [] };
  const getAssignmentAnalytics = () => chartData?.assignmentAnalytics || {};
  const getStudentProgress = () => chartData?.studentProgress || [];
  const getEngagementMetrics = () => chartData?.engagementMetrics || {};
  const getGradeDistribution = () => chartData?.gradeDistribution || {};
  const getAttendanceData = () => chartData?.attendanceData || {};

  // Enhanced bar chart component with error handling
  const BarChart = ({ data = [], color = "blue", height = 200, showLabels = true }) => {
    if (!data || data.length === 0) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <AlertCircle className="w-8 h-8 mr-2" />
          No data available
        </div>
      );
    }

    const maxValue = Math.max(...data);
    const minBarHeight = 10; // Minimum bar height for visibility
    
    return (
      <div className="flex items-end justify-between space-x-1" style={{ height: `${height}px` }}>
        {data.map((value, index) => {
          const barHeight = maxValue > 0 ? Math.max((value / maxValue) * (height - 40), minBarHeight) : minBarHeight;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1 group">
              <div
                className={`w-full rounded-t transition-all duration-500 ease-out relative ${
                  color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                  color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                  color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' : 
                  'bg-gray-500 hover:bg-gray-600'
                }`}
                style={{ height: `${barHeight}px` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {value}%
                </div>
              </div>
              {showLabels && (
                <span className="text-xs text-gray-500 mt-2 truncate w-full text-center">
                  {getPerformanceTrends().labels[index] || `W${index + 1}`}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Enhanced pie chart component with error handling
  const PieChartDisplay = ({ data = {}, size = 120 }) => {
    const safeData = { A: 0, B: 0, C: 0, D: 0, F: 0, ...data };
    const total = Object.values(safeData).reduce((sum, value) => sum + value, 0);
    
    if (total === 0) {
      return (
        <div className="flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="text-center text-gray-500">
            <AlertCircle className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm">No data</div>
          </div>
        </div>
      );
    }

    let accumulated = 0;
    const colors = {
      A: "#10B981",
      B: "#3B82F6",
      C: "#F59E0B",
      D: "#EF4444",
      F: "#DC2626"
    };

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 120 120">
          {Object.entries(safeData).map(([grade, value]) => {
            const percentage = (value / total) * 100;
            const startAngle = accumulated;
            accumulated += percentage;
            
            if (percentage === 0) return null;
            
            const x1 = 60 + 50 * Math.cos(2 * Math.PI * startAngle / 100 - Math.PI / 2);
            const y1 = 60 + 50 * Math.sin(2 * Math.PI * startAngle / 100 - Math.PI / 2);
            const x2 = 60 + 50 * Math.cos(2 * Math.PI * accumulated / 100 - Math.PI / 2);
            const y2 = 60 + 50 * Math.sin(2 * Math.PI * accumulated / 100 - Math.PI / 2);
            
            const largeArc = percentage > 50 ? 1 : 0;
            
            return (
              <path
                key={grade}
                d={`M 60 60 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={colors[grade]}
                className="transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{total}</div>
            <div className="text-xs text-gray-500">Students</div>
          </div>
        </div>
      </div>
    );
  };

  // Export functionality
  const handleExport = async () => {
    setIsExporting(true);
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(`Analytics report exported for ${timeRange} period`);
    setIsExporting(false);
  };

  // Trend indicator component
  const TrendIndicator = ({ trend, value }) => {
    const getTrendIcon = () => {
      switch (trend) {
        case 'up': return <ArrowUp className="w-4 h-4" />;
        case 'down': return <ArrowDown className="w-4 h-4" />;
        default: return <Minus className="w-4 h-4" />;
      }
    };

    const getTrendColor = () => {
      switch (trend) {
        case 'up': return 'text-green-600';
        case 'down': return 'text-red-600';
        default: return 'text-gray-600';
      }
    };

    return (
      <div className={`flex items-center ${getTrendColor()}`}>
        {getTrendIcon()}
        <span className="ml-1 text-sm">{value}</span>
      </div>
    );
  };

  if (loading || !chartData) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-200 rounded-lg p-6 h-32"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const overviewData = getOverviewData();
  const classPerformance = getClassPerformance();
  const performanceTrends = getPerformanceTrends();
  const assignmentAnalytics = getAssignmentAnalytics();
  const studentProgress = getStudentProgress();
  const engagementMetrics = getEngagementMetrics();
  const gradeDistribution = getGradeDistribution();
  const attendanceData = getAttendanceData();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Teaching Analytics</h2>
          <p className="text-gray-600">Comprehensive insights into student performance and engagement</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
          {/* Class Filter */}
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            <option value="all">All Classes</option>
            {classPerformance.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.className}
              </option>
            ))}
          </select>

          {/* Time Range Filter */}
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="semester">This Semester</option>
            <option value="year">This Year</option>
          </select>

          {/* View Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveView("overview")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center ${
                activeView === "overview" 
                  ? "bg-white text-gray-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveView("performance")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center ${
                activeView === "performance" 
                  ? "bg-white text-gray-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Performance
            </button>
            <button
              onClick={() => setActiveView("engagement")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center ${
                activeView === "engagement" 
                  ? "bg-white text-gray-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Engagement
            </button>
          </div>

          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className={`w-4 h-4 mr-2 ${isExporting ? 'animate-spin' : ''}`} />
            {isExporting ? 'Exporting...' : 'Export Report'}
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      {activeView === "overview" && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Average Performance</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{overviewData.averagePerformance}%</p>
                  <TrendIndicator trend="up" value={`+${overviewData.improvement}%`} />
                </div>
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Completion Rate</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{overviewData.completionRate}%</p>
                  <p className="text-green-600 text-sm mt-1 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    On track
                  </p>
                </div>
                <div className="p-3 bg-green-500 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Attendance Rate</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{overviewData.attendanceRate}%</p>
                  <p className="text-green-600 text-sm mt-1 flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Excellent engagement
                  </p>
                </div>
                <div className="p-3 bg-purple-500 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Student Satisfaction</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{overviewData.satisfaction}/5</p>
                  <p className="text-green-600 text-sm mt-1 flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Very positive
                  </p>
                </div>
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Trends */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <LineChart className="w-5 h-5 mr-2 text-blue-500" />
                Performance Trends
              </h3>
              <div className="h-64">
                <BarChart 
                  data={performanceTrends.average} 
                  color="blue" 
                  height={200} 
                />
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                {performanceTrends.labels.map((label, index) => (
                  <span key={index}>{label}</span>
                ))}
              </div>
            </div>

            {/* Grade Distribution */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-green-500" />
                Grade Distribution
              </h3>
              <div className="flex items-center justify-center">
                <PieChartDisplay data={gradeDistribution} />
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {Object.entries(gradeDistribution).map(([grade, count]) => (
                  <div key={grade} className="text-center">
                    <div className={`text-sm font-semibold ${
                      grade === 'A' ? 'text-green-600' :
                      grade === 'B' ? 'text-blue-600' :
                      grade === 'C' ? 'text-yellow-600' :
                      grade === 'D' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {grade}
                    </div>
                    <div className="text-xs text-gray-600">{count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Class Performance */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Class Performance</h3>
            <div className="space-y-4">
              {classPerformance.map((classData) => (
                <div key={classData.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{classData.className}</h4>
                    <p className="text-sm text-gray-600">{classData.students} students • {classData.topPerformer} (Top Performer)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-800">{classData.average}%</div>
                    <TrendIndicator trend="up" value={`+${classData.improvement}%`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Performance View */}
      {activeView === "performance" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Assignment Analytics */}
            <div className="lg:col-span-2 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Assignment Analytics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-bold text-blue-600">{assignmentAnalytics.submitted}</div>
                  <div className="text-sm text-gray-600">Submitted</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-bold text-yellow-600">{assignmentAnalytics.pending}</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-bold text-red-600">{assignmentAnalytics.late}</div>
                  <div className="text-sm text-gray-600">Late</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-bold text-green-600">{assignmentAnalytics.averageScore}%</div>
                  <div className="text-sm text-gray-600">Avg Score</div>
                </div>
              </div>
              
              {/* Additional Assignment Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-green-600">{assignmentAnalytics.graded}</div>
                  <div className="text-sm text-gray-600">Graded</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-orange-600">{assignmentAnalytics.needsGrading}</div>
                  <div className="text-sm text-gray-600">Needs Grading</div>
                </div>
              </div>
            </div>

            {/* Student Progress */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performers</h3>
              <div className="space-y-3">
                {studentProgress.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
                        {student.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{student.name}</div>
                        <div className="text-sm text-gray-600">{student.assignmentsCompleted} assignments</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${
                        student.progress >= 90 ? 'text-green-600' :
                        student.progress >= 80 ? 'text-blue-600' : 'text-yellow-600'
                      }`}>
                        {student.progress}%
                      </div>
                      <TrendIndicator trend={student.trend} value={student.trend} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engagement View */}
      {activeView === "engagement" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200 hover:shadow-md transition-all duration-200">
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{engagementMetrics.participationRate}%</div>
                <div className="text-blue-600 text-sm">Participation Rate</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200 hover:shadow-md transition-all duration-200">
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{engagementMetrics.averageTimeSpent}</div>
                <div className="text-green-600 text-sm">Avg Time Spent</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200 hover:shadow-md transition-all duration-200">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{engagementMetrics.resourceDownloads}</div>
                <div className="text-purple-600 text-sm">Resources Downloaded</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Discussion Activity</h3>
              <div className="text-center py-8">
                <div className="text-3xl font-bold text-gray-800 mb-2">{engagementMetrics.discussionPosts}</div>
                <div className="text-gray-600">Discussion Posts</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Questions</h3>
              <div className="text-center py-8">
                <div className="text-3xl font-bold text-gray-800 mb-2">{engagementMetrics.questionsAsked}</div>
                <div className="text-gray-600">Questions Asked</div>
              </div>
            </div>
          </div>

          {/* Additional Engagement Metrics */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-xl font-bold text-blue-600">{attendanceData.present}</div>
                <div className="text-sm text-gray-600">Present Today</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-xl font-bold text-green-600">{attendanceData.averageAttendance}%</div>
                <div className="text-sm text-gray-600">Avg Attendance</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-xl font-bold text-orange-600">{engagementMetrics.averageResponseTime}</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-xl font-bold text-purple-600">{overviewData.totalStudents}</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsSection;