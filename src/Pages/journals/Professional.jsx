import React from "react";
import Professional from "../../assets/journal/professional.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const ProfessionalJournal = () => {
  return (
    <>
      <Header />

      <div className="mt-[100px] px-6 lg:px-[100px]">
        <div>
          <h1 className="text-[20px] lg:text-[28px] font-bold underline leading-tight">
            INTERNATIONAL PROFESSIONAL NURSING JOURNAL
          </h1>
          <p className="text-gray-600 lg:text-[18px] text-[14px] mt-2 font-mono italic">
            A global platform for nursing excellence
          </p>
        </div>

        <div className="mt-10">
          <img
            src={Professional}
            alt="International Professional Nursing Journal"
            className="w-full max-w-5xl h-auto rounded-md shadow-md"
          />
        </div>

        <div className="mt-10 text-[16px] lg:text-[18px] font-mono text-gray-800 space-y-6 max-w-5xl">
          <p>
            The <strong>International Professional Nursing Journal (IPNJ)</strong> has been a beacon of nursing knowledge and
            innovation for over two decades. Since 1999, it has delivered high-quality, evidence-based content that informs,
            inspires, and empowers nurses across specialties and career stages.
          </p>

          <h3 className="font-semibold italic text-lg">* A Legacy of Global Leadership:</h3>
          <p>
            <strong className="italic">* Unwavering Commitment to Quality:</strong> IPNJ upholds high standards of academic
            rigor, with every article undergoing meticulous peer review by an international editorial board.
          </p>

          <p>
            <strong className="italic">* Comprehensive Scope:</strong> IPNJ embraces the multifaceted nature of nursing—
            covering clinical practice, research, education, leadership, policy, and ethics—ensuring relevance across
            specialties.
          </p>

          <p>
            <strong className="italic">* Global Reach and Impact:</strong> IPNJ connects nurses worldwide, fostering a
            community of practice and expanding its influence on global healthcare improvement.
          </p>

          <h3 className="font-semibold italic text-lg">* A Catalyst for Innovation and Advancement:</h3>
          <p>
            <strong className="italic">* Embracing New Frontiers:</strong> IPNJ seeks and promotes innovation in nursing
            research, practice, and education, staying ahead in the profession and shaping the future of healthcare.
          </p>

          <p>
            <strong className="italic">* Bridging the Gap Between Theory and Practice:</strong> IPNJ translates research into
            practical insights that nurses can apply in their daily work to improve patient care and outcomes.
          </p>

          <p>
            <strong className="italic">* Fostering Dialogue and Collaboration:</strong> IPNJ is a platform for collaboration
            among nurses, educators, researchers, and policymakers—driving innovation and addressing healthcare challenges.
          </p>

          <p>
            <strong className="italic">* International Professional Nursing Journal:</strong> More than a publication—it's a
            global community united by a passion for nursing excellence and a vision for a healthier future.
          </p>
        </div>

        <div className="mt-10 mb-12">
          <Link to="/articles">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-200 transition duration-300"
            >
              See Articles
              <MdKeyboardArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfessionalJournal;
