// src/components/LoginPage.jsx
import React, { useState } from "react";
import {
  BookOpen,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  Sparkles,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        return alert(data.message || "Login failed");
      }

      // Store token in cookie
      Cookies.set("token", data.token, {
        expires: 2, // cookie lasts 7 days
        secure: false, // set to true when using HTTPS
        sameSite: "strict",
      });

      setIsLoading(false);

      // Redirect to dashboard
      if (data.user.role === "student") {
        navigate("/student");
      } else {
        navigate("/teacher");
      }
    } catch (error) {
      console.log(error);
      console.error("Login Error:", error);
      setIsLoading(false);
      alert("Something went wrong. Try again.");
    }
  };

  const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 bg-blue-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-200 rounded-full opacity-20"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-10 h-10 bg-pink-200 rounded-lg opacity-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-12 h-12 bg-green-200 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );

  const LoginForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome Back
        </motion.h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-between"
        >
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) =>
                handleInputChange("rememberMe", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>

          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Forgot password?
          </a>
        </motion.div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all relative overflow-hidden ${
            isLoading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
          } text-white`}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center space-x-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Signing in...</span>
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center space-x-2"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button shine effect */}
          {!isLoading && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-100%]"
              whileHover={{ x: ["0%", "100%"] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </motion.button>
      </form>
    </motion.div>
  );

  const SignupPrompt = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Join Our Community
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Start your learning journey today
        </motion.p>
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200"
        >
          <Zap className="w-6 h-6 text-blue-600" />
          <div>
            <h4 className="font-semibold text-gray-900">
              Access Thousands of Courses
            </h4>
            <p className="text-sm text-gray-600">
              Learn from expert teachers worldwide
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200"
        >
          <Smartphone className="w-6 h-6 text-purple-600" />
          <div>
            <h4 className="font-semibold text-gray-900">Learn Anywhere</h4>
            <p className="text-sm text-gray-600">Mobile-friendly platform</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
        >
          <Shield className="w-6 h-6 text-green-600" />
          <div>
            <h4 className="font-semibold text-gray-900">Secure & Private</h4>
            <p className="text-sm text-gray-600">
              Your data is always protected
            </p>
          </div>
        </motion.div>
      </div>

      <Link to="/register">
        <motion.button
          onClick={() => (window.location.href = "/register")}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-3 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all"
        >
          <UserPlus className="w-5 h-5" />
          <span>Create Your Account</span>
        </motion.button>
      </Link>

      <p className="text-center text-sm text-gray-600">
        Join 50,000+ learners and educators
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <FloatingShapes />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen className="text-white w-6 h-6" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900">
              {" "}
              Nicmaurice College
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Where learning meets innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Login Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === "login"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === "signup"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                New Here?
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <LoginForm key="login" />
              ) : (
                <SignupPrompt key="signup" />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white h-full">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Transform Your Learning Experience
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Join thousands of educators and students who are already
                    revolutionizing education
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Personalized Learning</h4>
                      <p className="text-blue-100 text-sm">
                        AI-powered recommendations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">👥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Social Learning</h4>
                      <p className="text-blue-100 text-sm">
                        Connect with peers and mentors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Progress Tracking</h4>
                      <p className="text-blue-100 text-sm">
                        Real-time analytics and insights
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Live Classes</h4>
                      <p className="text-blue-100 text-sm">
                        Interactive virtual classrooms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
