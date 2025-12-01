// src/components/RegisterPage.jsx RC 1449965
import React, { useState } from "react";
import {
  BookOpen,
  User,
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  ArrowLeft,
  Sparkles,
  Phone,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    // Basic Info
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone: "",
    date_of_birth: "",

    // Student Interests
    interests: [],
    educationLevel: "",
    learningGoals: "",

    // Teacher Info
    subjects: [],
    teachingLevel: "",
    bio: "",
    experience: "",
    credentials: [],
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Available options
  const subjects = [
    // Mathematics & Sciences
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Statistics",
    "Environmental Science",
    "Health Science",
    "Agriculture",

    // Computer Science & Technology
    "Computer Science",
    "Programming",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Robotics",
    "Cybersecurity",
    "Networking",
    "Cloud Computing",
    "Blockchain Technology",

    // Engineering
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",

    // Business & Economics
    "Economics",
    "Accounting",
    "Business Studies",
    "Marketing",
    "Entrepreneurship",
    "Finance",
    "Forex Trading",

    // Languages & Literature
    "English Language",
    "English Literature",
    "Creative Writing",
    "Literature",

    // Humanities & Social Sciences
    "History",
    "Geography",
    "Philosophy",
    "Psychology",
    "Sociology",

    // Arts & Design
    "Art & Design",
    "Graphic Design",
    "UI/UX Design",
    "Music",
    "Music Theory",
    "Physical Education",
  ];

  const interests = [
    "AI & Machine Learning",
    "Agriculture & Farming",
    "Animation",
    "Blockchain",
    "Business Strategy",
    "Coding",
    "Content Creation",
    "Crypto Trading",
    "Cybersecurity",
    "Data Analytics",
    "Debate",
    "Digital Marketing",
    "Engineering Projects",
    "Entrepreneurship",
    "Environmental Protection",
    "Ethical Hacking",
    "Fitness & Wellness",
    "Forex Trading",
    "Gaming",
    "Graphic Design",
    "Investing",
    "Language Learning",
    "Leadership Skills",
    "Mathematics",
    "Mobile Apps",
    "Music Production",
    "Personal Finance",
    "Photography",
    "Product Design",
    "Psychology",
    "Public Speaking",
    "Research & Innovation",
    "Robotics",
    "Science Experiments",
    "Space & Astronomy",
    "Startup Building",
    "UI/UX Design",
    "Video Editing",
    "Web Design",
    "Writing & Blogging",
  ];

  const educationLevels = [
    "High School",
    "Undergraduate",
    "Graduate",
    "Professional Development",
    "Lifelong Learning",
  ];

  const experienceLevels = [
    "Beginner (0-2 years)",
    "Intermediate (2-5 years)",
    "Experienced (5-10 years)",
    "Expert (10+ years)",
  ];

  const genders = ["Male", "Female", "Prefer not to say", "Other"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return userType !== null;
      case 2:
        const basicInfoValid =
          formData.first_name &&
          formData.last_name &&
          formData.email &&
          formData.password &&
          formData.confirmPassword &&
          formData.password === formData.confirmPassword &&
          formData.gender &&
          formData.phone &&
          formData.date_of_birth;

        // Validate phone number format (basic validation)
        const phoneRegex = /^\+?[\d\s-()]{10,}$/;
        const phoneValid = phoneRegex.test(formData.phone.replace(/\s/g, ""));

        // Validate date of birth (must be in the past)
        const dobValid =
          formData.date_of_birth &&
          new Date(formData.date_of_birth) < new Date();

        return basicInfoValid && phoneValid && dobValid;
      case 3:
        if (userType === "student") {
          return formData.interests.length > 0 && formData.educationLevel;
        } else {
          return formData.subjects.length > 0 && formData.teachingLevel;
        }
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      setError("");
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setError("");
  };

  // Prevent form submission on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // Only proceed to next step if we're not on the final step
      if (currentStep < 3 && validateStep(currentStep)) {
        nextStep();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      setError("Please fill in all required fields correctly.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Prepare the data for submission
      const submissionData = {
        userType,
        ...formData,
        // Convert date to ISO string for backend
        dateOfBirth: new Date(formData.date_of_birth).toISOString(),
        // Remove confirmPassword as it's not needed for backend
        confirmPassword: undefined,
      };

      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const Step1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Learning Community
        </h2>
        <p className="text-gray-600 text-lg">
          Choose how you'd like to experience our Academy
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Student Card */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setUserType("student")}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
            userType === "student"
              ? "border-blue-500 bg-blue-50 shadow-lg"
              : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            {userType === "student" && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            I'm a Student
          </h3>
          <p className="text-gray-600 mb-4">
            Discover courses, follow teachers, and track your learning journey
          </p>

          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Access thousands of courses</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Follow expert teachers</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Track your progress</span>
            </li>
          </ul>
        </motion.button>

        {/* Teacher Card */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setUserType("teacher")}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
            userType === "teacher"
              ? "border-purple-500 bg-purple-50 shadow-lg"
              : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-md"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-purple-600" />
            </div>
            {userType === "teacher" && (
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            I'm a Teacher
          </h3>
          <p className="text-gray-600 mb-4">
            Create courses, build your following, and inspire learners
          </p>

          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Create and sell courses</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Build your teaching brand</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Connect with students worldwide</span>
            </li>
          </ul>
        </motion.button>
      </div>
    </motion.div>
  );

  const Step2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-600">Let's get to know you better</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.first_name}
            onChange={(e) => handleInputChange("first_name", e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.last_name}
            onChange={(e) => handleInputChange("last_name", e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender *
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select your gender</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={formData.date_of_birth}
              onChange={(e) =>
                handleInputChange("date_of_birth", e.target.value)
              }
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              max={new Date().toISOString().split("T")[0]}
            />
          </div>
          {formData.date_of_birth &&
            new Date(formData.date_of_birth) >= new Date() && (
              <p className="text-red-500 text-sm mt-2">
                Date of birth must be in the past
              </p>
            )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        {formData.phone &&
          !/^\+?[\d\s-()]{10,}$/.test(formData.phone.replace(/\s/g, "")) && (
            <p className="text-red-500 text-sm mt-2">
              Please enter a valid phone number
            </p>
          )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password *
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Create a strong password"
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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password *
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {formData.confirmPassword &&
          formData.password !== formData.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
          )}
      </div>
    </motion.div>
  );

  const Step3Student = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Learning Preferences
        </h2>
        <p className="text-gray-600">
          Help us personalize your learning experience
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          What are you interested in learning? *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {interests.map((interest) => (
            <motion.button
              key={interest}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleArrayToggle("interests", interest)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                formData.interests.includes(interest)
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
              }`}
            >
              <span className="text-sm font-medium">{interest}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Education Level *
        </label>
        <select
          value={formData.educationLevel}
          onChange={(e) => handleInputChange("educationLevel", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <option value="">Select your education level</option>
          {educationLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );

  const Step3Teacher = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Teaching Profile
        </h2>
        <p className="text-gray-600">
          Tell us about your expertise and teaching style
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          What subjects do you teach? *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {subjects.map((subject) => (
            <motion.button
              key={subject}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleArrayToggle("subjects", subject)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                formData.subjects.includes(subject)
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-purple-300"
              }`}
            >
              <span className="text-sm font-medium">{subject}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teaching Experience Level *
        </label>
        <select
          value={formData.teachingLevel}
          onChange={(e) => handleInputChange("teachingLevel", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
        >
          <option value="">Select your experience level</option>
          {experienceLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teaching Bio *
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleInputChange("bio", e.target.value)}
          onKeyPress={handleKeyPress}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          placeholder="Tell students about your teaching philosophy, experience, and what makes your classes special..."
        />
        <p className="text-gray-500 text-sm mt-2">
          This will be displayed on your public profile
        </p>
      </div> */}

      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Credentials (Optional)
        </label>
        <input
          type="text"
          value={formData.experience}
          onChange={(e) => handleInputChange("experience", e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          placeholder="Degrees, certifications, awards..."
        />
      </div> */}
    </motion.div>
  );

  const StepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center space-x-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentStep >= step
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {step}
          </div>
          {step < 3 && (
            <div
              className={`w-12 h-1 rounded-full transition-colors ${
                currentStep > step ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  // Render the current step without AnimatePresence to prevent re-mounting
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 key="step1" />;
      case 2:
        return <Step2 key="step2" />;
      case 3:
        return userType === "student" ? (
          <Step3Student key="step3-student" />
        ) : (
          <Step3Teacher key="step3-teacher" />
        );
      default:
        return <Step1 key="step1" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Nicmaurice College
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Join our community of learners and educators
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <StepIndicator />

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-red-700 text-sm">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Render current step directly without AnimatePresence */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderCurrentStep()}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 ? (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </motion.button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!validateStep(currentStep)}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                    validateStep(currentStep)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all ${
                    isLoading
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Complete Registration</span>
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in here
                </span>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
