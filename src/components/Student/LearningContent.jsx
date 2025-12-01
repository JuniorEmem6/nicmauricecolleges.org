// components/LearningContent.jsx
import React from 'react';
import { 
  FaPlay, 
  FaBook, 
  FaVideo, 
  FaFileAlt, 
  FaStar,
  FaClock,
  FaUserCircle,
  FaBookmark,
  FaShare
} from 'react-icons/fa';

const LearningContent = ({ searchQuery }) => {
  const learningContent = [
    {
      id: 1,
      title: 'Advanced Calculus: Limits & Continuity',
      type: 'video',
      duration: '45 min',
      teacher: 'Prof. Michael Chen',
      subject: 'Mathematics',
      rating: 4.8,
      enrolled: true,
      progress: 75,
      thumbnail: '📊',
      isNew: false
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      type: 'interactive',
      duration: '2 hours',
      teacher: 'Dr. Sarah Johnson',
      subject: 'Computer Science',
      rating: 4.9,
      enrolled: true,
      progress: 30,
      thumbnail: '🤖',
      isNew: true
    },
    {
      id: 3,
      title: 'Quantum Physics Basics',
      type: 'nano-course',
      duration: '1.5 hours',
      teacher: 'Dr. Emily Watson',
      subject: 'Physics',
      rating: 4.7,
      enrolled: false,
      progress: 0,
      thumbnail: '⚛️',
      isNew: true
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      type: 'project',
      duration: '4 hours',
      teacher: 'Mike Rodriguez',
      subject: 'Programming',
      rating: 4.8,
      enrolled: false,
      progress: 0,
      thumbnail: '💻',
      isNew: false
    }
  ];

  const filteredContent = learningContent.filter(content =>
    content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    content.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    content.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return FaVideo;
      case 'interactive': return FaPlay;
      case 'nano-course': return FaBook;
      case 'project': return FaFileAlt;
      default: return FaBook;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-700';
      case 'interactive': return 'bg-purple-100 text-purple-700';
      case 'nano-course': return 'bg-green-100 text-green-700';
      case 'project': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Learning Content</h2>
          <p className="text-gray-600">Explore courses, videos, and interactive lessons</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
            Browse All
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredContent.map(content => {
          const TypeIcon = getTypeIcon(content.type);
          
          return (
            <div key={content.id} className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 hover:shadow-md transition-all duration-200 group">
              {/* Content Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{content.thumbnail}</div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(content.type)} flex items-center space-x-1`}>
                    <TypeIcon className="text-xs" />
                    <span className="capitalize">{content.type}</span>
                  </span>
                  {content.isNew && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Content Info */}
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                {content.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{content.teacher}</p>

              {/* Rating and Duration */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-yellow-400" />
                  <span>{content.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaClock />
                  <span>{content.duration}</span>
                </div>
              </div>

              {/* Progress or Enroll Button */}
              {content.enrolled ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress</span>
                    <span>{content.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${content.progress}%` }}
                    ></div>
                  </div>
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                    <FaPlay className="text-xs" />
                    <span>{content.progress === 0 ? 'Start Learning' : 'Continue'}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm">
                    Enroll Now
                  </button>
                  <div className="flex justify-center space-x-4 text-gray-400">
                    <button className="hover:text-indigo-600 transition-colors" title="Bookmark">
                      <FaBookmark />
                    </button>
                    <button className="hover:text-indigo-600 transition-colors" title="Share">
                      <FaShare />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200/60">
          <FaBook className="text-4xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Content Found</h3>
          <p className="text-gray-600">Try adjusting your search terms or explore recommended content</p>
        </div>
      )}
    </div>
  );
};

export default LearningContent;