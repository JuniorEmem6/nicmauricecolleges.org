// components/AssignmentsSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaClock, 
  FaCheck, 
  FaFileAlt, 
  FaUpload, 
  FaEdit,
  FaExclamationTriangle,
  FaCalendar,
  FaBook,
  FaTimes,
  FaDownload,
  FaEye,
  FaPlus,
  FaFilter,
  FaCalendarAlt,
  FaSortAmountDown,
  FaChevronDown
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AssignmentsSection = ({ searchQuery }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [submittingAssignment, setSubmittingAssignment] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const loadAssignments = () => {
      setIsLoading(true);
      setTimeout(() => {
        const assignmentData = [
          {
            id: 1,
            title: 'Calculus Problem Set #4',
            course: 'Advanced Calculus',
            dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
            type: 'problem-set',
            status: 'submitted',
            grade: 'A-',
            points: 95,
            maxPoints: 100,
            teacher: 'Prof. Michael Chen',
            submitted: true,
            submittedDate: new Date(Date.now() - 12 * 60 * 60 * 1000),
            description: 'Solve differential equations and apply integration techniques',
            attachments: 3,
            feedback: 'Excellent work on the integration problems!'
          },
          {
            id: 2,
            title: 'Machine Learning Project Proposal',
            course: 'Machine Learning',
            dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            type: 'project',
            status: 'in-progress',
            progress: 60,
            teacher: 'Dr. Sarah Johnson',
            submitted: false,
            description: 'Develop a comprehensive project proposal for your ML research',
            attachments: 2,
            estimatedTime: '8 hours'
          },
          {
            id: 3,
            title: 'Quantum Mechanics Quiz',
            course: 'Quantum Physics',
            dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
            type: 'quiz',
            status: 'not-started',
            teacher: 'Dr. Emily Watson',
            submitted: false,
            description: 'Multiple choice and problem-solving quiz on quantum principles',
            timeLimit: '45 minutes',
            questions: 20
          },
          {
            id: 4,
            title: 'Research Paper Draft',
            course: 'Advanced Calculus',
            dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            type: 'essay',
            status: 'graded',
            grade: 'B+',
            points: 88,
            maxPoints: 100,
            teacher: 'Prof. Michael Chen',
            submitted: true,
            submittedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
            description: '10-page research paper on advanced mathematical concepts',
            wordCount: 2500,
            feedback: 'Good research but needs more mathematical rigor in section 3'
          },
          {
            id: 5,
            title: 'Data Structures Programming Assignment',
            course: 'Computer Science',
            dueDate: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
            type: 'coding',
            status: 'not-started',
            teacher: 'Dr. James Wilson',
            submitted: false,
            description: 'Implement binary search tree with traversal algorithms',
            language: 'Python',
            testCases: 15
          }
        ];
        setAssignments(assignmentData);
        setIsLoading(false);
      }, 1500);
    };

    loadAssignments();
  }, []);

  useEffect(() => {
    let results = assignments;

    // Apply search filter
    if (searchQuery) {
      results = results.filter(assignment =>
        assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.teacher.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply active filter
    if (activeFilter !== 'all') {
      results = results.filter(assignment => {
        switch (activeFilter) {
          case 'pending':
            return !assignment.submitted;
          case 'submitted':
            return assignment.submitted && !assignment.grade;
          case 'graded':
            return assignment.grade;
          case 'urgent':
            return isUrgent(assignment.dueDate) && !assignment.submitted;
          case 'overdue':
            return isOverdue(assignment.dueDate) && !assignment.submitted;
          default:
            return true;
        }
      });
    }

    // Apply sorting
    results.sort((a, b) => {
      switch (sortBy) {
        case 'dueDate':
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'course':
          return a.course.localeCompare(b.course);
        case 'status':
          return getStatusPriority(a.status) - getStatusPriority(b.status);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredAssignments(results);
  }, [searchQuery, activeFilter, sortBy, assignments]);

  const isOverdue = (dueDate) => new Date(dueDate) < new Date();
  const isUrgent = (dueDate) => {
    const timeDiff = new Date(dueDate) - new Date();
    return timeDiff > 0 && timeDiff < 24 * 60 * 60 * 1000; // Due within 24 hours
  };

  const getStatusPriority = (status) => {
    const priorities = {
      'not-started': 1,
      'in-progress': 2,
      'submitted': 3,
      'graded': 4
    };
    return priorities[status] || 0;
  };

  const handleSubmitAssignment = (assignmentId) => {
    setSubmittingAssignment(assignmentId);
    // Simulate submission process
    setTimeout(() => {
      setAssignments(prev => prev.map(assignment =>
        assignment.id === assignmentId
          ? { ...assignment, submitted: true, status: 'submitted', submittedDate: new Date() }
          : assignment
      ));
      setSubmittingAssignment(null);
    }, 2000);
  };

  const getDaysLeft = (dueDate) => {
    const timeDiff = new Date(dueDate) - new Date();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return days;
  };

  const getUrgencyLevel = (dueDate) => {
    const days = getDaysLeft(dueDate);
    if (days < 0) return 'overdue';
    if (days === 0) return 'today';
    if (days <= 1) return 'tomorrow';
    if (days <= 3) return 'soon';
    return 'later';
  };

  const filters = [
    { id: 'all', label: 'All Assignments', count: assignments.length },
    { id: 'pending', label: 'Pending', count: assignments.filter(a => !a.submitted).length },
    { id: 'submitted', label: 'Submitted', count: assignments.filter(a => a.submitted && !a.grade).length },
    { id: 'graded', label: 'Graded', count: assignments.filter(a => a.grade).length },
    { id: 'urgent', label: 'Urgent', count: assignments.filter(a => isUrgent(a.dueDate) && !a.submitted).length },
    { id: 'overdue', label: 'Overdue', count: assignments.filter(a => isOverdue(a.dueDate) && !a.submitted).length }
  ];

  const sortOptions = [
    { id: 'dueDate', label: 'Due Date' },
    { id: 'course', label: 'Course' },
    { id: 'status', label: 'Status' },
    { id: 'title', label: 'Title' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
          <p className="text-gray-600">Track and submit your coursework</p>
        </div>
        <div className="flex space-x-3">
          <motion.button 
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="text-sm" />
            <span>Calendar View</span>
          </motion.button>
          <motion.button 
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus className="text-sm" />
            <span>New Assignment</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filters and Sorting */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-4">
        {/* Filter Tabs */}
        <div className="flex-1 flex space-x-1 bg-gray-100 rounded-2xl p-1 overflow-x-auto">
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative py-3 px-4 rounded-xl text-center transition-all font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{filter.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeFilter === filter.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-200 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <motion.button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSortAmountDown className="text-sm" />
            <span>Sort: {sortOptions.find(opt => opt.id === sortBy)?.label}</span>
            <motion.div
              animate={{ rotate: showSortMenu ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown className="text-xs" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showSortMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10 py-1"
              >
                {sortOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      sortBy === option.id
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {[1, 2, 3].map(item => (
              <motion.div
                key={item}
                className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assignments List */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key={`${activeFilter}-${sortBy}-${searchQuery}`}
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredAssignments.map((assignment, index) => (
              <AssignmentCard 
                key={assignment.id} 
                assignment={assignment} 
                index={index}
                onSubmitAssignment={handleSubmitAssignment}
                submittingAssignment={submittingAssignment}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      <AnimatePresence>
        {!isLoading && filteredAssignments.length === 0 && (
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
              <FaFileAlt className="text-4xl text-gray-300 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Assignments Found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || activeFilter !== 'all' 
                ? "Try adjusting your search or filter criteria" 
                : "You're all caught up! Enjoy your free time."}
            </p>
            {(searchQuery || activeFilter !== 'all') && (
              <motion.button
                onClick={() => {
                  setActiveFilter('all');
                  // Clear search query if needed
                }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return 'from-green-500 to-emerald-500';
      case 'in-progress': return 'from-blue-500 to-cyan-500';
      case 'not-started': return 'from-gray-500 to-gray-600';
      case 'graded': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'submitted': return 'bg-green-50 border-green-200';
      case 'in-progress': return 'bg-blue-50 border-blue-200';
      case 'not-started': return 'bg-gray-50 border-gray-200';
      case 'graded': return 'bg-purple-50 border-purple-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'problem-set': return FaEdit;
      case 'project': return FaFileAlt;
      case 'quiz': return FaBook;
      case 'essay': return FaFileAlt;
      case 'coding': return FaEdit;
      default: return FaFileAlt;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'problem-set': return 'text-blue-600 bg-blue-100';
      case 'project': return 'text-purple-600 bg-purple-100';
      case 'quiz': return 'text-green-600 bg-green-100';
      case 'essay': return 'text-orange-600 bg-orange-100';
      case 'coding': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

const AssignmentCard = ({ assignment, index, onSubmitAssignment, submittingAssignment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const TypeIcon = getTypeIcon(assignment.type);
  const overdue = isOverdue(assignment.dueDate) && !assignment.submitted;
  const urgent = isUrgent(assignment.dueDate) && !assignment.submitted;
  const daysLeft = getDaysLeft(assignment.dueDate);
  const urgencyLevel = getUrgencyLevel(assignment.dueDate);

  const getUrgencyColor = (level) => {
    switch (level) {
      case 'overdue': return 'from-red-500 to-pink-500';
      case 'today': return 'from-orange-500 to-red-500';
      case 'tomorrow': return 'from-yellow-500 to-orange-500';
      case 'soon': return 'from-blue-500 to-cyan-500';
      default: return 'from-green-500 to-emerald-500';
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    },
    hover: {
      y: -4,
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${assignment.progress || 0}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: index * 0.2 + 0.3
      }
    }
  };

  const gradeVariants = {
    initial: { width: 0 },
    animate: {
      width: `${(assignment.points / assignment.maxPoints) * 100}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: index * 0.2 + 0.3
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`rounded-2xl border-2 transition-all duration-200 cursor-pointer overflow-hidden ${
        getStatusBgColor(assignment.status)
      } ${isExpanded ? 'shadow-lg' : 'shadow-sm'}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4 flex-1">
            <motion.div 
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTypeColor(assignment.type)}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TypeIcon className="text-lg" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-1">
                <h3 className="font-semibold text-gray-900 truncate">
                  {assignment.title}
                </h3>
                <div className="flex space-x-2">
                  <motion.span 
                    className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(assignment.status)} text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {assignment.status.replace('-', ' ')}
                  </motion.span>
                  {assignment.grade && (
                    <motion.span 
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Grade: {assignment.grade}
                    </motion.span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600">{assignment.course} • {assignment.teacher}</p>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{assignment.description}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {(overdue || urgent) && (
              <motion.span 
                className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold flex items-center space-x-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-red-500 rounded-full"
                />
                <span>{overdue ? 'Overdue' : 'Urgent'}</span>
              </motion.span>
            )}
            
            <motion.div 
              className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getUrgencyColor(urgencyLevel)}`}
              whileHover={{ scale: 1.05 }}
            >
              {urgencyLevel === 'overdue' ? 'Overdue' : 
               urgencyLevel === 'today' ? 'Due Today' :
               urgencyLevel === 'tomorrow' ? 'Due Tomorrow' :
               `Due in ${daysLeft} days`}
            </motion.div>
          </div>
        </div>

        {/* Progress or Grade */}
        <AnimatePresence>
          {assignment.progress && !assignment.submitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{assignment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full relative"
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['0%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {assignment.grade && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Score</span>
                <span className="font-semibold">{assignment.points}/{assignment.maxPoints} points</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full relative"
                  variants={gradeVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['0%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={expandVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Assignment Details</h4>
                  <p>{assignment.description}</p>
                  {assignment.estimatedTime && (
                    <p className="mt-2"><strong>Estimated Time:</strong> {assignment.estimatedTime}</p>
                  )}
                  {assignment.timeLimit && (
                    <p className="mt-1"><strong>Time Limit:</strong> {assignment.timeLimit}</p>
                  )}
                  {assignment.questions && (
                    <p className="mt-1"><strong>Questions:</strong> {assignment.questions}</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Submission Info</h4>
                  <p><strong>Due:</strong> {assignment.dueDate.toLocaleDateString()} at {assignment.dueDate.toLocaleTimeString()}</p>
                  {assignment.submitted && (
                    <p className="mt-1"><strong>Submitted:</strong> {assignment.submittedDate.toLocaleDateString()}</p>
                  )}
                  {assignment.feedback && (
                    <div className="mt-2">
                      <strong>Feedback:</strong>
                      <p className="text-gray-700 mt-1 bg-white p-2 rounded-lg border">{assignment.feedback}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <FaCalendar className="text-xs" />
              <span>Due {assignment.dueDate.toLocaleDateString()}</span>
            </div>
            {!assignment.submitted && daysLeft > 0 && (
              <div className="flex items-center space-x-1 text-orange-600">
                <FaClock className="text-xs" />
                <span>{daysLeft} days left</span>
              </div>
            )}
          </div>

          <div className="flex space-x-2">
            {!assignment.submitted ? (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSubmitAssignment(assignment.id);
                  }}
                  disabled={submittingAssignment === assignment.id}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2 text-sm relative overflow-hidden"
                  whileHover={{ scale: submittingAssignment ? 1 : 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {submittingAssignment === assignment.id ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FaUpload className="text-xs" />
                      <span>Submit</span>
                    </>
                  )}
                </motion.button>
                <motion.button
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEdit className="text-xs" />
                  <span>Start</span>
                </motion.button>
              </>
            ) : (
              <motion.button
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye className="text-xs" />
                <span>View Feedback</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper functions
const isOverdue = (dueDate) => new Date(dueDate) < new Date();
const isUrgent = (dueDate) => {
  const timeDiff = new Date(dueDate) - new Date();
  return timeDiff > 0 && timeDiff < 24 * 60 * 60 * 1000;
};
const getDaysLeft = (dueDate) => {
  const timeDiff = new Date(dueDate) - new Date();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};
const getUrgencyLevel = (dueDate) => {
  const days = getDaysLeft(dueDate);
  if (days < 0) return 'overdue';
  if (days === 0) return 'today';
  if (days <= 1) return 'tomorrow';
  if (days <= 3) return 'soon';
  return 'later';
};

export default AssignmentsSection;