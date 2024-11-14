import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import Multidisciplinary from "../../assets/journal/multidisciplinary.jpg";
import { Link } from "react-router-dom";

const MultidisciplinaryJournal = () => {
  return (
    <>
      <Header />
      <div className="mt-[80px] ml-[30px] lg:ml-[100px]">
        <div>
          <h1 className="text-[20px] font-bold leading-[22px] lg:leading-[45px] underline">
            International Research Journal of Multidisciplinary Practices,
            Public and Community Health
          </h1>
          <div className="mt-[60px]">
            <img
              src={Multidisciplinary}
              alt="multidisciplinary journal"
              className="w-[600px] lgw-[900px] h-[300px] lg:h-[400px]"
            />
          </div>
          <div className="w-[300px] lg:w-[1000px] mt-[30px] text-[16px] font-mono">
            <p>
              <span className="font-semibold">
                <i> Representing </i>
              </span>{" "}
              diverse disciplines and expertise, you are the pillars of our
              journal's success. As we embark on this new venture, we
              acknowledge the vast scope of multidisciplinary practices in
              public and community health, encompassing:
            </p>

            <ul className="mt-[15px]">
              <li>
                • Healthcare professions (medicine, nursing, allied health)
              </li>
              <li>• Social sciences (sociology, psychology, anthropology)</li>
              <li>
                • Public health (epidemiology, health policy, health education)
              </li>
              <li>
                • Environmental sciences (environmental health, ecology,
                conservation)
              </li>
              <li>• Biological sciences (biology, microbiology, genetics)</li>
              <li>• Physical sciences (physics, chemistry, engineering)</li>
              <li>
                • Mathematical and computational sciences (biostatistics, data
                science)
              </li>
              <li>• Humanities (ethics, philosophy, history)</li>
            </ul>

            <p>
              <span className="font-semibold">
                <i> Our mission </i>
              </span>{" "}
              is to create a platform where researchers, practitioners, and
              policymakers can converge, share ideas, and learn from each
              other's perspectives, fostering:
            </p>
            <ul className="mt-[15px]">
              <li>• Interdisciplinary collaboration and knowledge sharing</li>
              <li>• Innovative research and methodologies</li>
              <li>
                • Best practices in healthcare delivery, education, and
                community engagement
              </li>
              <li>• Global collaboration and knowledge exchange</li>
            </ul>

            <p>
              <span className="font-semibold">
                <i> As Editorial Board Members, </i>
              </span>{" "}
              your guidance and expertise will help us:
            </p>
            <ul className="mt-[15px]">
              <li>• Shape the journal's direction and scope</li>
              <li>• Ensure the quality and relevance of published articles</li>
              <li>
                • Identify emerging trends and topics in multidisciplinary
                practices
              </li>
              <li>• Develop strategic partnerships and collaborations</li>
            </ul>

            <p>
              <span className="font-semibold">
                <i> As Reviewers, your input is crucial in: </i>
              </span>{" "}
            </p>
            <ul className="mt-[15px]">
              <li>
                o Evaluating manuscripts through a rigorous and constructive
                peer-review process
              </li>
              <li>
                o Providing feedback that enhances the quality and impact of
                published research
              </li>
              <li>
                o Ensuring that our journal maintains the highest standards of
                scientific integrity and excellence
              </li>
            </ul>
            <p>
              <span className="font-semibold">
                <i> As Authors, your contributions are vital in: </i>
              </span>{" "}
            </p>
            <ul className="mt-[15px]">
              <li>• Sharing innovative research and ideas.</li>
              <li>• Showcasing best practices and case studies.</li>
              <li>• Exploring new methodologies and frameworks</li>
              <li>• Addressing complex health issues and challenges</li>
              <li>• Presenting theoretical and conceptual frameworks</li>
              <li>• Sharing empirical research and data-driven findings</li>
              <li>• Offering critical perspectives and analyses</li>
            </ul>
            <p>
              <span className="font-semibold">
                <i>Together, we create a journal that: </i>
              </span>{" "}
            </p>
            <ul className="mt-[15px]">
              <li>
                • Breaks down disciplinary silos and fosters interdisciplinary
                collaboration
              </li>
              <li>
                • Showcases cutting-edge research and innovation in public and
                community health
              </li>
              <li>
                • Provides a platform for underrepresented voices and
                perspectives
              </li>
              <li>
                • Informs policy and practice with evidence-based research
              </li>
              <li>
                • Contributes to improving health equity, access, and outcomes
                globally
              </li>
              <li>• Fosters a culture of inclusivity, diversity, and equity</li>
            </ul>

            <p className="mt-[20px]">
              We are committed to maintaining the highest ethical standards,
              transparency, and inclusivity in our publication process. We will
              work tirelessly to ensure that our journal is:
            </p>
            <ul className="mt-[15px]">
              <li>• Indexed in major databases.</li>
              <li>
                • Widely disseminated and accessible to diverse audiences.
              </li>
              <li>
                • Compliant with international publication ethics and standards.
              </li>
            </ul>
            <p className="mt-[20px]">
              Thank you for your dedication, expertise, and time. Let us work
              together to create a journal that makes a meaningful impact in the
              field of public and community health. Please feel free to contact
              us with any questions, suggestions, or ideas. We look forward to
              collaborating with you and producing a journal that we can all be
              proud of.
            </p>

            <p className="mt-[10px]">Best regards,</p>

            <p className="mt-[15px] font-bold">
              International Research Journal of Multidisciplinary Practices,
              Public and Community Health
            </p>
          </div>
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

export default MultidisciplinaryJournal;
