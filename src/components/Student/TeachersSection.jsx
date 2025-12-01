// components/TeachersSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaUserPlus, 
  FaCheck, 
  FaStar, 
  FaBook, 
  FaUsers,
  FaGraduationCap,
  FaFilter,
  FaVideo,
  FaClock,
  FaCalendar,
  FaComment,
  FaEnvelope,
  FaChartLine,
  FaAward,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaShare,
  FaBookmark,
  FaChevronDown,
  FaSearch,
  FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TeachersSection = ({ searchQuery }) => {
  const [followedTeachers, setFollowedTeachers] = useState(new Set(['teacher-1', 'teacher-3']));
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadTeachers = () => {
      setIsLoading(true);
      setTimeout(() => {
        const teachersData = [
          {
            id: 'teacher-1',
            name: 'Prof. Michael Chen',
            username: '@prof_mchen',
            subjects: ['Advanced Calculus', 'Linear Algebra', 'Differential Equations'],
            rating: 4.9,
            students: 1247,
            courses: 15,
            avatar: '👨‍🏫',
            department: 'Mathematics',
            isLive: true,
            description: 'Specialized in advanced mathematics and computational methods with 15+ years of teaching experience',
            expertise: ['Numerical Analysis', 'Mathematical Modeling', 'Computational Mathematics'],
            education: 'PhD in Mathematics, MIT',
            experience: '15 years',
            upcomingSessions: 3,
            responseTime: '2 hours',
            languages: ['English', 'Mandarin'],
            socialLinks: {
              website: 'https://michaelchen.math',
              linkedin: 'michaelchen-math',
              twitter: 'prof_mchen'
            },
            stats: {
              totalStudents: 1247,
              courseCompletion: 92,
              studentSatisfaction: 98,
              responseRate: 95
            },
            availability: {
              nextAvailable: new Date(Date.now() + 2 * 60 * 60 * 1000),
              officeHours: 'Mon, Wed 2-4 PM',
              mentorshipSlots: 3
            },
            featured: true,
            verified: true
          },
          {
            id: 'teacher-2',
            name: 'Dr. Sarah Johnson',
            username: '@dr_sjohnson',
            subjects: ['Machine Learning', 'Data Science', 'Python Programming', 'Deep Learning'],
            rating: 4.8,
            students: 892,
            courses: 12,
            avatar: '👩‍💼',
            department: 'Computer Science',
            isLive: false,
            description: 'AI researcher and passionate educator focused on making complex concepts accessible',
            expertise: ['Neural Networks', 'Computer Vision', 'Natural Language Processing'],
            education: 'PhD in Computer Science, Stanford',
            experience: '8 years',
            upcomingSessions: 2,
            responseTime: '4 hours',
            languages: ['English', 'Spanish'],
            socialLinks: {
              website: 'https://sarahjohnson.ai',
              linkedin: 'sarahjohnson-ai',
              twitter: 'dr_sjohnson'
            },
            stats: {
              totalStudents: 892,
              courseCompletion: 88,
              studentSatisfaction: 96,
              responseRate: 90
            },
            availability: {
              nextAvailable: new Date(Date.now() + 6 * 60 * 60 * 1000),
              officeHours: 'Tue, Thu 10-12 PM',
              mentorshipSlots: 5
            },
            featured: false,
            verified: true
          },
          {
            id: 'teacher-3',
            name: 'Dr. Emily Watson',
            username: '@dr_ewatson',
            subjects: ['Physics', 'Research Methodology', 'Quantum Mechanics', 'Astrophysics'],
            rating: 4.9,
            students: 756,
            courses: 8,
            avatar: '👩‍🔬',
            department: 'Physics',
            isLive: true,
            description: 'Making complex physics concepts accessible to all learners through interactive teaching',
            expertise: ['Quantum Computing', 'Particle Physics', 'Cosmology'],
            education: 'PhD in Physics, Caltech',
            experience: '12 years',
            upcomingSessions: 4,
            responseTime: '1 hour',
            languages: ['English', 'French'],
            socialLinks: {
              website: 'https://emilywatson.physics',
              linkedin: 'emilywatson-physics',
              twitter: 'dr_ewatson'
            },
            stats: {
              totalStudents: 756,
              courseCompletion: 95,
              studentSatisfaction: 99,
              responseRate: 98
            },
            availability: {
              nextAvailable: new Date(Date.now() + 30 * 60 * 1000),
              officeHours: 'Fri 1-3 PM',
              mentorshipSlots: 2
            },
            featured: true,
            verified: true
          },
          {
            id: 'teacher-4',
            name: 'Dr. James Wilson',
            username: '@dr_jwilson',
            subjects: ['Data Structures', 'Algorithms', 'Software Engineering'],
            rating: 4.7,
            students: 1103,
            courses: 10,
            avatar: '👨‍💻',
            department: 'Computer Science',
            isLive: false,
            description: 'Industry expert turned educator with real-world software engineering experience',
            expertise: ['System Design', 'Distributed Systems', 'Cloud Computing'],
            education: 'PhD in Computer Engineering, Carnegie Mellon',
            experience: '10 years',
            upcomingSessions: 1,
            responseTime: '6 hours',
            languages: ['English'],
            socialLinks: {
              website: 'https://jameswilson.dev',
              linkedin: 'jameswilson-dev',
              twitter: 'dr_jwilson'
            },
            stats: {
              totalStudents: 1103,
              courseCompletion: 85,
              studentSatisfaction: 94,
              responseRate: 88
            },
            availability: {
              nextAvailable: new Date(Date.now() + 24 * 60 * 60 * 1000),
              officeHours: 'Mon, Fri 3-5 PM',
              mentorshipSlots: 4
            },
            featured: false,
            verified: true
          }
        ];
        setTeachers(teachersData);
        setIsLoading(false);
      }, 1500);
    };

    loadTeachers();
  }, []);

  useEffect(() => {
    let results = teachers;

    // Apply search filter
    if (searchQuery) {
      results = results.filter(teacher =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
        teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply active filter
    if (activeFilter !== 'all') {
      results = results.filter(teacher => {
        switch (activeFilter) {
          case 'live':
            return teacher.isLive;
          case 'featured':
            return teacher.featured;
          case 'mathematics':
            return teacher.department === 'Mathematics';
          case 'computer-science':
            return teacher.department === 'Computer Science';
          case 'physics':
            return teacher.department === 'Physics';
          default:
            return true;
        }
      });
    }

    // Apply sorting
    results.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'students':
          return b.students - a.students;
        case 'courses':
          return b.courses - a.courses;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredTeachers(results);
  }, [searchQuery, activeFilter, sortBy, teachers]);

  const toggleFollow = (teacherId) => {
    setFollowedTeachers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(teacherId)) {
        newSet.delete(teacherId);
      } else {
        newSet.add(teacherId);
      }
      return newSet;
    });
  };

  const handleBookSession = (teacher) => {
    console.log(`Booking session with ${teacher.name}`);
    // In a real app, this would open a booking modal
  };

  const handleSendMessage = (teacher) => {
    console.log(`Sending message to ${teacher.name}`);
    // In a real app, this would open a messaging interface
  };

  const filters = [
    { id: 'all', label: 'All Teachers', count: teachers.length },
    { id: 'live', label: 'Live Now', count: teachers.filter(t => t.isLive).length },
    { id: 'featured', label: 'Featured', count: teachers.filter(t => t.featured).length },
    { id: 'mathematics', label: 'Mathematics', count: teachers.filter(t => t.department === 'Mathematics').length },
    { id: 'computer-science', label: 'Computer Science', count: teachers.filter(t => t.department === 'Computer Science').length },
    { id: 'physics', label: 'Physics', count: teachers.filter(t => t.department === 'Physics').length }
  ];

  const sortOptions = [
    { id: 'rating', label: 'Highest Rated' },
    { id: 'students', label: 'Most Students' },
    { id: 'courses', label: 'Most Courses' },
    { id: 'name', label: 'Alphabetical' }
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
          <h2 className="text-2xl font-bold text-gray-900">Teachers & Mentors</h2>
          <p className="text-gray-600">Connect with expert educators and access exclusive content</p>
        </div>
        <div className="flex space-x-3">
          <motion.button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter />
            <span>Filter & Sort</span>
            <FaChevronDown className={`text-xs transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>
      </motion.div>

      {/* Filters and Sorting */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 space-y-4"
          >
            {/* Filter Tabs */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                      activeFilter === filter.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{filter.label}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeFilter === filter.id ? 'bg-indigo-500' : 'bg-gray-300'
                    }`}>
                      {filter.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Sort by</h3>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map(option => (
                  <motion.button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      sortBy === option.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4].map(item => (
              <motion.div
                key={item}
                className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="animate-pulse">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="flex space-x-4 mb-4">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teachers Grid */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key={`${activeFilter}-${sortBy}-${searchQuery}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredTeachers.map((teacher, index) => (
              <TeacherCard 
                key={teacher.id} 
                teacher={teacher} 
                index={index}
                isFollowed={followedTeachers.has(teacher.id)}
                onToggleFollow={toggleFollow}
                onViewProfile={setSelectedTeacher}
                onBookSession={handleBookSession}
                onSendMessage={handleSendMessage}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      <AnimatePresence>
        {!isLoading && filteredTeachers.length === 0 && (
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Teachers Found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || activeFilter !== 'all' 
                ? "Try adjusting your search or filter criteria" 
                : "No teachers available at the moment"}
            </p>
            {(searchQuery || activeFilter !== 'all') && (
              <motion.button
                onClick={() => {
                  setActiveFilter('all');
                  setShowFilters(false);
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

      {/* Teacher Detail Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <TeacherDetailModal
            teacher={selectedTeacher}
            isFollowed={followedTeachers.has(selectedTeacher.id)}
            onToggleFollow={toggleFollow}
            onClose={() => setSelectedTeacher(null)}
            onBookSession={handleBookSession}
            onSendMessage={handleSendMessage}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeacherCard = ({ teacher, index, isFollowed, onToggleFollow, onViewProfile, onBookSession, onSendMessage }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const statsVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-sm border border-gray-200/60 cursor-pointer relative overflow-hidden group"
    >
      {/* Verified Badge */}
      {teacher.verified && (
        <motion.div 
          className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
        >
          <FaCheck className="text-xs" />
        </motion.div>
      )}

      {/* Featured Badge */}
      {teacher.featured && (
        <motion.div 
          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10 flex items-center space-x-1"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
        >
          <FaStar className="text-xs" />
          <span>Featured</span>
        </motion.div>
      )}

      <div className="p-6">
        {/* Teacher Header */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="flex items-center space-x-3 flex-1 cursor-pointer"
            onClick={() => onViewProfile(teacher)}
          >
            <motion.div 
              className="text-3xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {teacher.avatar}
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">{teacher.username}</p>
              <p className="text-xs text-gray-400 mt-1">{teacher.department}</p>
            </div>
          </div>
          {teacher.isLive && (
            <motion.span 
              className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold flex items-center space-x-1"
              variants={statsVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span>Live</span>
            </motion.span>
          )}
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <motion.div 
            className="flex items-center space-x-1"
            whileHover="hover"
            variants={statsVariants}
          >
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{teacher.rating}</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-1"
            whileHover="hover"
            variants={statsVariants}
          >
            <FaUsers />
            <span>{teacher.students.toLocaleString()}</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-1"
            whileHover="hover"
            variants={statsVariants}
          >
            <FaBook />
            <span>{teacher.courses}</span>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{teacher.description}</p>

        {/* Expertise */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {teacher.expertise.slice(0, 2).map((expertise, index) => (
              <motion.span 
                key={index}
                className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {expertise}
              </motion.span>
            ))}
            {teacher.expertise.length > 2 && (
              <motion.span 
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                +{teacher.expertise.length - 2}
              </motion.span>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2 mb-4">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onBookSession(teacher);
            }}
            className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm flex items-center justify-center space-x-1"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCalendar className="text-xs" />
            <span>Book Session</span>
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onSendMessage(teacher);
            }}
            className="p-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.button>
        </div>

        {/* Follow Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFollow(teacher.id);
          }}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 relative overflow-hidden ${
            isFollowed
              ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
              : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg'
          }`}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: isHovered ? ['0%', '100%'] : '0%'
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          />
          {isFollowed ? (
            <>
              <FaCheck className="text-sm relative z-10" />
              <span className="relative z-10">Following</span>
            </>
          ) : (
            <>
              <FaUserPlus className="text-sm relative z-10" />
              <span className="relative z-10">Follow Teacher</span>
            </>
          )}
        </motion.button>

        {/* Benefits */}
        {isFollowed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-xs text-blue-700 text-center">
              You'll receive updates when this teacher posts new content
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const TeacherDetailModal = ({ teacher, isFollowed, onToggleFollow, onClose, onBookSession, onSendMessage }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative">
          <div className="absolute top-4 right-4">
            <motion.button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-lg"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="text-lg" />
            </motion.button>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-3xl p-8 text-white">
            <div className="flex items-start space-x-6">
              <motion.div 
                className="text-6xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {teacher.avatar}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold">{teacher.name}</h2>
                  {teacher.verified && (
                    <motion.div 
                      className="bg-white text-blue-500 p-1 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <FaCheck className="text-xs" />
                    </motion.div>
                  )}
                </div>
                <p className="text-indigo-100 text-lg">{teacher.username}</p>
                <p className="text-indigo-200">{teacher.department} • {teacher.experience} experience</p>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-300" />
                    <span className="font-semibold">{teacher.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUsers />
                    <span>{teacher.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaBook />
                    <span>{teacher.courses} courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{teacher.description}</p>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.expertise.map((exp, index) => (
                    <motion.span
                      key={exp}
                      className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Subjects */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Subjects Taught</h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject, index) => (
                    <motion.span
                      key={subject}
                      className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {subject}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Actions */}
            <div className="space-y-6">
              {/* Teacher Stats */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Teaching Stats</h3>
                <div className="space-y-3">
                  {Object.entries(teacher.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <span className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {typeof value === 'number' && key !== 'totalStudents' ? `${value}%` : value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Availability</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-blue-500" />
                    <span>Next available: {teacher.availability.nextAvailable.toLocaleTimeString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendar className="text-blue-500" />
                    <span>Office hours: {teacher.availability.officeHours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-blue-500" />
                    <span>{teacher.availability.mentorshipSlots} mentorship slots available</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  onClick={() => onToggleFollow(teacher.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                    isFollowed
                      ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isFollowed ? (
                    <>
                      <FaCheck className="text-sm" />
                      <span>Following</span>
                    </>
                  ) : (
                    <>
                      <FaUserPlus className="text-sm" />
                      <span>Follow Teacher</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  onClick={() => onBookSession(teacher)}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaCalendar className="text-sm" />
                  <span>Book Session</span>
                </motion.button>

                <motion.button
                  onClick={() => onSendMessage(teacher)}
                  className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaEnvelope className="text-sm" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeachersSection;