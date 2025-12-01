// components/DashboardHeader.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBell,
  FaSearch,
  FaCog,
  FaGraduationCap,
  FaTimes,
  FaEnvelope,
  FaVideo,
  FaBook,
  FaSignOutAlt,
  FaUser,
  FaCaretDown,
  FaBookOpen,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";

const DashboardHeader = ({
  userData,
  notifications,
  searchQuery,
  setSearchQuery,
  onMarkNotificationRead,
  onSearch, // New prop for handling search functionality
  onSignOut, // New prop for handling sign out
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [notificationFilter, setNotificationFilter] = useState("all");

  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const unreadNotifications = notifications.filter((n) => n.read < 0).length;

  // Handle search functionality
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Call parent search handler if provided
    if (onSearch) {
      onSearch(value);
    }
  };

  // Handle search submission (when Enter is pressed)
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      e.preventDefault();
      // Trigger search action
      if (onSearch) {
        onSearch(searchQuery);
      }
      // Blur the input to close keyboard on mobile
      searchInputRef.current?.blur();
    }
  };

  // Clear search and reset
  const handleClearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  // Handle profile navigation
  const handleProfileClick = () => {
    navigate("/profile");
    setShowUserMenu(false);
  };

  // Handle settings navigation
  const handleSettingsClick = () => {
    navigate("/settings");
    setShowUserMenu(false);
  };

  // Mark notification as read
  const handleMarkNotificationRead = async (notificationId) => {
    if (onMarkNotificationRead) {
      onMarkNotificationRead(notificationId);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter notifications based on selected filter
  const filteredNotifications = notifications.filter((notification) => {
    if (notificationFilter === "all") return true;
    if (notificationFilter === "unread") return !notification.read;
    if (notificationFilter === "urgent") return notification.urgent;
    return notification.type === notificationFilter;
  });

  const getNotificationIcon = (type) => {
    switch (type) {
      case "assignment":
        return FaBook;
      case "live":
        return FaVideo;
      case "content":
        return FaGraduationCap;
      case "message":
        return FaEnvelope;
      case "system":
        return FaCog;
      default:
        return FaBell;
    }
  };

  const getNotificationColor = (type, urgent = false) => {
    if (urgent) return "text-red-500 bg-red-100 border border-red-200";

    switch (type) {
      case "assignment":
        return "text-blue-500 bg-blue-100";
      case "live":
        return "text-red-500 bg-red-100";
      case "content":
        return "text-green-500 bg-green-100";
      case "message":
        return "text-purple-500 bg-purple-100";
      case "system":
        return "text-gray-500 bg-gray-100";
      default:
        return "text-indigo-500 bg-indigo-100";
    }
  };

  const notificationVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!userData) return "U";
    const { first_name, last_name } = userData;
    if (first_name && last_name) {
      return `${first_name.charAt(0)}${last_name.charAt(0)}`.toUpperCase();
    }
    if (first_name) return first_name.charAt(0).toUpperCase();
  };

  // Get user display name
  const getUserDisplayName = () => {
    if (!userData) return "User";
    if (userData.first_name && userData.last_name) {
      return `${userData.first_name} ${userData.last_name}`;
    }
  };

  return (
    <motion.header
      className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand with Connection Status */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/dashboard")}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg relative"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaGraduationCap className="text-white text-lg" />
            </motion.div>
            <div>
              <motion.h1
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                NicMauriceCollege
              </motion.h1>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-500">
                  Social Learning Platform
                </p>
              </div>
            </div>
          </motion.div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <motion.div
              className="relative"
              animate={{
                scale: isSearchFocused ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <motion.input
                ref={searchInputRef}
                type="text"
                placeholder="Search classes, teachers, content..."
                value={searchQuery}
                onChange={handleSearch}
                onKeyPress={handleSearchSubmit}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm"
                whileFocus={{
                  boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                  borderColor: "rgba(99, 102, 241, 0.5)",
                }}
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes className="text-sm" />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Notifications and User Menu */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <motion.button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  rotate: showNotifications ? [0, -10, 10, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <FaBell className="text-lg" />
                {unreadNotifications > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {unreadNotifications}
                  </motion.span>
                )}
              </motion.button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-200/60 backdrop-blur-sm z-50 overflow-hidden"
                  >
                    {/* Notifications Header */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">
                            Notifications
                          </h3>
                        </div>
                        <div className="flex space-x-2">
                          <motion.button
                            onClick={() => setShowNotifications(false)}
                            className="text-gray-400 hover:text-gray-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaTimes className="text-sm" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Notification Filters */}
                      <div className="flex space-x-1 mt-3 overflow-x-auto">
                        {[
                          "all",
                          "unread",
                          "urgent",
                          "assignment",
                          "live",
                          "content",
                        ].map((filter) => (
                          <motion.button
                            key={filter}
                            onClick={() => setNotificationFilter(filter)}
                            className={`px-2 py-1 rounded-lg text-xs font-medium capitalize transition-colors whitespace-nowrap ${
                              notificationFilter === filter
                                ? "bg-indigo-100 text-indigo-700"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {filter}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-96 overflow-y-auto">
                      <motion.div
                        variants={staggerVariants}
                        initial="hidden"
                        animate="visible"
                        className="divide-y divide-gray-100"
                      >
                        {filteredNotifications.length > 0 ? (
                          filteredNotifications.map((notification) => {
                            const IconComponent = getNotificationIcon(
                              notification.type
                            );

                            return (
                              <motion.div
                                key={notification.id}
                                variants={notificationVariants}
                                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors relative ${
                                  !notification.read ? "bg-blue-50/50" : ""
                                }`}
                                onClick={() =>
                                  handleMarkNotificationRead(notification.id)
                                }
                                whileHover={{ x: 4 }}
                              >
                                <div className="flex items-start space-x-3">
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${getNotificationColor(
                                      notification.type,
                                      notification.urgent
                                    )}`}
                                  >
                                    <IconComponent className="text-sm" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-900 leading-relaxed">
                                      {notification.message}
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                      <span className="text-xs text-indigo-600 font-medium">
                                        {notification.from}
                                      </span>
                                      <span className="text-xs text-gray-500">
                                        {new Date(
                                          notification.created_at
                                        ).toLocaleTimeString([], {
                                          hour: "2-digit",
                                          minute: "2-digit",
                                        })}
                                      </span>
                                    </div>
                                  </div>
                                  {!notification.read && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"
                                    />
                                  )}
                                </div>
                              </motion.div>
                            );
                          })
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-8 text-center text-gray-500"
                          >
                            <FaBell className="text-3xl text-gray-300 mx-auto mb-3" />
                            <p className="text-sm">No notifications</p>
                            <p className="text-xs mt-1">
                              You're all caught up!
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Menu */}
            <div className="relative" ref={userMenuRef}>
              <motion.button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 p-2 rounded-2xl hover:bg-gray-100 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {getUserInitials()}
                </motion.div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">
                    {getUserDisplayName()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userData?.role || "Student"}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: showUserMenu ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCaretDown className="text-gray-400 text-sm" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200/60 backdrop-blur-sm z-50 overflow-hidden"
                  >
                    {/* User Info Header */}
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                          {getUserInitials()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {getUserDisplayName()}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {userData?.email || userData?.username || "User"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <motion.button
                        onClick={handleProfileClick}
                        className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaUser className="text-gray-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-sm">My Profile</span>
                      </motion.button>

                      <motion.button
                        onClick={handleSettingsClick}
                        className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaCog className="text-gray-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-sm">Settings</span>
                      </motion.button>

                      <motion.button
                        className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaBookOpen className="text-gray-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-sm">My Courses</span>
                      </motion.button>

                      <div className="border-t border-gray-200 my-2"></div>

                      <motion.button
                        onClick={onSignOut}
                        className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-red-50 transition-colors text-red-600 group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaSignOutAlt className="text-red-400 group-hover:text-red-600 transition-colors" />
                        <span className="text-sm">Sign Out</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
