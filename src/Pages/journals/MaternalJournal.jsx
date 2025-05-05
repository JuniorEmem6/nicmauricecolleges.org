import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from 'react';
import { Link } from "react-router-dom"

const MaternalChildJournal = () => {
  return (
   <>
   <Header />
   <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          International Specialty Journal of Maternal and Child Health Nursing Research
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Overview</h2>
          <p className="text-gray-700">
            The <strong>International Specialty Journal of Maternal and Child Health Nursing Research</strong> is a
            peer-reviewed, scholarly journal dedicated to publishing high-quality research and innovative practices
            that focus on maternal and child health. The journal aims to disseminate evidence-based findings that
            enhance education, practice, and outcomes related to maternal, fetal, neonatal, childhood, and adolescent
            health.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Aims and Scope</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              To publish original research articles, systematic reviews, clinical studies, and case reports that
              contribute to the knowledge base of maternal and child health nursing.
            </li>
            <li>
              To highlight innovative practices and evidence-based interventions that address critical issues
              affecting maternal and child health outcomes.
            </li>
            <li>
              To foster interdisciplinary collaboration among healthcare professionals, educators, and policymakers
              in improving health systems and practices.
            </li>
            <li>
              To serve as a resource for nursing education by providing materials for undergraduate and graduate
              programs.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Types of Articles Accepted</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Original Research Articles</li>
            <li>Systematic Reviews and Meta-Analyses</li>
            <li>Qualitative Studies</li>
            <li>Case Reports</li>
            <li>Review Articles</li>
            <li>Practice Innovations</li>
            <li>Policy Analysis</li>
            <li>Commentary and Opinion Pieces</li>
            <li>Letters to the Editor</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Target Audience</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Maternal and child health nurses</li>
            <li>Healthcare practitioners</li>
            <li>Nurse educators</li>
            <li>Researchers in maternal and child health</li>
            <li>Public health professionals</li>
            <li>Policy makers</li>
            <li>Students in nursing and related fields</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Editorial Board</h2>
          <p className="text-gray-700">
            The journal is led by a distinguished editorial board comprised of experts in maternal and child health
            nursing, public health, pediatrics, and related disciplines. They ensure the integrity, quality, and
            relevance of all published content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Publication Frequency</h2>
          <p className="text-gray-700">
            The journal is published seamlessly with special issues that highlight specific themes or trends in
            maternal and child health.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Open Access Policy</h2>
          <p className="text-gray-700">
            This journal follows an open-access model, making all articles freely accessible to promote global
            dissemination of research findings that improve maternal and child health.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Submission Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Register and log in on the journal’s website.</li>
            <li>Submit the manuscript according to formatting guidelines.</li>
            <li>Undergo the peer review process.</li>
            <li>Revise and resubmit until final acceptance.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Ethical Standards</h2>
          <p className="text-gray-700">
            The journal upholds high ethical standards. Authors must adhere to research ethics, transparent reporting,
            and disclose any conflicts of interest.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Indexing and Abstracting</h2>
          <p className="text-gray-700">
            The journal is working toward indexing in major academic databases like PubMed, CINAHL, and Scopus to
            increase research visibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Conclusion</h2>
          <p className="text-gray-700">
            The <strong>International Specialty Journal of Maternal and Child Health Nursing Research</strong> is
            dedicated to advancing the field through impactful, peer-reviewed publications. We welcome contributions
            that inform, engage, and inspire practitioners and scholars to improve maternal and child health outcomes
            worldwide.
          </p>
        </section>
      </div>

       <div className="bg-teal-900 text-white rounded-xl p-8 text-center shadow-lg mt-[15px]">
              <h3 className="text-2xl font-bold mb-4">Join Our Maternal and Child Health Nursing Research Community</h3>
              <p className="mb-6 text-teal-100">Contribute to advancing evidence-based practice in maternal and child health nursing</p>
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

export default MaternalChildJournal;
