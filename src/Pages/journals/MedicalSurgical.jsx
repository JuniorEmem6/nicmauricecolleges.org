import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from 'react';
import { Link } from "react-router-dom";

const MedicalSurgicalNursingJournal = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header with Surgical Nursing Image */}
      <header className="relative bg-teal-900 text-white rounded-xl shadow-lg mb-8 overflow-hidden">        
        <div className="relative z-10 p-8">
          <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-teal-400 pb-4">
            INTERNATIONAL SPECIALTY JOURNAL OF MEDICAL AND SURGICAL NURSING RESEARCH
          </h1>
          <p className="mt-4 text-xl text-teal-200">Advancing Evidence-Based Practice in Medical-Surgical Nursing</p>
        </div>
      </header>

      {/* Profile Summary */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-teal-900 border-l-4 border-teal-500 pl-4 mb-6">Profile Summary</h2>
        <p className="text-gray-700 mb-4">
          The International Specialty Journal of Medical and Surgical Nursing Research is a peer-reviewed academic journal dedicated to advancing the field of nursing through innovative research and evidence-based practice. Our mission is to provide a platform for nursing professionals, researchers, and educators to share original research, systematic reviews, and clinical guidelines that focus on medical and surgical nursing.
        </p>
      </section>

      {/* Key Features */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-teal-900 border-l-4 border-teal-500 pl-4 mb-6">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Cards */}
          {[
            {
              title: "Focus Areas",
              content: "Perioperative care, postoperative management, patient safety, pain management, surgical innovations, and nursing interventions in medical-surgical settings.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              )
            },
            {
              title: "Peer Review Process",
              content: "Rigorous peer-review by experts to ensure research quality and relevance to contemporary nursing practices.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Open Access",
              content: "Freely accessible research findings for practitioners, educators, and students worldwide.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              )
            },
            {
              title: "Interdisciplinary Collaboration",
              content: "Encourages teamwork between nursing and other healthcare professions for holistic patient care.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "Continuing Education",
              content: "Interactive case studies and clinical scenarios for practical application of research findings.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            {
              title: "Global Perspective",
              content: "Research from diverse cultural and geographic backgrounds on medical-surgical nursing practices.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div key={index} className="bg-teal-50 p-5 rounded-lg border border-teal-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-3">
                <div className="bg-teal-100 p-2 rounded-full mr-3 text-teal-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-teal-800">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="bg-teal-50 rounded-xl p-6 mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl font-bold text-teal-900 mb-4">Submission Guidelines</h2>
        <p className="text-gray-700 mb-4">
          Authors are invited to submit original research articles, reviews, case studies, and clinical reports that contribute to the scientific understanding of medical and surgical nursing. Our journal welcomes:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          {[
            "Original research articles",
            "Systematic reviews",
            "Clinical case studies",
            "Evidence-based practice reports",
            "Innovative care model descriptions",
            "Quality improvement projects"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-teal-500 text-white rounded-full p-1 mr-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 font-medium">
          Detailed submission guidelines and author instructions can be found on our website.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-teal-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 text-lg">
            The International Specialty Journal of Medical and Surgical Nursing Research is committed to enhancing nursing knowledge and practice, ultimately improving care for patients across the globe. We invite you to explore our latest issues, engage with our research community, and contribute to the advancement of nursing science.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-teal-900 text-white rounded-xl p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Join Our Medical-Surgical Nursing Research Community</h3>
        <p className="mb-6 text-teal-100">Contribute to advancing evidence-based practice in medical and surgical nursing</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
         <Link to="/publish">
         <p className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-medium text-white transition duration-200">
            Submit Your Research
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </p>
         </Link>
          <Link to="/articles">
          <p className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white hover:bg-teal-800 rounded-lg font-medium text-white transition duration-200">
            Browse Articles
          </p>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MedicalSurgicalNursingJournal;