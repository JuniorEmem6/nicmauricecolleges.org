// components/ClassesSection.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaUsers,
  FaCalendarAlt,
  FaBook,
  FaTasks,
  FaChartLine,
  FaVideo,
  FaComments,
  FaPlus,
  FaClock,
  FaGraduationCap,
  FaSearch,
  FaCertificate,
  FaSpinner,
  FaFilter,
  FaSort,
  FaExclamationCircle,
  FaBookOpen,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ClassesSection = ({ searchQuery, stats, token }) => {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [liveClass, setLiveClass] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("progress");
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [studentForm, setStudentForm] = useState({
    name: "",
    registrationNumber: "",
    courseCode: "",
    courseId: "",
  });
  const sectionRef = useRef(null);

  // Load student's enrolled classes
  const loadStudentClasses = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/class/student", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || "Failed to fetch classes");
      }

      const data = await response.json();
      
      // Transform API data
      const transformedClasses = data.map(transformClassData);
      
      setClasses(transformedClasses);
      setFilteredClasses(transformedClasses);
      
      // Find live class
      const live = transformedClasses.find((cls) => cls.isLive) || null;
      setLiveClass(live);
      
    } catch (err) {
      console.error("Error fetching classes:", err.message);
      setError(err.message);
      setClasses([]);
      setFilteredClasses([]);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  // Transform class data from API
  const transformClassData = (apiData) => {
    const colors = ["blue", "purple", "green", "orange", "indigo", "pink", "teal"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: apiData.id || apiData._id,
      title: apiData.title || apiData.course_name || "Untitled Class",
      teacher: apiData.teacher || apiData.instructor || apiData.teacher_name || "Instructor",
      schedule: apiData.schedule || apiData.class_time || "Flexible",
      progress: apiData.progress || apiData.completion_rate || 0,
      nextSession: apiData.next_session ? new Date(apiData.next_session) : 
                   apiData.start_date ? new Date(apiData.start_date) : 
                   new Date(Date.now() + 24 * 60 * 60 * 1000),
      materials: apiData.materials || apiData.resources_count || 0,
      assignments: apiData.assignments || apiData.assignment_count || 0,
      liveSessions: apiData.live_sessions || apiData.sessions_count || 0,
      grade: apiData.grade || apiData.current_grade || null,
      color: apiData.color || randomColor,
      students: apiData.students || apiData.enrolled_students || 0,
      isLive: apiData.is_live || apiData.live_now || false,
      subject: apiData.subject || apiData.category || "General",
      description: apiData.description || "No description available",
      joinLink: apiData.join_link || `/class/${apiData.id || apiData._id}`,
      enrollmentDate: apiData.enrollment_date ? new Date(apiData.enrollment_date) : new Date(),
      completionDate: apiData.completion_date ? new Date(apiData.completion_date) : null,
      certificateEligible: apiData.certificate_eligible || false,
      courseCode: apiData.course_code || apiData.code || "",
      courseId: apiData.course_id || apiData.id || apiData._id,
      duration: apiData.duration || "12 weeks",
      level: apiData.level || "Beginner",
      credits: apiData.credits || 3,
      department: apiData.department || "",
      semester: apiData.semester || "",
      lastAccessed: apiData.last_accessed ? new Date(apiData.last_accessed) : null,
    };
  };

  // Handle class registration
  const handleStudentRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/class/register/${studentForm.courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            registration_number: studentForm.registrationNumber,
            course_id: studentForm.courseId,
            course_code: studentForm.courseCode,
            student_name: studentForm.name,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to register");

      alert("Registered successfully!");
      setShowRegisterModal(false);
      setStudentForm({
        name: "",
        registrationNumber: "",
        courseCode: "",
        courseId: "",
      });
      
      // Refresh classes after registration
      loadStudentClasses();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Handle joining a class
  const handleJoinClass = (classItem) => {
    console.log(`Joining class: ${classItem.title}`);
    
    // Simulate class join - in a real app, this would navigate to the class
    if (classItem.isLive) {
      alert(`Joining live session: ${classItem.title}`);
      // window.location.href = classItem.joinLink;
    } else {
      alert(`Opening class: ${classItem.title}`);
      // window.location.href = classItem.joinLink;
    }
  };

  // Handle refreshing data
  const handleRefresh = () => {
    setRefreshing(true);
    loadStudentClasses();
  };

  // Filter and sort classes
  useEffect(() => {
    let filtered = [...classes];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.teacher.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.courseCode.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    switch (activeFilter) {
      case "in-progress":
        filtered = filtered.filter(cls => cls.progress > 0 && cls.progress < 100);
        break;
      case "completed":
        filtered = filtered.filter(cls => cls.progress === 100);
        break;
      case "live":
        filtered = filtered.filter(cls => cls.isLive);
        break;
      case "upcoming":
        filtered = filtered.filter(cls => {
          const now = new Date();
          const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
          return cls.nextSession > now && cls.nextSession < nextWeek;
        });
        break;
      case "all":
      default:
        // Show all classes
        break;
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "progress":
          return b.progress - a.progress;
        case "recent":
          return new Date(b.enrollmentDate) - new Date(a.enrollmentDate);
        case "title":
          return a.title.localeCompare(b.title);
        case "next-session":
          return new Date(a.nextSession) - new Date(b.nextSession);
        default:
          return 0;
      }
    });

    setFilteredClasses(filtered);
  }, [searchQuery, activeFilter, sortBy, classes]);

  // Initial data load
  useEffect(() => {
    if (token) {
      loadStudentClasses();
    }
  }, [token]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const livePulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Filters and sorting options
  const filters = [
    { id: "all", label: "All Classes", count: classes.length },
    { id: "in-progress", label: "In Progress", count: classes.filter(c => c.progress > 0 && c.progress < 100).length },
    { id: "completed", label: "Completed", count: classes.filter(c => c.progress === 100).length },
    { id: "live", label: "Live Now", count: classes.filter(c => c.isLive).length },
    { id: "upcoming", label: "Upcoming", count: classes.filter(c => {
      const now = new Date();
      const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      return c.nextSession > now && c.nextSession < nextWeek;
    }).length },
  ];

  const sortOptions = [
    { id: "progress", label: "Progress" },
    { id: "recent", label: "Recently Added" },
    { id: "title", label: "Title" },
    { id: "next-session", label: "Next Session" },
  ];

  // Loading skeletons
  const renderSkeletons = () => {
    return [1, 2, 3].map((item) => (
      <motion.div
        key={item}
        className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: item * 0.1 }}
      >
        <div className="animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </motion.div>
    ));
  };

  return (
    <motion.div
      ref={sectionRef}
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Classes</h2>
          <p className="text-gray-600">
            Manage your enrolled courses and track your progress
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <motion.button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <FaSpinner className={refreshing ? "animate-spin" : ""} />
            <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowRegisterModal(true)}
          >
            <FaPlus className="text-sm" />
            <span>Join New Class</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Error State */}
      {error && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-xl p-4"
        >
          <div className="flex items-center space-x-3">
            <FaExclamationCircle className="text-red-500 text-xl" />
            <div>
              <h3 className="font-medium text-red-800">Failed to load classes</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Registration Modal */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={() => setShowRegisterModal(false)}
            />

            <div className="relative w-full max-w-md transform transition-all duration-300 ease-out">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Register for Class
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Fill in your details to join a new class
                      </p>
                    </div>
                    <button
                      onClick={() => setShowRegisterModal(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                      aria-label="Close"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleStudentRegister} className="px-6 py-4">
                  <div className="space-y-5">
                    {/* Student Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentForm.name}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="John Doe"
                        autoFocus
                      />
                    </div>

                    {/* Registration Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Registration Number
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentForm.registrationNumber}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            registrationNumber: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="REG123456"
                      />
                    </div>

                    {/* Course Code */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Code
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentForm.courseCode}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            courseCode: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="CSC101"
                      />
                    </div>

                    {/* Course ID */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course ID
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentForm.courseId}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            courseId: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="001"
                      />
                    </div>
                  </div>

                  <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 mt-6 -mx-6 -mb-4">
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowRegisterModal(false)}
                        className="px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Learning Statistics */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <StatCard
          icon={FaBookOpen}
          label="Total Classes"
          value={classes.length}
          color="blue"
          description="Currently enrolled"
          progress={null}
        />
        <StatCard
          icon={FaChartLine}
          label="In Progress"
          value={classes.filter(c => c.progress > 0 && c.progress < 100).length}
          color="purple"
          description="Active learning"
          progress={classes.length > 0 ? 
            (classes.filter(c => c.progress > 0 && c.progress < 100).length / classes.length) * 100 : 0
          }
        />
        <StatCard
          icon={FaCheckCircle}
          label="Completed"
          value={classes.filter(c => c.progress === 100).length}
          color="green"
          description="Finished courses"
          progress={classes.length > 0 ? 
            (classes.filter(c => c.progress === 100).length / classes.length) * 100 : 0
          }
        />
        <StatCard
          icon={FaCertificate}
          label="Certificates"
          value={classes.filter(c => c.certificateEligible && c.progress === 100).length}
          color="orange"
          description="Earned credentials"
          progress={classes.filter(c => c.certificateEligible).length > 0 ? 
            (classes.filter(c => c.certificateEligible && c.progress === 100).length / 
            classes.filter(c => c.certificateEligible).length) * 100 : 0
          }
        />
      </motion.div>

      {/* Live Class Banner */}
      <AnimatePresence>
        {liveClass && (
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                  variants={livePulseVariants}
                  animate="pulse"
                >
                  <FaVideo className="text-xl" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Live Now: {liveClass.title}
                  </h3>
                  <p className="text-orange-100">
                    {liveClass.teacher} • {liveClass.students} students joined
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <motion.button
                  className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex items-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleJoinClass(liveClass)}
                >
                  <FaPlay className="text-sm" />
                  <span>Join Live</span>
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-orange-500/20 text-white border border-orange-300/30 rounded-xl font-semibold hover:bg-orange-500/30 transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCalendarAlt className="text-sm" />
                  <span>Schedule</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter and Sort Controls */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row gap-4"
      >
        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative py-2 px-4 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter className="text-xs" />
              <span>{filter.label}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <FaSort className="text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                Sort by: {option.label}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {renderSkeletons()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Classes Grid */}
      <AnimatePresence mode="wait">
        {!isLoading && filteredClasses.length > 0 && (
          <motion.div
            key={activeFilter + sortBy + searchQuery}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredClasses.map((classItem, index) => (
              <ClassCard
                key={classItem.id}
                session={classItem}
                index={index}
                onJoinClass={handleJoinClass}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      <AnimatePresence>
        {!isLoading && filteredClasses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200/60"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaGraduationCap className="text-4xl text-gray-300 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {activeFilter === "all"
                ? "No Classes Enrolled"
                : activeFilter === "in-progress"
                ? "No Classes in Progress"
                : activeFilter === "completed"
                ? "No Completed Classes"
                : activeFilter === "live"
                ? "No Live Classes"
                : "No Upcoming Classes"}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeFilter === "all"
                ? "You haven't enrolled in any classes yet. Join a class to get started!"
                : `No classes match the "${activeFilter}" filter. Try another filter or browse all classes.`}
            </p>
            <motion.button
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowRegisterModal(true)}
            >
              <FaPlus className="text-sm" />
              <span>Join a Class</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Enhanced StatCard Component
const StatCard = ({ icon: Icon, label, value, color, description, progress }) => {
  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-4 group cursor-pointer"
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="flex items-start space-x-3">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${colorClasses[color]} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
        >
          <Icon className="text-lg" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm font-medium text-gray-900">{label}</div>
          <div className="text-xs text-gray-500">{description}</div>
          
          {progress !== null && (
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Completion Rate</span>
                <span className="font-semibold">{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full bg-gradient-to-r ${colorClasses[color]}`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced ClassCard Component
const ClassCard = ({ session, index }) => {
  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "Schedule TBD";
    
    try {
      const date = new Date(dateString);
      
      // Format: "Mon, Jan 15, 10:00 AM"
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      return dateString;
    }
  };

  const cardVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className="flex items-center space-x-4 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100 cursor-pointer border border-transparent hover:border-gray-200 transition-colors group"
    >
      <motion.div
        variants={iconVariants}
        className={`w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg`}
      >
        <FaCalendarAlt className="text-lg" />
      </motion.div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {session.course_code}
        </h3>
        <p className="text-sm text-gray-600">
          {session.teacher_full_name} • {session.department}
        </p>
      </div>
      <div className="text-right min-w-[140px]">
        <div className="font-semibold text-gray-900 text-sm">
          {formatDate(session.schedule)}
        </div>
        {session.duration && (
          <div className="text-xs text-gray-500 mt-1">
            {session.duration} minutes
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ClassesSection;