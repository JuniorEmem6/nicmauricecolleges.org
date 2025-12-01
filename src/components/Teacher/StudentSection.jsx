import React, { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  Mail, 
  Phone, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Download,
  Upload,
  UserPlus,
  Calendar,
  BookOpen,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const StudentsSection = ({ searchQuery, teacherId, loading, mockData }) => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState(new Set());
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [expandedStudent, setExpandedStudent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock data with comprehensive student information
  const defaultMockData = [
    {
      id: 1,
      name: "Emily Chen",
      email: "emily.chen@student.school.edu",
      class: "Mathematics 101",
      grade: "A",
      attendance: "98%",
      performance: 94,
      parentContact: "mother.chen@email.com",
      parentPhone: "+1 (555) 123-4567",
      lastActive: "2024-01-15T08:45:00Z",
      joinDate: "2023-09-01",
      assignmentsCompleted: 24,
      averageScore: 94.2,
      behavior: "Excellent",
      notes: "Consistently performs above expectations. Very engaged in class discussions.",
      avatar: null,
      subjects: ["Mathematics", "Physics", "Computer Science"]
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
      parentPhone: "+1 (555) 234-5678",
      lastActive: "2024-01-15T09:20:00Z",
      joinDate: "2023-09-01",
      assignmentsCompleted: 22,
      averageScore: 86.8,
      behavior: "Good",
      notes: "Shows improvement in recent assignments. Could benefit from extra practice.",
      avatar: null,
      subjects: ["Mathematics", "Chemistry", "Biology"]
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
      parentPhone: "+1 (555) 345-6789",
      lastActive: "2024-01-14T14:30:00Z",
      joinDate: "2023-09-01",
      assignmentsCompleted: 25,
      averageScore: 91.5,
      behavior: "Excellent",
      notes: "Very creative problem solver. Active participant in group activities.",
      avatar: null,
      subjects: ["Mathematics", "Statistics", "Economics"]
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
      parentPhone: "+1 (555) 456-7890",
      lastActive: "2024-01-15T10:15:00Z",
      joinDate: "2023-09-01",
      assignmentsCompleted: 20,
      averageScore: 82.3,
      behavior: "Satisfactory",
      notes: "Needs improvement in homework completion. Shows potential in class.",
      avatar: null,
      subjects: ["Mathematics", "History", "English"]
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
      parentPhone: "+1 (555) 567-8901",
      lastActive: "2024-01-15T11:05:00Z",
      joinDate: "2023-09-01",
      assignmentsCompleted: 26,
      averageScore: 96.1,
      behavior: "Outstanding",
      notes: "Exceptional mathematical ability. Often helps classmates.",
      avatar: null,
      subjects: ["Mathematics", "Art", "Music"]
    },
    {
      id: 6,
      name: "Ethan Thompson",
      email: "ethan.thompson@student.school.edu",
      class: "Mathematics 101",
      grade: "C+",
      attendance: "85%",
      performance: 78,
      parentContact: "thompson.house@email.com",
      parentPhone: "+1 (555) 678-9012",
      lastActive: "2024-01-14T15:45:00Z",
      joinDate: "2023-09-01",
      assignmentsCompleted: 18,
      averageScore: 78.5,
      behavior: "Needs Attention",
      notes: "Struggling with current material. Recommended for tutoring sessions.",
      avatar: null,
      subjects: ["Mathematics", "Physical Education", "Health"]
    }
  ];

  useEffect(() => {
    // Use provided mock data or default data
    const studentData = mockData || defaultMockData;
    setStudents(studentData);
    setFilteredStudents(studentData);
  }, [mockData]);

  useEffect(() => {
    // Filter and sort students based on search and filters
    let filtered = students.filter(student => 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.class.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply additional filters
    if (activeFilter !== "all") {
      filtered = filtered.filter(student => {
        switch (activeFilter) {
          case "excellent": return student.behavior === "Excellent" || student.behavior === "Outstanding";
          case "needs-attention": return student.behavior === "Needs Attention";
          case "high-performance": return student.performance >= 90;
          case "low-performance": return student.performance < 80;
          default: return true;
        }
      });
    }

    // Sort students
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === "name") {
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredStudents(filtered);
  }, [searchQuery, students, sortBy, sortOrder, activeFilter]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const toggleStudentSelection = (studentId) => {
    const newSelected = new Set(selectedStudents);
    if (newSelected.has(studentId)) {
      newSelected.delete(studentId);
    } else {
      newSelected.add(studentId);
    }
    setSelectedStudents(newSelected);
  };

  const selectAllStudents = () => {
    if (selectedStudents.size === filteredStudents.length) {
      setSelectedStudents(new Set());
    } else {
      setSelectedStudents(new Set(filteredStudents.map(s => s.id)));
    }
  };

  const getPerformanceColor = (performance) => {
    if (performance >= 90) return "text-green-600 bg-green-100";
    if (performance >= 80) return "text-blue-600 bg-blue-100";
    if (performance >= 70) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getBehaviorColor = (behavior) => {
    switch (behavior) {
      case "Outstanding": return "text-purple-600 bg-purple-100";
      case "Excellent": return "text-green-600 bg-green-100";
      case "Good": return "text-blue-600 bg-blue-100";
      case "Satisfactory": return "text-yellow-600 bg-yellow-100";
      case "Needs Attention": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const handleExportData = () => {
    // Simulate export functionality
    alert(`Exporting data for ${selectedStudents.size} selected students`);
  };

  const handleSendMessage = () => {
    // Simulate message functionality
    alert(`Sending message to ${selectedStudents.size} selected students`);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Student Management</h2>
          <p className="text-gray-600">
            Manage {filteredStudents.length} students across your classes
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
          {selectedStudents.size > 0 && (
            <>
              <button
                onClick={handleExportData}
                className="flex items-center px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Export ({selectedStudents.size})
              </button>
              <button
                onClick={handleSendMessage}
                className="flex items-center px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Message ({selectedStudents.size})
              </button>
            </>
          )}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-200 transform hover:scale-105"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Student
          </button>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex-1 flex flex-col sm:flex-row gap-3">
          {/* View Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === "grid" 
                  ? "bg-white text-gray-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === "list" 
                  ? "bg-white text-gray-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              List View
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeFilter === "all" 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Students
            </button>
            <button
              onClick={() => setActiveFilter("excellent")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeFilter === "excellent" 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Excellent
            </button>
            <button
              onClick={() => setActiveFilter("needs-attention")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeFilter === "needs-attention" 
                  ? "bg-red-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Needs Attention
            </button>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            <option value="name">Name</option>
            <option value="performance">Performance</option>
            <option value="attendance">Attendance</option>
            <option value="grade">Grade</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            {sortOrder === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Students Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className={`border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-blue-300 ${
                selectedStudents.has(student.id) ? 'ring-2 ring-blue-500 border-blue-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedStudents.has(student.id)}
                    onChange={() => toggleStudentSelection(student.id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <button
                  onClick={() => setExpandedStudent(expandedStudent === student.id ? null : student.id)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-semibold text-lg text-gray-800 mb-1">{student.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{student.class}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Performance:</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceColor(student.performance)}`}>
                    {student.performance}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Attendance:</span>
                  <span className="text-sm font-medium text-gray-700">{student.attendance}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Behavior:</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBehaviorColor(student.behavior)}`}>
                    {student.behavior}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-100 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact
                </button>
                <button className="flex-1 bg-gray-100 text-gray-600 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </button>
              </div>

              {/* Expanded Details */}
              {expandedStudent === student.id && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg animate-slideDown">
                  <h4 className="font-medium text-gray-800 mb-2">Additional Info</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Parent Email:</span>
                      <span className="text-gray-700">{student.parentContact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Assignments Completed:</span>
                      <span className="text-gray-700">{student.assignmentsCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Average Score:</span>
                      <span className="text-gray-700">{student.averageScore}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedStudents.size === filteredStudents.length && filteredStudents.length > 0}
                    onChange={selectAllStudents}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedStudents.has(student.id)}
                      onChange={() => toggleStudentSelection(student.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceColor(student.performance)}`}>
                      {student.performance}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.attendance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
          <p className="text-gray-500 mb-4">
            {searchQuery ? "Try adjusting your search criteria" : "Get started by adding your first student"}
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Add Student
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentsSection;