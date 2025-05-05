import { MdKeyboardArrowRight } from "react-icons/md";
import ClinicalNursing from "../assets/journal/ijacn.jpg";
import MentalLand from "../assets/journal/mental.jpg";
import Maternal from "../assets/journal/maternal.jpg";
import Medical from "../assets/journal/medical.jpg";
import SpecialtyNursingJournalImg from "../assets/journal/SpecialNurJourn.jpg";
import { Link } from "react-router-dom";

const JournalsCol2 = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[-30px]">
          <div className="bg-white p-6 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[-40px]">
            <div className="flex justify-center mb-4">
              <img
                src={ClinicalNursing}
                alt="International JOurnal of Advanced Clinical Nursing"
                className="h-[150px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              Click on the read more button to get more information.
            </p>

            <div className="mt-[20px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/ijacn">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* International journal of multidisciplinary researches and innovation */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[15px] w-[300px]">
            <div className="flex justify-center mb-4">
              <img
                src={MentalLand}
                alt="International Specialty JOurnal of Mentalland Psychiatric Nursing Research"
                className="h-[130px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
            Click on the read more button to get more information.
            </p>

            <div className="mt-[20px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/Isjmpnr">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[35px] w-[300px]">
            <div className="flex justify-center mb-4">
              <img
                src={Maternal}
                alt="Maternal & Child Health Nursing Research"
                className="h-[130px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              Click on the read more button to get more information.
            </p>

            <div className="mt-[45px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/mchnr">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[65px] lg:ml-[10px] w-[300px]">
            <div className="flex justify-center mb-4">
              <img
                src={Medical}
                alt="Medical Surgical Nursing Research"
                className="h-[130px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              Click on the read more button to get more information.
            </p>

            <div className="mt-[45px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/msnr">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalsCol2;
