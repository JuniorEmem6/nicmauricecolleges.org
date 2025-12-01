// components/SocialLearning.jsx
import React, { useState, useRef } from 'react';
import { 
  FaUsers, 
  FaComments, 
  FaUserPlus, 
  FaSearch,
  FaVideo,
  FaBook,
  FaStar,
  FaCalendar,
  FaHeart,
  FaShare,
  FaComment,
  FaEllipsisH,
  FaTimes,
  FaFilter,
  FaPaperPlane
} from 'react-icons/fa';

const SocialLearning = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [postContent, setPostContent] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [joinedGroups, setJoinedGroups] = useState(new Set());
  const [connectedPeers, setConnectedPeers] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newGroupData, setNewGroupData] = useState({
    name: '',
    subject: '',
    description: ''
  });
  const fileInputRef = useRef(null);

  // Enhanced study groups with more data
  const [studyGroups, setStudyGroups] = useState([
    {
      id: 1,
      name: 'Advanced Calculus Study Circle',
      members: 12,
      activeNow: 5,
      subject: 'Mathematics',
      nextMeeting: new Date(Date.now() + 24 * 60 * 60 * 1000),
      description: 'Weekly problem-solving sessions and concept discussions',
      isPublic: true,
      tags: ['Calculus', 'Math', 'Study']
    },
    {
      id: 2,
      name: 'Machine Learning Enthusiasts',
      members: 24,
      activeNow: 8,
      subject: 'Computer Science',
      nextMeeting: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      description: 'Project collaborations and algorithm deep dives',
      isPublic: true,
      tags: ['AI', 'Python', 'Projects']
    },
    {
      id: 3,
      name: 'Physics Study Group',
      members: 8,
      activeNow: 2,
      subject: 'Physics',
      nextMeeting: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      description: 'Concept clarification and experiment discussions',
      isPublic: false,
      tags: ['Quantum', 'Experiments', 'Theory']
    }
  ]);

  // Enhanced social feed with interactions
  const [socialFeed, setSocialFeed] = useState([
    {
      id: 1,
      user: {
        name: 'Prof. Michael Chen',
        username: '@prof_mchen',
        avatar: '👨‍🏫',
        isTeacher: true
      },
      content: 'Just published new study materials for our upcoming calculus exam. Includes practice problems and step-by-step solutions!',
      type: 'content',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      likes: 24,
      comments: 8,
      shares: 3,
      subject: 'Mathematics',
      attachments: [
        { type: 'pdf', name: 'Calculus_Problems.pdf', size: '2.4 MB' }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Sarah Johnson',
        username: '@sarah_j',
        avatar: '👩‍🎓',
        isTeacher: false
      },
      content: 'Looking for study partners for the machine learning project. Anyone interested in collaborating?',
      type: 'collaboration',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      likes: 12,
      comments: 5,
      shares: 1,
      subject: 'Computer Science',
      poll: {
        question: 'Which ML algorithm should we focus on?',
        options: ['Neural Networks', 'Decision Trees', 'SVMs', 'Clustering'],
        votes: [8, 3, 2, 1]
      }
    },
    {
      id: 3,
      user: {
        name: 'Dr. Emily Watson',
        username: '@dr_ewatson',
        avatar: '👩‍🔬',
        isTeacher: true
      },
      content: 'Live Q&A session tomorrow at 3 PM about quantum mechanics concepts. Bring your questions!',
      type: 'live',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      likes: 31,
      comments: 15,
      shares: 6,
      subject: 'Physics',
      liveLink: 'https://meet.example.com/quantum-qa'
    }
  ]);

  const peers = [
    {
      id: 1,
      name: 'Alex Chen',
      username: '@alex_c',
      avatar: '👦',
      subjects: ['Mathematics', 'Physics'],
      mutualClasses: 3,
      isOnline: true,
      lastActive: '2 min ago'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      username: '@maria_r',
      avatar: '👧',
      subjects: ['Computer Science', 'Mathematics'],
      mutualClasses: 2,
      isOnline: false,
      lastActive: '1 hour ago'
    },
    {
      id: 3,
      name: 'James Wilson',
      username: '@james_w',
      avatar: '👨',
      subjects: ['Physics', 'Chemistry'],
      mutualClasses: 1,
      isOnline: true,
      lastActive: 'Just now'
    }
  ];

  // Enhanced functionality
  const handleLikePost = (postId) => {
    setSocialFeed(prev => prev.map(post => {
      if (post.id === postId) {
        const wasLiked = likedPosts.has(postId);
        return {
          ...post,
          likes: wasLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));

    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleJoinGroup = (groupId) => {
    setJoinedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
        setStudyGroups(prevGroups => 
          prevGroups.map(group => 
            group.id === groupId 
              ? { ...group, members: group.members - 1 }
              : group
          )
        );
      } else {
        newSet.add(groupId);
        setStudyGroups(prevGroups => 
          prevGroups.map(group => 
            group.id === groupId 
              ? { ...group, members: group.members + 1 }
              : group
          )
        );
      }
      return newSet;
    });
  };

  const handleConnectPeer = (peerId) => {
    setConnectedPeers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(peerId)) {
        newSet.delete(peerId);
      } else {
        newSet.add(peerId);
      }
      return newSet;
    });
  };

  const handleCreatePost = () => {
    if (!postContent.trim()) return;

    const newPost = {
      id: socialFeed.length + 1,
      user: {
        name: 'You',
        username: '@student',
        avatar: '🎓',
        isTeacher: false
      },
      content: postContent,
      type: 'post',
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
      subject: 'General'
    };

    setSocialFeed(prev => [newPost, ...prev]);
    setPostContent('');
  };

  const handleCreateGroup = () => {
    if (!newGroupData.name.trim() || !newGroupData.subject.trim()) return;

    const newGroup = {
      id: studyGroups.length + 1,
      ...newGroupData,
      members: 1,
      activeNow: 1,
      nextMeeting: new Date(Date.now() + 24 * 60 * 60 * 1000),
      isPublic: true,
      tags: []
    };

    setStudyGroups(prev => [...prev, newGroup]);
    setNewGroupData({ name: '', subject: '', description: '' });
    setShowCreateGroup(false);
    setJoinedGroups(prev => new Set(prev).add(newGroup.id));
  };

  // Filter functions
  const filteredGroups = studyGroups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPeers = peers.filter(peer =>
    peer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    peer.subjects.some(subject => 
      subject.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredFeed = socialFeed.filter(post =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation variants for framer-motion (if you install it)
  const tabVariants = {
    active: { 
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 }
    },
    inactive: { 
      scale: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="animate-slide-in-left">
          <h2 className="text-2xl font-bold text-gray-900">Social Learning</h2>
          <p className="text-gray-600">Connect, collaborate, and learn together</p>
        </div>
        <div className="flex space-x-3 animate-slide-in-right">
          <button 
            onClick={() => setShowCreateGroup(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-sm"
          >
            Create Group
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
        {[
          { id: 'feed', label: 'Learning Feed', icon: FaComments },
          { id: 'groups', label: 'Study Groups', icon: FaUsers },
          { id: 'peers', label: 'Peers', icon: FaUserPlus }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl text-center transition-all font-medium text-sm flex items-center justify-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-sm transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200/50'
              }`}
            >
              <IconComponent className="text-sm" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-4 animate-fade-in">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes />
              </button>
            )}
          </div>
          <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2">
            <FaFilter />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'feed' && (
        <div className="space-y-4 animate-fade-in">
          {/* Create Post */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                Y
              </div>
              <div className="flex-1">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Share your learning progress or ask a question..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none transition-all duration-200"
                  rows="3"
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
                    >
                      <FaBook />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50">
                      <FaVideo />
                    </button>
                  </div>
                  <button
                    onClick={handleCreatePost}
                    disabled={!postContent.trim()}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                      postContent.trim()
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <FaPaperPlane />
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" />
          </div>

          {/* Social Feed */}
          {filteredFeed.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 hover:shadow-md transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{post.user.avatar}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                      {post.user.isTeacher && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          Teacher
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {post.user.username} • {post.timestamp.toLocaleDateString()} at {post.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100">
                  <FaEllipsisH />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

              {/* Attachments */}
              {post.attachments && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <FaBook className="text-red-500" />
                    <div>
                      <p className="font-medium text-sm">{post.attachments[0].name}</p>
                      <p className="text-xs text-gray-500">{post.attachments[0].size}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Poll */}
              {post.poll && (
                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-900 mb-3">{post.poll.question}</h5>
                  <div className="space-y-2">
                    {post.poll.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-1 bg-white rounded-lg p-2 text-sm border border-blue-200 hover:border-blue-400 transition-colors cursor-pointer">
                          {option}
                        </div>
                        <span className="text-xs text-blue-700 font-semibold">
                          {post.poll.votes[index]} votes
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Session */}
              {post.liveLink && (
                <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FaVideo className="text-purple-600" />
                      <span className="font-semibold text-purple-900">Live Session</span>
                    </div>
                    <a href={post.liveLink} className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                      Join Now
                    </a>
                  </div>
                </div>
              )}

              {/* Post Type Badge */}
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  post.type === 'content' ? 'bg-green-100 text-green-700' :
                  post.type === 'collaboration' ? 'bg-blue-100 text-blue-700' :
                  post.type === 'live' ? 'bg-purple-100 text-purple-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {post.type}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                  {post.subject}
                </span>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleLikePost(post.id)}
                    className={`flex items-center space-x-1 transition-all duration-200 ${
                      likedPosts.has(post.id) 
                        ? 'text-red-600 transform scale-110' 
                        : 'hover:text-red-600'
                    }`}
                  >
                    <FaHeart className={likedPosts.has(post.id) ? 'fill-current' : ''} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                    <FaComment />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                    <FaShare />
                    <span>{post.shares}</span>
                  </button>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
                  Engage
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredGroups.map((group, index) => (
            <div 
              key={group.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 hover:shadow-md transition-all duration-200 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {group.name}
                </h3>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold flex-shrink-0 ml-2">
                  {group.subject}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{group.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {group.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Members</span>
                  <span className="font-semibold">{group.members}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Active Now</span>
                  <span className="font-semibold text-green-600">{group.activeNow}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Next Meeting</span>
                  <span className="font-semibold">{group.nextMeeting.toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={() => handleJoinGroup(group.id)}
                  className={`flex-1 py-2 rounded-lg font-semibold transition-all duration-200 text-sm ${
                    joinedGroups.has(group.id)
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105'
                  }`}
                >
                  {joinedGroups.has(group.id) ? 'Joined ✓' : 'Join Group'}
                </button>
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50">
                  <FaUserPlus />
                </button>
              </div>
            </div>
          ))}

          {/* Create New Group Card */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center group hover:border-indigo-300 transition-all duration-200 cursor-pointer animate-fade-in-up hover:shadow-md"
            onClick={() => setShowCreateGroup(true)}
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors group-hover:scale-110">
              <FaUsers className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Create Study Group</h3>
            <p className="text-sm text-gray-600 mb-4">Start your own learning community</p>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
              Create Group
            </button>
          </div>
        </div>
      )}

      {activeTab === 'peers' && (
        <div className="space-y-6 animate-fade-in">
          {/* Peers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPeers.map((peer, index) => (
              <div 
                key={peer.id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 hover:shadow-md transition-all duration-200 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="text-2xl">{peer.avatar}</div>
                      {peer.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {peer.name}
                      </h3>
                      <p className="text-sm text-gray-500">{peer.username}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {peer.subjects.map((subject, index) => (
                      <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{peer.mutualClasses} mutual classes</span>
                  <span className={peer.isOnline ? 'text-green-600 font-semibold' : 'text-gray-500'}>
                    {peer.isOnline ? 'Online' : `Last seen ${peer.lastActive}`}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 text-sm">
                    Message
                  </button>
                  <button 
                    onClick={() => handleConnectPeer(peer.id)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      connectedPeers.has(peer.id)
                        ? 'bg-green-100 text-green-600 hover:bg-green-200'
                        : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <FaUserPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Group Modal */}
      {showCreateGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Create Study Group</h3>
              <button 
                onClick={() => setShowCreateGroup(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Group Name
                </label>
                <input
                  type="text"
                  value={newGroupData.name}
                  onChange={(e) => setNewGroupData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter group name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={newGroupData.subject}
                  onChange={(e) => setNewGroupData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newGroupData.description}
                  onChange={(e) => setNewGroupData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                  rows="3"
                  placeholder="Describe your study group"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCreateGroup(false)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={!newGroupData.name.trim() || !newGroupData.subject.trim()}
                className={`flex-1 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
                  newGroupData.name.trim() && newGroupData.subject.trim()
                    ? 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLearning;