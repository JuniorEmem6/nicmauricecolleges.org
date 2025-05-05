import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClinicalNursing from "../../assets/journal/ijacn.jpg";
import { Link } from "react-router-dom";

const ClinicalNursingJournal = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <header className="relative bg-blue-900 text-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="relative z-10 p-8">
            <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-400 pb-4">
              INTERNATIONAL SPECIALTY JOURNAL OF ADVANCED CLINICAL NURSING
              RESEARCH
            </h1>
            <p className="mt-4 text-xl text-blue-200">A Robust Profile</p>
          </div>
        </header>

        {/* <div className="absolute inset-0 z-0">
          <img
            src={ClinicalNursing}
            alt="Nursing Professionals at Work"
            className="sm:h-80 object-cover ml-[400px]"
          />
        </div> */}

        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 mb-4">
            The International Specialty Journal of Advanced Clinical Nursing
            Research (ISJACNR) stands as a beacon of excellence in the field of
            nursing scholarship. Dedicated to publishing cutting-edge, original
            research that advances clinical nursing practice, ISJACNR serves as
            a vital platform for disseminating knowledge and fostering
            innovation within the global nursing community.
          </p>
        </section>

        {/* Scope and Focus */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4 mb-6">
            Scope and Focus
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Clinical Practice",
                content:
                  "Research that explores innovative interventions, best practices, and evidence-based care strategies across diverse clinical settings including studies examining new treatments, care models, and tools to enhance patient outcomes.",
              },
              {
                title: "Nursing Education",
                content:
                  "Research on advancements in nursing education, curriculum development, faculty research, and the impact of educational interventions including simulation-based learning and virtual reality teaching methods.",
              },
              {
                title: "Nursing Leadership",
                content:
                  "Research on leadership theories, strategies, and challenges faced by nurses in various roles, including leadership styles' impact on team performance and promoting equity in healthcare systems.",
              },
              {
                title: "Health Policy",
                content:
                  "Research analyzing health policy impact on nursing workforce, access to care, and healthcare delivery including telehealth policies, chronic disease management, and sustainable healthcare systems.",
              },
              {
                title: "Technology in Nursing",
                content:
                  "Research on technology integration in clinical practice including telehealth, EHRs, AI applications, and the ethical implications of technology in patient care.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4 mb-6">
            Target Audience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Advanced Practice Nurses: Nurse practitioners and clinical specialists",
              "Nursing Researchers: Faculty and students advancing nursing science",
              "Healthcare Professionals: Physicians and pharmacists collaborating with nurses",
              "Policymakers: Individuals shaping health policy impacting nursing",
              "Patients and Consumers: Those engaged in patient-centered care research",
            ].map((audience, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-blue-50 rounded-lg"
              >
                <span className="bg-blue-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{audience}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4 mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Rigorous Peer Review: Expert-led double-blind review process",
              "Open Access: Freely available global research dissemination",
              "High Impact Factor: Widely cited influential publications",
              "International Scope: Global research perspectives",
              "Innovative Formats: Multimedia and interactive content",
              "Future Trends: VR, AI, and wearable tech in nursing",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-gray-50 rounded-lg border border-blue-100"
              >
                <span className="bg-blue-500 text-white rounded-full p-1 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Benefits of Publishing in ISJACNR
          </h2>
          <ul className="space-y-4">
            {[
              "Increased Visibility: Reach a global audience of nursing professionals",
              "Enhanced Credibility: Peer-reviewed validation of your research",
              "Networking Opportunities: Connect with international colleagues",
              "Career Advancement: Demonstrate your research leadership",
              "Practice Impact: Directly influence clinical nursing improvements",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full p-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4 mb-6">
            Conclusion
          </h2>
          <p className="text-gray-700">
            The International Specialty Journal of Advanced Clinical Nursing
            Research stands as a leading platform for disseminating cutting-edge
            research that advances clinical nursing practice. Its rigorous peer
            review process, open access policy, high impact factor,
            international scope, commitment to innovation, and focus on future
            trends make it a valuable resource for researchers, clinicians,
            policymakers, and patients seeking to improve patient care and shape
            the future of nursing.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Submit Your Nursing Research?
          </h3>
          <p className="mb-6 text-blue-100">
            Join our community of nursing scholars advancing clinical practice
            worldwide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#submit"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-white transition duration-200"
            >
              Submit Your Manuscript
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <Link to="/publish">
              <p className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white hover:bg-blue-800 rounded-lg font-medium text-white transition duration-200">
                Contact Editorial Team
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClinicalNursingJournal;
