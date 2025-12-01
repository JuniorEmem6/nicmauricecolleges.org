// components/DashboardOverview.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaBook,
  FaCertificate,
  FaClock,
  FaAward,
  FaFire,
  FaChevronRight,
  FaCalendarAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const DashboardOverview = ({ userData, userStats, searchQuery, token }) => {
  const [learningStats, setLearningStats] = useState(userStats);
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [animatedStats, setAnimatedStats] = useState(userStats);

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Animate numbers when stats change
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(learningStats).forEach((key) => {
      if (typeof learningStats[key] === "number") {
        let step = 0;
        const startValue = animatedStats[key] || 0;
        const endValue = learningStats[key];
        const increment = (endValue - startValue) / steps;

        const timer = setInterval(() => {
          step++;
          setAnimatedStats((prev) => ({
            ...prev,
            [key]: Math.min(startValue + increment * step, endValue),
          }));

          if (step >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    });
  }, [learningStats]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      // Enrolled Classes
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

        setUpcomingSessions(data);
        // setLiveClass(data.find((cls) => cls.isLive) || null);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    loadData();
  }, []);

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

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      scale: 1.02,
      y: -4,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const progressBarVariants = {
    initial: { width: 0 },
    animate: {
      width: `${
        (learningStats.weeklyProgress / learningStats.weeklyGoal) * 100
      }%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const streakPulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Welcome Section */}
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
        </div>

        <div className="relative flex justify-between items-start">
          <div>
            <motion.h1
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome back, {userData.name}! 👋
            </motion.h1>
            <motion.p
              className="text-indigo-100 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to continue your learning journey? You're on a{" "}
              {learningStats.current_streak}-day streak!
            </motion.p>
          </div>
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30"
            variants={streakPulseVariants}
            animate="pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-1">
              <FaFire className="text-orange-400" />
              <div className="text-2xl font-bold">
                {Math.round(animatedStats.current_streak)}
              </div>
            </div>
            <div className="text-indigo-100 text-sm">Day Streak</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        <StatCard
          icon={FaBook}
          label="Courses Enrolled"
          value={Math.round(animatedStats.enrolled_courses)}
          color="blue"
          delay={0}
        />
        <StatCard
          icon={FaCertificate}
          label="Certificates"
          value={Math.round(animatedStats.completed_courses)}
          color="green"
          delay={0.1}
        />
        <StatCard
          icon={FaClock}
          label="Learning Hours"
          value={Math.round(animatedStats.learning_hours)}
          color="purple"
          delay={0.2}
        />
        <StatCard
          icon={FaAward}
          label="Current Streak"
          value={Math.round(animatedStats.current_streak)}
          color="orange"
          delay={0.3}
        />
      </motion.div>

      {/* <div className="grid lg:grid-cols-2 gap-6"> */}
      {/* Upcoming Sessions */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Upcoming Classes
          </h2>
          <motion.button
            className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold flex items-center space-x-1"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All</span>
            <FaChevronRight className="text-xs" />
          </motion.button>
        </div>
        <div className="space-y-4">
          <AnimatePresence>
            {upcomingSessions.map((session, index) => (
              <motion.div
                key={session.id}
                variants={itemVariants}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
              >
                <SessionCard session={session} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Continue Learning */}
      {/* <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Continue Learning</h2>
            <motion.button 
              className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold flex items-center space-x-1"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Browse More</span>
              <FaChevronRight className="text-xs" />
            </motion.button>
          </div>
          <div className="space-y-4">
            <AnimatePresence>
              {recommendedContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover="hover"
                >
                  <ContentCard content={content} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div> */}
      {/* </div> */}

      {/* Weekly Progress */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Weekly Learning Goal
          </h2>
          <span className="text-sm text-gray-600">
            {Math.round(animatedStats.weekly_progress)}/
            {learningStats.weekly_goal} hours completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-4 rounded-full relative"
            variants={progressBarVariants}
            initial="initial"
            animate="animate"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Keep going! You're doing great</span>
          <motion.span
            key={Math.round(
              (animatedStats.weekly_progress / learningStats.weekly_goal) * 100
            )}
            initial={{ scale: 1.2, color: "#10b981" }}
            animate={{ scale: 1, color: "#6b7280" }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(
              (animatedStats.weekly_progress / learningStats.weekly_goal) * 100
            )}
            %
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatCard = ({ icon: Icon, label, value, color, delay = 0 }) => {
  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
  };

  const bgColorClasses = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    purple: "bg-purple-50",
    orange: "bg-orange-50",
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.98,
      y: -2,
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className={`${bgColorClasses[color]} rounded-2xl p-6 group cursor-pointer relative overflow-hidden`}
    >
      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      ></div>

      <div className="flex items-center space-x-4 relative z-10">
        <motion.div
          className={`w-12 h-12 bg-gradient-to-r ${colorClasses[color]} rounded-xl flex items-center justify-center text-white shadow-lg`}
          variants={iconVariants}
          whileHover="hover"
        >
          <Icon className="text-xl" />
        </motion.div>
        <div>
          <motion.div
            className="text-2xl font-bold text-gray-900"
            key={value}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

const SessionCard = ({ session, index }) => {
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

const ContentCard = ({ content, index }) => {
  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${content.progress}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: index * 0.2 + 0.5,
      },
    },
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className="p-4 bg-gradient-to-r from-gray-50 to-indigo-50/30 rounded-xl border border-gray-200/50 hover:border-indigo-200/50 transition-colors group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-start space-x-3">
          <motion.div
            className="text-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {content.thumbnail}
          </motion.div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {content.title}
            </h3>
            <p className="text-sm text-gray-600">{content.teacher}</p>
          </div>
        </div>
        <motion.span
          className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          {content.type}
        </motion.span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <motion.span
              key={content.progress}
              initial={{ scale: 1.1, color: "#4f46e5" }}
              animate={{ scale: 1, color: "#6b7280" }}
              transition={{ duration: 0.3 }}
            >
              {content.progress}%
            </motion.span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`bg-gradient-to-r ${content.color} h-2 rounded-full relative`}
              variants={progressVariants}
              initial="initial"
              animate="animate"
            >
              {/* Progress bar shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          </div>
        </div>
        <motion.button
          className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-semibold shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
