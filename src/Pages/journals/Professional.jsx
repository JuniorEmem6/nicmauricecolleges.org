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

      <div className="mt-[100px] ml-[30px] lg:ml-[100px]">
        <div>
          <h1 className="text-[20px] font-bold underline leading-[23px]">
            INTERNATIONAL PROFESSIONAL NURSING JOURNAL
          </h1>
          <p className="text-gray-600 lg:text-[20px] text-[13px] leading-[13px] mb-[20px] font-mono">
            <i>A global platform for nursing excellence</i>
          </p>
        </div>
        <div className="mt-[60px]">
          <img
            src={Professional}
            alt="professional nursing journal"
            className="w-[600px] lg:w-[900px] h-[300px] lg:h-[400px]"
          />
        </div>
        <div className="w-[300px] lg:w-[1000px] mt-[25px] text-[17px] font-mono">
          <p>
            International Professional Nursing Journal (IPNJ) has been a beacon
            of nursing knowledge and innovation for over two decades, serving as
            a vital resource for nurses worldwide. Since its inception in 1999,
            IPNJ has consistently delivered high-quality, evidence-based content
            that informs, inspires, and empowers nurses across all specialties
            and career stages.
          </p>
          <h3 className="font-semibold text-[15px] mt-[15px]">
            <i>*A Legacy of Global Leadership:</i>
          </h3>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i>*Unwavering Commitment to Quality:</i>
            </span>{" "}
            IPNJ upholds the highest standards of academic rigor, ensuring that
            every article published undergoes a meticulous peer review process
            conducted by a distinguished international editorial board. This
            commitment to quality has earned IPNJ a reputation for reliability
            and trustworthiness among nurses and healthcare professionals
            globally.
          </p>

          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> *Comprehensive Scope: IPNJ</i>
            </span>{" "}
            embraces the multifaceted nature of nursing, encompassing a wide
            range of topics, from clinical practice and research to education,
            leadership, policy, and ethics. This breadth of coverage ensures
            that the journal remains relevant and valuable to nurses across all
            specialties and career stages, fostering a holistic understanding of
            the nursing profession.
          </p>

          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> *Global Reach and Impact:</i>
            </span>{" "}
            IPNJ transcends geographical boundaries, connecting nurses from
            diverse backgrounds and fostering a global community of practice.
            The journal's international readership ensures that its insights and
            innovations reach a broad audience, contributing to the advancement
            of nursing knowledge and practice worldwide.
          </p>
          <h3 className="font-semibold text-[15px] mt-[15px]">
            <i>*A Catalyst for Innovation and Advancement:</i>
          </h3>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> *Embracing New Frontiers: </i>
            </span>{" "}
            IPNJ is not content with simply preserving the status quo. The
            journal actively seeks out and promotes innovative approaches to
            nursing practice, research, and education. This commitment to
            progress ensures that IPNJ remains at the forefront of the nursing
            profession, driving positive change and shaping the future of
            healthcare.
          </p>

          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> *Bridging the Gap Between Theory and Practice: </i>
            </span>{" "}
            IPNJ recognizes the importance of translating research findings into
            practical applications. The journal features articles that bridge
            the gap between theory and practice, providing nurses with
            actionable insights that can be readily implemented in their daily
            work, enhancing patient care and outcomes.
          </p>

          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> *Fostering Dialogue and Collaboration: </i>
            </span>{" "}
            IPNJ serves as a platform for dialogue and collaboration among
            nurses, researchers, educators, and policymakers. The journal
            encourages open discussion and debate on critical issues facing the
            nursing profession, fostering a spirit of innovation and collective
            action to address global healthcare challenges.
          </p>
          <p className="mt-[15px]">
            {" "}
            <span className="font-semibold">
              <i> *International Professional Nursing Journal: </i>
            </span>{" "}
            is more than just a publication; it's a vibrant community of nursing
            professionals united by a shared passion for excellence and a
            commitment to advancing the field. The journal's enduring legacy is
            a testament to its unwavering dedication to providing nurses with
            the knowledge, tools, and inspiration they need to deliver
            exceptional patient care and shape a healthier future for all.
          </p>
        </div>

        <div className="mt-[40px] mb-[30px]">
          <button
            type="submit"
            className="w-[50%] lg:w-full sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
          >
            <Link to="/articles">See articles </Link>
            <span className="mt-[5px]">
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfessionalJournal;
