import React, { useState, useRef, useEffect } from "react";
import {
  Video,
  Users,
  Calendar,
  Edit,
  Trash2,
  Eye,
  Play,
  Plus,
  Download,
  Bell,
  Settings,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  PhoneOff,
  FileText,
  BookOpen,
  Save,
  X,
  MapPin,
} from "lucide-react";

// Default mock data for fallback
const defaultMockData = [
  {
    id: 1,
    class_id: "cls_001",
    course_code: "Mathematics 101",
    department: "Science & Technology",
    description: "Introduction to Calculus and Algebra",
    schedule: "2024-01-15 at 14:00",
    room: "Room 301",
    student_count: 25,
    assignments: 3,
    resources: 5,
    recordings: [
      {
        id: 1,
        title: "Introduction to Calculus",
        date: "2024-01-10",
        duration: "45:30",
        views: 15,
      },
    ],
  },
  {
    id: 2,
    class_id: "cls_002",
    course_code: "Physics 201",
    department: "Science & Technology",
    description: "Advanced Physics Concepts",
    schedule: "2024-01-16 at 10:00",
    room: "Lab Building A",
    student_count: 18,
    assignments: 2,
    resources: 7,
    recordings: [],
  },
  {
    id: 3,
    class_id: "cls_003",
    course_code: "English Literature",
    department: "Humanities",
    description: "Classic and Modern Literature Analysis",
    schedule: "2024-01-17 at 13:00",
    room: "Room 205",
    student_count: 22,
    assignments: 4,
    resources: 3,
    recordings: [
      {
        id: 2,
        title: "Shakespeare Analysis",
        date: "2024-01-08",
        duration: "38:15",
        views: 12,
      },
      {
        id: 3,
        title: "Modern Poetry",
        date: "2024-01-05",
        duration: "42:20",
        views: 8,
      },
    ],
  },
];

const ClassesSection = ({ searchQuery, token, loading, mockData }) => {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showStreamModal, setShowStreamModal] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [streamSettings, setStreamSettings] = useState({
    video: true,
    audio: true,
    recording: false,
    screenShare: false,
  });
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");
  const [editingClass, setEditingClass] = useState(null);

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const [newClass, setNewClass] = useState({
    name: "",
    department: "",
    description: "",
    schedule: "",
    room: "",
    student_count: 0,
  });

  // Initialize classes with safe defaults
  useEffect(() => {
    const classData = mockData || defaultMockData;
    const safeClassData = classData.map((classItem) => ({
      recordings: [],
      assignments: 0,
      activeStudents: 0,
      resources: 0,
      status: "active",
      ...classItem,
    }));
    setClasses(safeClassData);
    setFilteredClasses(safeClassData);
  }, [mockData]);

  // Filter and sort classes
  useEffect(() => {
    let filtered = classes.filter(
      (classItem) =>
        classItem.course_code
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        classItem.department
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        classItem.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aValue = a[sortBy] || "";
      const bValue = b[sortBy] || "";
      return aValue.localeCompare(bValue);
    });

    setFilteredClasses(filtered);
  }, [searchQuery, classes, sortBy]);

  // Safe access to recordings with fallback
  const getClassRecordings = (classItem) => {
    return classItem.recordings || [];
  };

  // Schedule Date Picker Component
  const ScheduleDatePicker = ({ classItem, onScheduleUpdate }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
      classItem.schedule ? classItem.schedule.split(" at ")[0] : ""
    );
    const [selectedTime, setSelectedTime] = useState(
      classItem.schedule ? classItem.schedule.split(" at ")[1] : "14:00"
    );

    const handleSaveSchedule = () => {
      if (selectedDate) {
        const scheduleString = `${selectedDate} at ${selectedTime}`;
        onScheduleUpdate(classItem.id, scheduleString);
        setShowPicker(false);
      }
    };

    const getNextWeekdays = () => {
      const days = [];
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        days.push(date.toISOString().split("T")[0]);
      }
      return days;
    };

    return (
      <div className="relative">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <Calendar className="w-4 h-4 mr-1" />
          <span className="group-hover:underline">
            {classItem.schedule || "Schedule class"}
          </span>
        </button>

        {showPicker && (
          <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 min-w-64">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-gray-800">Schedule Class</h4>
              <button
                onClick={() => setShowPicker(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select date</option>
                  {getNextWeekdays().map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                  ].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setShowPicker(false)}
                  className="flex-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSchedule}
                  disabled={!selectedDate}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Edit Class Modal
  const EditClassModal = ({ classItem, onClose, onSave }) => {
    const [editedClass, setEditedClass] = useState({
      course_code: classItem.course_code || "",
      department: classItem.department || "",
      description: classItem.description || "",
      schedule: classItem.schedule || "",
      room: classItem.room || "",
      student_count: classItem.student_count || 0,
    });

    const handleSave = (e) => {
      e.preventDefault();
      onSave(classItem.id, editedClass);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Edit Class</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSave}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Code *
                </label>
                <input
                  type="text"
                  required
                  value={editedClass.course_code}
                  onChange={(e) =>
                    setEditedClass({
                      ...editedClass,
                      course_code: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Mathematics 101"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department *
                </label>
                <input
                  type="text"
                  required
                  value={editedClass.department}
                  onChange={(e) =>
                    setEditedClass({
                      ...editedClass,
                      department: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Science & Technology"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room/Location
                </label>
                <input
                  type="text"
                  value={editedClass.room}
                  onChange={(e) =>
                    setEditedClass({ ...editedClass, room: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Room 101, Building A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Count
                </label>
                <input
                  type="number"
                  value={editedClass.student_count}
                  onChange={(e) =>
                    setEditedClass({
                      ...editedClass,
                      student_count: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={editedClass.description}
                  onChange={(e) =>
                    setEditedClass({
                      ...editedClass,
                      description: e.target.value,
                    })
                  }
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Class description..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Update class schedule
  const updateClassSchedule = (classId, schedule) => {
    setClasses((prev) =>
      prev.map((cls) => (cls.id === classId ? { ...cls, schedule } : cls))
    );
  };

  // Update class details
  const updateClassDetails = (classId, updatedData) => {
    setClasses((prev) =>
      prev.map((cls) => (cls.id === classId ? { ...cls, ...updatedData } : cls))
    );
  };

  // Start edit mode
  const startEditing = (classItem) => {
    setEditingClass(classItem);
  };

  // Streaming and Recording Functions
  const startStream = async (classItem) => {
    try {
      setSelectedClass(classItem);
      setShowStreamModal(true);

      // 2. Setup WebSocket connection
      const ws = new WebSocket("ws://localhost:5000/"); // change URL to your backend
      ws.onopen = () => {
        console.log("Connected to backend WebSocket for streaming");
      };
      ws.onerror = (err) => {
        console.error("WebSocket error:", err);
        alert("WebSocket connection failed. Streaming won't work.");
      };

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert(
          "Your browser doesn't support video streaming. Please use a modern browser like Chrome, Firefox, or Edge."
        );
        return;
      }

      // 1. Get user media
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      

      // 3. Setup MediaRecorder
      const options = { mimeType: "video/webm;codecs=vp9,opus" };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = "video/webm;codecs=vp8,opus";
      }
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = "video/webm";
      }
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = "video/mp4";
      }

      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      setRecordedChunks([]);

      // 4. Send data chunks to WebSocket
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          // Send raw video blob to backend
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(event.data);
          }

          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      // 5. Handle stopping the recorder
      mediaRecorder.onstop = () => {
        console.log("Live stream stopped");

        if (recordedChunks.length > 0 && selectedClass) {
          const newRecording = {
            id: Date.now(),
            title: `${
              selectedClass.course_code
            } - ${new Date().toLocaleDateString()}`,
            date: new Date().toISOString().split("T")[0],
            duration: "Live Session",
            views: 0,
          };

          setClasses((prev) =>
            prev.map((cls) =>
              cls.id === selectedClass.id
                ? {
                    ...cls,
                    recordings: [
                      newRecording,
                      ...getClassRecordings(cls),
                    ].slice(0, 10),
                  }
                : cls
            )
          );
        }

        // Close WebSocket when done
        if (ws.readyState === WebSocket.OPEN) ws.close();
      };

      // 6. Start streaming (set small timeslice for near real-time)
      mediaRecorder.start(1000); // chunks every 1 second
    } catch (error) {
      console.error("Error accessing media devices:", error);
      if (error.name === "NotAllowedError") {
        alert("Please allow camera and microphone access to start streaming.");
      } else if (error.name === "NotFoundError") {
        alert("No camera or microphone found. Please check your devices.");
      } else {
        alert(
          "Unable to access camera and microphone. Please check permissions and try again."
        );
      }
    }
  };

  const startRecording = () => {
    if (mediaRecorderRef.current && streamRef.current) {
      try {
        mediaRecorderRef.current.start(1000);
        setStreamSettings((prev) => ({ ...prev, recording: true }));
        setIsLive(true);
      } catch (error) {
        console.error("Error starting recording:", error);
        alert("Error starting recording. Please try again.");
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && streamRef.current) {
      try {
        mediaRecorderRef.current.stop();
        setStreamSettings((prev) => ({ ...prev, recording: false }));
        setIsLive(false);

        streamRef.current.getTracks().forEach((track) => track.stop());
      } catch (error) {
        console.error("Error stopping recording:", error);
      }
    }
  };

  const downloadRecording = () => {
    if (recordedChunks.length === 0) {
      alert("No recording available to download.");
      return;
    }

    try {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedClass?.course_code || "class"}_${new Date()
        .toISOString()
        .slice(0, 19)}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading recording:", error);
      alert("Error downloading recording. Please try again.");
    }
  };

  const toggleVideo = () => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setStreamSettings((prev) => ({ ...prev, video: videoTrack.enabled }));
      }
    }
  };

  const toggleAudio = () => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setStreamSettings((prev) => ({ ...prev, audio: audioTrack.enabled }));
      }
    }
  };

  const handleCreateClass = async (e) => {
    e.preventDefault();

    const classPayload = {
      course_code: newClass.name,
      department: newClass.department,
      description: newClass.description,
      room: newClass.room,
      student_count: newClass.student_count,
    };

    try {
      const res = await fetch("http://localhost:5000/class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(classPayload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Failed to create class:", errorData);
        alert("Unable to create class. Please try again.");
        return;
      }

      const data = await res.json();

      // Add the new class to local state
      const createdClass = {
        id: Date.now(),
        class_id: `cls_${Date.now()}`,
        ...classPayload,
        schedule: "",
        assignments: 0,
        resources: 0,
        recordings: [],
        status: "active",
      };

      setClasses((prev) => [...prev, createdClass]);
      alert("Class created successfully");

      // Reset form
      setNewClass({
        name: "",
        department: "",
        description: "",
        schedule: "",
        room: "",
        student_count: 0,
      });

      setShowCreateModal(false);
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your server.");
    }
  };

  const deleteClass = (classId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this class? This action cannot be undone."
      )
    ) {
      setClasses((prev) => prev.filter((cls) => cls.id !== classId));
    }
  };

  const getUpcomingSession = (classItem) => {
    if (!classItem.schedule) return null;

    try {
      const [datePart, timePart] = classItem.schedule.split(" at ");
      if (!datePart || !timePart) return null;

      const [year, month, day] = datePart.split("-");
      const [hours, minutes] = timePart.split(":");

      const sessionTime = new Date(year, month - 1, day, hours, minutes);
      const now = new Date();

      return sessionTime > now ? sessionTime : null;
    } catch (error) {
      console.error("Error parsing session time:", error);
      return null;
    }
  };

  const formatTimeUntil = (date) => {
    const now = new Date();
    const diff = date - now;

    if (diff < 0) return "Past due";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) return `in ${days}d ${hours}h`;
    if (hours > 0) return `in ${hours}h ${minutes}m`;
    if (minutes > 0) return `in ${minutes}m`;
    return "Now";
  };

  const getClassStats = (classItem) => {
    const recordings = getClassRecordings(classItem);
    return {
      totalRecordings: recordings.length,
      totalViews: recordings.reduce(
        (sum, recording) => sum + (recording.views || 0),
        0
      ),
      hasRecordings: recordings.length > 0,
    };
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
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
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Class Management
          </h2>
          <p className="text-gray-600">
            Manage {filteredClasses.length} classes, schedule sessions, and
            conduct live streams
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
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

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Class
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-4 mb-3 sm:mb-0">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="course_code">Name</option>
            <option value="student_count">Students</option>
            <option value="schedule">Schedule</option>
          </select>
        </div>

        <div className="text-sm text-gray-600">
          {filteredClasses.length} of {classes.length} classes
        </div>
      </div>

      {/* Classes Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => {
            const upcomingSession = getUpcomingSession(classItem);
            const stats = getClassStats(classItem);
            const recordings = getClassRecordings(classItem);

            return (
              <div
                key={classItem.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group bg-white"
              >
                {/* Class Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                      {classItem.course_code}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {classItem.department}
                    </p>
                  </div>
                  <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => startEditing(classItem)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Edit Class"
                    >
                      <Edit className="w-4 h-4 text-blue-600" />
                    </button>
                    <button
                      onClick={() => deleteClass(classItem.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="Delete Class"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Class Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {classItem.student_count} students
                  </div>

                  {/* Editable Schedule */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <ScheduleDatePicker
                      classItem={classItem}
                      onScheduleUpdate={updateClassSchedule}
                    />
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {classItem.room || "No room assigned"}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    {classItem.assignments || 0} assignments
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {classItem.resources || 0} resources
                  </span>
                  <span className="flex items-center">
                    <Video className="w-3 h-3 mr-1" />
                    {stats.totalRecordings} recordings
                  </span>
                </div>

                {/* Recordings Preview */}
                {recordings.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Recent Recordings
                    </h4>
                    <div className="space-y-1">
                      {recordings.slice(0, 2).map((recording) => (
                        <div
                          key={recording.id}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-gray-600 truncate flex-1 mr-2">
                            {recording.title}
                          </span>
                          <span className="text-gray-500 whitespace-nowrap">
                            {recording.views || 0} views
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Recordings Message */}
                {recordings.length === 0 && (
                  <div className="mb-4 p-2 bg-gray-50 rounded text-xs text-gray-500 text-center">
                    No recordings yet
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => startStream(classItem)}
                    className="flex-1 bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Video className="w-4 h-4 mr-1" />
                    Go Live
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-600 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-1" />
                    Manage
                  </button>
                </div>

                {/* Upcoming Session */}
                {upcomingSession && (
                  <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700 flex items-center">
                    <Bell className="w-3 h-3 mr-1" />
                    Next session: {formatTimeUntil(upcomingSession)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recordings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClasses.map((classItem) => {
                const stats = getClassStats(classItem);
                return (
                  <tr
                    key={classItem.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          {classItem.course_code}
                        </div>
                        <div className="text-sm text-gray-500">
                          {classItem.department}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {classItem.student_count} students
                    </td>
                    <td className="px-6 py-4">
                      <ScheduleDatePicker
                        classItem={classItem}
                        onScheduleUpdate={updateClassSchedule}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {stats.totalRecordings} recordings
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEditing(classItem)}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          title="Edit Class"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => startStream(classItem)}
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                          title="Start Live Stream"
                        >
                          <Video className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteClass(classItem.id)}
                          className="text-red-600 hover:text-red-800 transition-colors duration-200"
                          title="Delete Class"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Video className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No classes found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchQuery
              ? "Try adjusting your search criteria"
              : "Get started by creating your first class"}
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Create Class
          </button>
        </div>
      )}

      {/* Create Class Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Create New Class</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateClass}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClass.name}
                    onChange={(e) =>
                      setNewClass({ ...newClass, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Mathematics 101"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClass.department}
                    onChange={(e) =>
                      setNewClass({ ...newClass, department: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Health Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room/Location
                  </label>
                  <input
                    type="text"
                    value={newClass.room}
                    onChange={(e) =>
                      setNewClass({ ...newClass, room: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Room 101, Building A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student Count
                  </label>
                  <input
                    type="number"
                    value={newClass.student_count}
                    onChange={(e) =>
                      setNewClass({
                        ...newClass,
                        student_count: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newClass.description}
                    onChange={(e) =>
                      setNewClass({ ...newClass, description: e.target.value })
                    }
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Optional class description..."
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Class Modal */}
      {editingClass && (
        <EditClassModal
          classItem={editingClass}
          onClose={() => setEditingClass(null)}
          onSave={updateClassDetails}
        />
      )}

      {/* Streaming Modal */}
      {showStreamModal && selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Stream Header */}
            <div className="flex justify-between items-center p-4 bg-gray-800">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Live: {selectedClass.course_code}
                </h3>
                <p className="text-gray-400 text-sm">
                  {isLive ? "Streaming live now" : "Ready to start streaming"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {isLive && (
                  <div className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    LIVE
                  </div>
                )}
                <button
                  onClick={() => {
                    stopRecording();
                    setShowStreamModal(false);
                    setSelectedClass(null);
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded"
                  title="End Stream"
                >
                  <PhoneOff className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Area */}
            <div className="relative bg-black aspect-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {!streamRef.current && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <CameraOff className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p>Initializing camera...</p>
                  </div>
                </div>
              )}

              {/* Stream Controls Overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-gray-800 bg-opacity-75 rounded-lg p-3">
                <button
                  onClick={toggleVideo}
                  className={`p-3 rounded-full transition-colors ${
                    streamSettings.video
                      ? "bg-gray-600 text-white hover:bg-gray-500"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                  title={
                    streamSettings.video ? "Turn off camera" : "Turn on camera"
                  }
                >
                  {streamSettings.video ? (
                    <Camera className="w-5 h-5" />
                  ) : (
                    <CameraOff className="w-5 h-5" />
                  )}
                </button>

                <button
                  onClick={toggleAudio}
                  className={`p-3 rounded-full transition-colors ${
                    streamSettings.audio
                      ? "bg-gray-600 text-white hover:bg-gray-500"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                  title={
                    streamSettings.audio
                      ? "Mute microphone"
                      : "Unmute microphone"
                  }
                >
                  {streamSettings.audio ? (
                    <Mic className="w-5 h-5" />
                  ) : (
                    <MicOff className="w-5 h-5" />
                  )}
                </button>

                {!isLive ? (
                  <button
                    onClick={startRecording}
                    className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors flex items-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Stream
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Stop Stream
                  </button>
                )}
              </div>

              {/* Recording Indicator */}
              {streamSettings.recording && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Recording
                </div>
              )}
            </div>

            {/* Stream Info & Actions */}
            <div className="p-4 bg-gray-800">
              <div className="flex justify-between items-center">
                <div className="text-white">
                  <p className="text-sm text-gray-400">
                    Stream started: {new Date().toLocaleTimeString()}
                  </p>
                </div>

                <div className="flex space-x-2">
                  {recordedChunks.length > 0 && (
                    <button
                      onClick={downloadRecording}
                      className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Recording
                    </button>
                  )}

                  <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassesSection;
