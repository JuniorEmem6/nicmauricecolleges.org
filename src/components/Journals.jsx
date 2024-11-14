import { MdKeyboardArrowRight } from "react-icons/md";
import Nursing from "../assets/journal/nursing.jpg";
import Multidisciplinary from "../assets/journal/multidisciplinary.jpg";
import Professional from "../assets/journal/professional.jpg";
import Community from "../assets/journal/community.jpg";
import { Link } from "react-router-dom";

const Journals = ({ head }) => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {!head ? (
          <div className="text-center mb-12">
            <div className="flex item-center justify-center">
              <div className="bg-blue-600 border rounded-lg h-[7px] w-[100px] mt-[17px] mr-[7px]"></div>
              <h2 className="text-4xl font-bold text-gray-800 font-mono">
                Our Exclusive Journals
              </h2>
              <div className="bg-blue-600 border rounded-lg h-[7px] w-[100px] mt-[17px] ml-[7px]"></div>
            </div>
            <p className="mt-4">
              Gain access to all exclusive and premium journals from scholars
              around the globe in a single repository
            </p>
          </div>
        ) : (
          ""
        )}

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[80px]">
          <div className="bg-white p-6 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[-40px]">
            <div className="flex justify-center mb-4">
              <img
                src={Community}
                alt="community journal"
                className="h-[150px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              Our journal stands at a pivotal moment in the evolution of public
              and community health research.
            </p>

            <div className="mt-[20px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/irjpch">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* International Journal of Advanced Nursing Research*/}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[6px] w-[300px]">
            <div className="flex justify-center mb-4">
              <img
                src={Nursing}
                alt="nursing journal"
                className="h-[130px] w-[400px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              A call to revolutionize the journal, to transform it into a
              platform that truly reflects the global landscape of nursing, its
              challenges.
            </p>

            <div className="mt-[20px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/ijanr">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* Professional nursing journal */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[35px] w-[300px]">
            <div className="flex justify-center mb-4">
              <img
                src={Professional}
                alt="professional nursing journal"
                className="h-[140px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              IPNJ has been a beacon of nursing knowledge and innovation for
              over two decades, serving as a vital resource for nurses
              worldwide..
            </p>

            <div className="mt-[20px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/professional-nursing-journal">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* International journal of multidisciplinary researches and innovation */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ml-[10px] lg:ml-[70px] w-[300px]">
            <div className="flex justify-center mb-4">
              <img
                src={Multidisciplinary}
                alt="Multidisciplinary journal"
                className="h-[130px]"
              />
            </div>

            <p className="text-gray-600 text-left text-[15px]">
              Representing diverse disciplines and expertise, you are the
              pillars of our journal's success. we acknowledge the vast scope
              ...
            </p>

            <div className="mt-[20px]">
              <button
                type="submit"
                className="w-[90%] sm:w-auto px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
              >
                <Link to="/irjmpch">Read More..</Link>
                <span className="mt-[5px]">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Real-Time Tracking Section */}
        {!head ? (
          <div className="mt-[40px] lg:ml-[470px] ml-[10px]">
            <button
              type="submit"
              className=" w-[95%] lg:w-[41%] px-5 lg:px-6 py-2 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex"
            >
              <Link to="/journal">Get more Premuim journals here </Link>

              <span className="mt-[5px]">
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Journals;
