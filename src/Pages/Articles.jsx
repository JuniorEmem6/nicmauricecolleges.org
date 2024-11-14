import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFilePdf } from "react-icons/fa";

const Articles = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto ml-[20px] lg:ml-[260px] mb-[50px]">
        <h1 className="text-[23px] lg:text-[32px] mt-[40px] font-bold lg:ml-[40px] border-b-2">
          Our well documented articles
        </h1>
        <div className="flex  flex-col justify-around mt-[60px]">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[450px]">
            <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
              | International Research Journal of Public and Community
              Health(IRJPCH)
            </h1>
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\Articles\irjpch\vol1no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\irjpch\vol1no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1. No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[450px] mt-[25px]">
            <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
              | International Journal Of Advanced Nursing and Research(IJANR)
            </h1>
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\ijanr\vol2no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\ijanr\vol1no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 1 No. 1
                    </span>
                  </div>
                </a>
              </li>

              {/* <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\oba.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      File Three
                    </span>
                  </div>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[1250px] mt-[25px]">
            <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
              | International Professional Nursing Journal (IPNJ)
            </h1>
            <ul className="flex-wrap space-y-4 flex ">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnjvol22no2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 22 No. 2
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px]  ml-[10px] lg:l-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnjvol22no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 22 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnjvol21no3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 21. No. 3
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnjvol21no2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 21. No. 2
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnjvol21no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 21. No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnjvol18no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 18. No. 1
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnj5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2015
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnj4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2014
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnj3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2013
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnj2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2012
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="src\Pages\articls\ipnj\ipnj1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2011
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[600px] mt-[25px]">
            <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
              | International Research Journal of Multidisciplinary-Practices,
              Public and Community Health(IRJMPC)
            </h1>
            <ul className="space-y-4 flex flex-wrap">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\irjmpc\vol2no2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 2 No. 2
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\irjmpc\vol2no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\irjmpc\vol2no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 2. No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\irjmpc\vol1no2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1. No. 2
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles\irjmpc\vol1no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1. No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[450px] mt-[25px]">
            <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
              | The International Journal of Multidisciplinary Researches and
              Innovations (IJMRI)
            </h1>
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\Articles/ijmri/Vol1no1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              {/* <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\oba.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      File Two
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="src\Pages\oba.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <FaFilePdf className="text-red-500 w-8 h-8" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      File Three
                    </span>
                  </div>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
