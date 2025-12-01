import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AcademyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const NicmauriceLogo = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logoGradient)" />
      <path
        d="M8 12 L16 8 L24 12 L24 20 L16 24 L8 20 Z"
        fill="white"
        opacity="0.95"
      />
      <circle cx="16" cy="16" r="2" fill="white" opacity="0.8" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-4 sm:px-6 py-6 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <NicmauriceLogo />
            <div>
              <div className="text-xl font-bold text-gray-900">Nicmaurice</div>
              <div className="text-xs text-gray-500 -mt-1">Academy</div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {["Features", "Testimonials", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Link to="/login">
              <button className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium hidden sm:block">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-32">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
            Trusted by 50,000+ educators
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Learn without
            <span className="block text-blue-600 mt-2">limits</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Modern learning platform designed for educators and students who
            want to achieve more with less complexity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-all duration-200 w-full sm:w-auto">
              Watch Demo
            </button>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md mx-auto">
            {[
              { number: "50K+", label: "Teachers" },
              { number: "1M+", label: "Students" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Simple, powerful tools that work the way you do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Live Classes",
                description:
                  "Interactive video sessions with real-time collaboration and engagement tools.",
              },
              {
                icon: "📊",
                title: "Smart Analytics",
                description:
                  "Track student progress and engagement with clear, actionable insights.",
              },
              {
                icon: "🔒",
                title: "Secure Platform",
                description:
                  "Enterprise-grade security ensuring your data and sessions are always protected.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
              Trusted by educators at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Stanford", "MIT", "Harvard", "Google", "Microsoft"].map(
                (company) => (
                  <div
                    key={company}
                    className="text-gray-400 font-medium text-sm"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Educators
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "University Professor",
                content:
                  "Nicmaurice Academy transformed how I engage with students online.",
                rating: 5,
              },
              {
                name: "Marcus Johnson",
                role: "High School Teacher",
                content:
                  "The intuitive interface makes virtual teaching effortless and effective.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your classroom?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of educators who are already creating exceptional
            learning experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>

          <p className="text-blue-200 text-sm mt-6">
            No credit card required • 30-day free trial • Setup in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <NicmauriceLogo />
            <div className="text-white font-medium">Nicmaurice Academy</div>
          </div>
          <p className="text-sm">
            Transforming education through technology • © 2024 Nicmaurice
            Academy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AcademyPage;
