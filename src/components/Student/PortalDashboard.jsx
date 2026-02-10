import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell, FaUpload, FaArrowRight, FaCog, FaBook, FaChartLine,
  FaClipboardList, FaBookOpen, FaFileAlt, FaMoneyBillWave,
  FaCalendarCheck, FaChartBar, FaComments, FaTasks, FaChevronRight,
  FaClock, FaCalendarDay, FaUserFriends, FaDownload, FaVideo,
  FaFilePdf, FaBullhorn, FaStethoscope, FaGraduationCap,
  FaLaptopMedical, FaTimes, FaFileMedical, FaPills, FaHospital,
  FaUserMd, FaNotesMedical, FaPrescriptionBottle, FaSyringe,
  FaHeartbeat, FaDollarSign, FaCreditCard, FaReceipt, FaWallet,
  FaSearch, FaFilter, FaSort, FaPrint, FaShare, FaStar,
  FaBookmark, FaHistory, FaTrash, FaCheckCircle, FaTimesCircle,
  FaExclamationTriangle, FaChevronDown, FaPlus, FaEdit, FaEye,
  FaCalendarAlt, FaUser, FaHome, FaBars
} from "react-icons/fa";

const PortalDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeQuickAction, setActiveQuickAction] = useState(null);
  const [showActionPanel, setShowActionPanel] = useState(false);
  const [pulse, setPulse] = useState(false);
  
  // Quick Actions Data with Detailed Content
  const quickActionsData = {
    "course-materials": {
      title: "Course Materials",
      icon: <FaBookOpen />,
      color: "from-blue-500 to-blue-600",
      description: "Access lectures, notes, and learning resources",
      content: {
        recent: [
          { name: "Cardiovascular System Lecture", type: "PDF", size: "4.2 MB", date: "Nov 10, 2024", downloaded: true },
          { name: "Respiratory System Video", type: "Video", size: "125 MB", date: "Nov 8, 2024", duration: "45:22" },
          { name: "Muscular System Slides", type: "PPT", size: "8.7 MB", date: "Nov 5, 2024", downloaded: true }
        ],
        courses: [
          { code: "NURS101", name: "Anatomy & Physiology", materials: 24, updated: "Today" },
          { code: "NURS201", name: "Pharmacology", materials: 18, updated: "2 days ago" },
          { code: "NURS301", name: "Clinical Nursing", materials: 32, updated: "Yesterday" }
        ],
        stats: { total: 74, downloaded: 58, size: "6.2 GB" }
      }
    },
    "class-schedule": {
      title: "Class Schedule",
      icon: <FaCalendarCheck />,
      color: "from-purple-500 to-purple-600",
      description: "View timetable and upcoming classes",
      content: {
        today: [
          { time: "9:00 AM", course: "Anatomy & Physiology", type: "Lecture", room: "LH-301" },
          { time: "11:00 AM", course: "Pharmacology", type: "Lab", room: "LAB-205" },
          { time: "2:00 PM", course: "Nursing Fundamentals", type: "Lecture", room: "LH-104" }
        ],
        upcoming: [
          { day: "Tomorrow", event: "Midterm Exam", course: "Pathophysiology", time: "9:00 AM" },
          { day: "Nov 18", event: "Clinical Rotation", course: "Pediatric Nursing", time: "7:00 AM" },
          { day: "Nov 20", event: "Skills Lab", course: "Fundamentals", time: "1:00 PM" }
        ]
      }
    },
    "grades-progress": {
      title: "Grades & Progress",
      icon: <FaChartBar />,
      color: "from-emerald-500 to-emerald-600",
      description: "Track your academic performance",
      content: {
        overall: { gpa: "3.78", average: "92.4%", trend: "up" },
        courses: [
          { name: "Anatomy & Physiology", grade: "A", score: 92.4, progress: 85 },
          { name: "Pharmacology", grade: "B+", score: 85.7, progress: 72 },
          { name: "Clinical Nursing", grade: "A", score: 94.2, progress: 90 }
        ],
        recent: [
          { assignment: "Cardiovascular Quiz", score: "95/100", date: "Nov 10" },
          { assignment: "Drug Cards", score: "88/100", date: "Nov 8" },
          { assignment: "Clinical Skills", score: "96/100", date: "Nov 5" }
        ]
      }
    },
    "assignments": {
      title: "Assignments",
      icon: <FaTasks />,
      color: "from-amber-500 to-amber-600",
      description: "Submit and track assignments",
      content: {
        pending: [
          { title: "Cardiovascular Case Study", course: "NURS101", due: "Tomorrow", points: 100 },
          { title: "Pharmacology Drug Cards", course: "NURS201", due: "Nov 12", points: 50 },
          { title: "Research Literature Review", course: "NURS401", due: "Nov 20", points: 200 }
        ],
        submitted: [
          { title: "Clinical Skills Video", course: "NURS301", submitted: "Nov 9", grade: "142/150" },
          { title: "Patient Assessment", course: "NURS301", submitted: "Nov 7", grade: "95/100" }
        ]
      }
    },
    "tuition-fees": {
      title: "Tuition & Fees",
      icon: <FaMoneyBillWave />,
      color: "from-rose-500 to-rose-600",
      description: "View balance and make payments",
      content: {
        balance: "$12,450.00",
        dueDate: "Dec 15, 2024",
        breakdown: [
          { item: "Tuition", amount: "$10,000.00" },
          { item: "Lab Fees", amount: "$1,200.00" },
          { item: "Technology Fee", amount: "$250.00" },
          { item: "Health Services", amount: "$1,000.00" }
        ],
        paymentHistory: [
          { date: "Sep 1, 2024", amount: "$4,150.00", method: "Bank Transfer" },
          { date: "Aug 15, 2024", amount: "$4,150.00", method: "Credit Card" }
        ]
      }
    },
    "student-community": {
      title: "Student Community",
      icon: <FaUserFriends />,
      color: "from-indigo-500 to-indigo-600",
      description: "Connect with classmates",
      content: {
        activeGroups: [
          { name: "Anatomy Study Group", members: 24, lastActive: "Today" },
          { name: "Clinical Practice", members: 18, lastActive: "2 hours ago" },
          { name: "Research Collaboration", members: 12, lastActive: "Yesterday" }
        ],
        recentDiscussions: [
          { topic: "Cardiovascular Case Studies", replies: 24, lastPost: "10 min ago" },
          { topic: "Pharmacology Tips", replies: 18, lastPost: "1 hour ago" },
          { topic: "Clinical Rotation Tips", replies: 42, lastPost: "2 hours ago" }
        ],
        upcomingEvents: [
          { event: "Study Session", date: "Nov 15", time: "6:00 PM", location: "Library" },
          { event: "Guest Lecture", date: "Nov 18", time: "3:00 PM", location: "Auditorium" }
        ]
      }
    }
  };

  const handleQuickActionClick = (actionId) => {
    setActiveQuickAction(actionId);
    setShowActionPanel(true);
  };

  const dashboardFeatures = [
    { 
      id: "course-materials",
      icon: <FaBookOpen />, 
      title: "Course Materials", 
      desc: "Access lectures, notes & resources", 
      color: "from-blue-500 to-blue-600" 
    },
    { 
      id: "class-schedule",
      icon: <FaCalendarCheck />, 
      title: "Class Schedule", 
      desc: "View your timetable & events", 
      color: "from-purple-500 to-purple-600" 
    },
    { 
      id: "grades-progress",
      icon: <FaChartBar />, 
      title: "Grades & Progress", 
      desc: "Track your academic performance", 
      color: "from-emerald-500 to-emerald-600" 
    },
    { 
      id: "assignments",
      icon: <FaTasks />, 
      title: "Assignments", 
      desc: "Submit & track assignments", 
      color: "from-amber-500 to-amber-600" 
    },
    { 
      id: "tuition-fees",
      icon: <FaMoneyBillWave />, 
      title: "Tuition & Fees", 
      desc: "View balance & make payments", 
      color: "from-rose-500 to-rose-600" 
    },
    { 
      id: "student-community",
      icon: <FaUserFriends />, 
      title: "Student Community", 
      desc: "Connect with classmates", 
      color: "from-indigo-500 to-indigo-600" 
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const panelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 }
  };

  // Pulsing notification effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const currentAction = activeQuickAction ? quickActionsData[activeQuickAction] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
      <div className="container mx-auto px-4 py-6">
        {/* Top Navigation */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-20"
                />
                <FaGraduationCap className="text-4xl text-blue-600 relative z-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
                <p className="text-gray-600">Welcome back to your nursing education portal</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {pulse && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
                />
              )}
              <FaBell className="text-gray-600 text-xl" />
            </button>
            
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FaCog className="text-gray-600 text-xl" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div>
                <p className="font-medium text-gray-900">John Smith</p>
                <p className="text-sm text-gray-500">BSN Student</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { bg: "from-blue-500 to-blue-600", icon: <FaChartLine />, label: "Average Grade", value: "92.4%", trend: "↑ 2.1%" },
                { bg: "from-purple-500 to-purple-600", icon: <FaBook />, label: "Active Courses", value: "6", trend: "4 core + 2 electives" },
                { bg: "from-emerald-500 to-emerald-600", icon: <FaClipboardList />, label: "Pending Tasks", value: "3", trend: "Due within 7 days" }
              ].map((stat, index) => (
                <div key={index} className={`bg-gradient-to-br ${stat.bg} rounded-2xl p-6 text-white shadow-lg`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/80 text-sm">{stat.label}</p>
                      <p className="text-4xl font-bold mt-2">{stat.value}</p>
                      <p className="text-white/70 text-sm mt-1">{stat.trend}</p>
                    </div>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
                <span className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                  View All <FaChevronRight className="ml-1" />
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dashboardFeatures.map((feature, index) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => handleQuickActionClick(feature.id)}
                    className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:shadow-xl transition-all group text-left"
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white mr-3`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-blue-500 text-sm">
                      <span>Quick View</span>
                      <FaArrowRight className="ml-2 text-xs" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Courses Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Course Progress</h2>
              <div className="space-y-6">
                {[
                  { code: "NURS101", name: "Anatomy & Physiology", progress: 85, instructor: "Dr. Sarah Chen", nextTask: "Lab Report Due Nov 12" },
                  { code: "NURS201", name: "Pharmacology", progress: 72, instructor: "Prof. James Wilson", nextTask: "Quiz on Nov 14" },
                  { code: "NURS301", name: "Clinical Nursing", progress: 90, instructor: "Dr. Maria Rodriguez", nextTask: "Clinical Rotation Nov 18" },
                ].map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <FaBookOpen />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{course.code}</div>
                        <div className="text-gray-600 text-sm">{course.name}</div>
                        <div className="text-gray-500 text-xs mt-1">Instructor: {course.instructor}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{course.progress}%</div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-gray-500 text-xs mt-2">{course.nextTask}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <FaCalendarDay className="mr-2 text-red-500" />
                  Upcoming Deadlines
                </h2>
                <span className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Calendar
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Midterm Exam", course: "Pathophysiology", date: "Nov 15, 2024", time: "9:00 AM", type: "exam" },
                  { title: "Clinical Rotation", course: "Pediatric Nursing", date: "Nov 18-22, 2024", time: "7:00 AM", type: "clinical" },
                  { title: "Research Paper Due", course: "Nursing Research", date: "Nov 25, 2024", time: "11:59 PM", type: "assignment" },
                ].map((event, index) => (
                  <div key={index} className="p-4 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-gray-600 text-sm">{event.course}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'exam' ? 'bg-red-100 text-red-800' :
                        event.type === 'clinical' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <FaClock className="mr-2" />
                      {event.date} • {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { time: "10 min ago", action: "Submitted Anatomy Lab Report", course: "Anatomy & Physiology", icon: <FaFileAlt /> },
                  { time: "2 hours ago", action: "Joined Clinical Discussion", course: "Clinical Nursing", icon: <FaComments /> },
                  { time: "Yesterday", action: "Completed Pharmacology Quiz", course: "Pharmacology", icon: <FaClipboardList /> },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-gray-600 text-sm">{activity.course}</p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Resources</h2>
              <div className="space-y-3">
                {[
                  { icon: <FaFilePdf />, text: "Download Syllabus", color: "text-red-500" },
                  { icon: <FaVideo />, text: "Recorded Lectures", color: "text-purple-500" },
                  { icon: <FaStethoscope />, text: "Clinical Guidelines", color: "text-green-500" },
                ].map((resource, index) => (
                  <button key={index} className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="flex items-center">
                      <span className={`${resource.color} mr-3`}>{resource.icon}</span>
                      <span className="font-medium text-gray-900">{resource.text}</span>
                    </div>
                    <FaDownload className="text-gray-400 group-hover:text-blue-600" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold mb-3">Need Academic Support?</h2>
              <p className="text-blue-100">
                Our nursing faculty and support staff are here to help you succeed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Schedule Appointment
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                Join Study Group
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Detail Panel */}
      <AnimatePresence>
        {showActionPanel && currentAction && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40"
              onClick={() => setShowActionPanel(false)}
            />
            
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowActionPanel(false)}
            />
            
            {/* Panel */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 w-full lg:w-1/3 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="h-full flex flex-col">
                {/* Panel Header */}
                <div className={`p-6 bg-gradient-to-r ${currentAction.color} text-white`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <div className="p-3 bg-white/20 rounded-xl mr-4">
                          {currentAction.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{currentAction.title}</h2>
                          <p className="text-white/90 mt-1">{currentAction.description}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowActionPanel(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Panel Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {activeQuickAction === "course-materials" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Materials</h3>
                        <div className="space-y-3">
                          {currentAction.content.recent.map((material, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center">
                                <div className="p-2 bg-white rounded-lg mr-3">
                                  {material.type === "PDF" ? <FaFilePdf className="text-red-500" /> :
                                   material.type === "Video" ? <FaVideo className="text-purple-500" /> :
                                   <FaFilePdf className="text-blue-500" />}
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">{material.name}</div>
                                  <div className="text-sm text-gray-500">{material.type} • {material.size}</div>
                                </div>
                              </div>
                              {material.downloaded && (
                                <FaCheckCircle className="text-green-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Courses</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {currentAction.content.courses.map((course, index) => (
                            <div key={index} className="p-3 bg-blue-50 rounded-lg">
                              <div className="font-bold text-blue-700">{course.code}</div>
                              <div className="text-sm text-gray-600">{course.name}</div>
                              <div className="text-xs text-gray-500 mt-1">{course.materials} materials</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{currentAction.content.stats.total}</div>
                          <div className="text-sm text-gray-600">Total</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{currentAction.content.stats.downloaded}</div>
                          <div className="text-sm text-gray-600">Downloaded</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{currentAction.content.stats.size}</div>
                          <div className="text-sm text-gray-600">Total Size</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeQuickAction === "class-schedule" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Today's Classes</h3>
                        <div className="space-y-3">
                          {currentAction.content.today.map((classItem, index) => (
                            <div key={index} className="p-3 bg-purple-50 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-gray-900">{classItem.time}</div>
                                  <div className="text-sm text-gray-600">{classItem.course}</div>
                                </div>
                                <span className="px-2 py-1 bg-white text-purple-600 rounded text-sm font-medium">
                                  {classItem.type}
                                </span>
                              </div>
                              <div className="text-sm text-gray-500 mt-2">Room: {classItem.room}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Upcoming Events</h3>
                        <div className="space-y-3">
                          {currentAction.content.upcoming.map((event, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{event.event}</div>
                                <div className="text-sm text-gray-600">{event.course}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-gray-900">{event.day}</div>
                                <div className="text-xs text-gray-500">{event.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeQuickAction === "grades-progress" && (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold">{currentAction.content.overall.gpa} GPA</div>
                            <div className="text-emerald-100">Overall Average: {currentAction.content.overall.average}</div>
                          </div>
                          <FaChartLine className="text-3xl opacity-80" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Course Grades</h3>
                        <div className="space-y-3">
                          {currentAction.content.courses.map((course, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{course.name}</div>
                                <div className="text-sm text-gray-500">Score: {course.score}%</div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-emerald-600">{course.grade}</div>
                                <div className="text-xs text-gray-500">Progress: {course.progress}%</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Scores</h3>
                        <div className="space-y-2">
                          {currentAction.content.recent.map((assignment, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <span className="text-gray-700">{assignment.assignment}</span>
                              <span className="font-medium text-emerald-600">{assignment.score}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeQuickAction === "assignments" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="mr-2">Pending Assignments</span>
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                            {currentAction.content.pending.length} due
                          </span>
                        </h3>
                        <div className="space-y-3">
                          {currentAction.content.pending.map((assignment, index) => (
                            <div key={index} className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-bold text-gray-900">{assignment.title}</div>
                                  <div className="text-sm text-gray-600">{assignment.course}</div>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm font-medium">
                                  {assignment.points} pts
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Due: {assignment.due}</span>
                                <button className="px-3 py-1 bg-amber-600 text-white rounded hover:bg-amber-700 text-sm">
                                  Start
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Submitted</h3>
                        <div className="space-y-3">
                          {currentAction.content.submitted.map((assignment, index) => (
                            <div key={index} className="p-3 bg-green-50 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-gray-900">{assignment.title}</div>
                                  <div className="text-sm text-gray-600">{assignment.course}</div>
                                </div>
                                <span className="font-bold text-green-600">{assignment.grade}</span>
                              </div>
                              <div className="text-sm text-gray-500 mt-2">Submitted: {assignment.submitted}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeQuickAction === "tuition-fees" && (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl p-4 text-white">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{currentAction.content.balance}</div>
                          <div className="text-rose-100 mt-1">Current Balance</div>
                          <div className="text-sm mt-2">Due: {currentAction.content.dueDate}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Fee Breakdown</h3>
                        <div className="space-y-2">
                          {currentAction.content.breakdown.map((fee, index) => (
                            <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                              <span className="text-gray-700">{fee.item}</span>
                              <span className="font-medium text-gray-900">{fee.amount}</span>
                            </div>
                          ))}
                          <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Total</span>
                            <span>{currentAction.content.balance}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Payments</h3>
                        <div className="space-y-2">
                          {currentAction.content.paymentHistory.map((payment, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <div>
                                <div className="font-medium text-gray-900">{payment.date}</div>
                                <div className="text-sm text-gray-500">{payment.method}</div>
                              </div>
                              <span className="font-bold text-green-600">{payment.amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeQuickAction === "student-community" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Active Groups</h3>
                        <div className="space-y-3">
                          {currentAction.content.activeGroups.map((group, index) => (
                            <div key={index} className="p-3 bg-indigo-50 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-gray-900">{group.name}</div>
                                  <div className="text-sm text-gray-600">{group.members} members</div>
                                </div>
                                <span className="px-2 py-1 bg-white text-indigo-600 rounded text-xs">
                                  Active
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 mt-2">Last active: {group.lastActive}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Discussions</h3>
                        <div className="space-y-2">
                          {currentAction.content.recentDiscussions.map((discussion, index) => (
                            <div key={index} className="p-2 hover:bg-gray-50 rounded">
                              <div className="font-medium text-gray-900">{discussion.topic}</div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <span>{discussion.replies} replies</span>
                                <span className="mx-2">•</span>
                                <span>Last post: {discussion.lastPost}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Upcoming Events</h3>
                        <div className="space-y-2">
                          {currentAction.content.upcomingEvents.map((event, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <div>
                                <div className="font-medium text-gray-900">{event.event}</div>
                                <div className="text-sm text-gray-500">{event.location}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">{event.date}</div>
                                <div className="text-xs text-gray-500">{event.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Panel Footer */}
                <div className="p-6 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                      Open Full View
                    </button>
                    <button 
                      onClick={() => setShowActionPanel(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortalDashboard;