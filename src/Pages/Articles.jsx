import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFilePdf } from "react-icons/fa";
import Ipnj from "../assets/ipnj.jpeg";
import Irjmpc from "../assets/irjmpc.jpeg";
import Ijanr from "../assets/ijanr.jpeg";
import Irjmpch from "../assets/irjmpch.jpeg";
import Ijacn from "../assets/journal/ijacn.jpg";
import Maternal from "../assets/journal/maternal.jpg";
import Surgical from "../assets/journal/medical.jpg";
import Ijmri from "../assets/journal/innovations.jpg";

const Articles = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto ml-[20px] lg:ml-[260px] mb-[50px]">
        <h1 className="text-[23px] lg:text-[32px] mt-[40px] font-bold lg:ml-[30px] border-b-2">
          Our well documented articles
        </h1>
        <div className="flex  flex-col justify-around mt-[60px]">
          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            | International Research Journal of Public and Community
            Health(IRJPCH)
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[450px]">
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/11A4ct_shlliMyrVi00-LLl2l51bU2Sjy/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Irjmpch} alt="Irjmpch" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1-y37ZKyNZLSP6OvATvUeCopBd2ojHcDa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Irjmpch} alt="Irjmpch" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1. No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            | International Journal Of Advanced Nursing and Research(IJANR)
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[450px] mt-[25px]">
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1UXS9vTu51v21MCilhokOloR2f-BGqi85/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijanr} alt="Ijanr" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1G2Ny0EzrLYVIAMtLzTwvnl1L_q-q6tXO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijanr} alt="Ijanr" className="w-11 h-11" />
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

          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            | International Professional Nursing Journal (IPNJ)
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[1250px] mt-[25px]">
            <ul className="flex-wrap space-y-4 flex ">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1piWhbb-rL7lHnyzGvQc2huU1v5Xa7TMM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {/* <FaFilePdf className="text-red-500 w-8 h-8" /> */}
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 22 No. 2
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px]  ml-[10px] lg:l-[30px]">
                <a
                  href="https://drive.google.com/file/d/1VRdQ86nlf7TdrUZMJ4QDVrLqt11XurCV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 22 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1JginAx_4QtBktAp6FEQo02PMdkzIbi5l/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 21. No. 3
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1aAkQ4r2TpzZw4Crtv9HuzwAMuHwp2L9S/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 21. No. 2
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/10JqO5Gei5rT24Wuyknd330bWimBqDk25/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 21. No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1DvKkwXAKxV6i2Szh7lXwD_dyObjXx895/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 18. No. 1
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1q0DcxQYRjbLo-DcGNge8lTDTuwVr5JZz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2015
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1XweEOJYeoM3Qi04bHFhjG6bA_tVfd7no/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2014
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1RY3UD2FOpWa5NO6FUqdeAn59N3CbNhhw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2013
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1actsbvJyfAXDvrUujR7WktdT6r-m4M0s/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Ipnj 2012
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[10px] lg:ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1im2wILt9gu2GyDf5mjYIFElDaSOtllyM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img
                    src={Ipnj}
                    alt="International Professional Nursing Journal"
                    className="w-11 h-11"
                  />

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

        <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
          | International Research Journal of Multidisciplinary-Practices,
          Public and Community Health(IRJMPC)
        </h1>
        <div className="flex flex-col">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[600px] mt-[25px]">
            <ul className="space-y-4 flex flex-wrap">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1TJmz2k2WS2Dmho9wM6uhCmnPjlU4cN2q/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Irjmpc} alt="Irjmpc" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 2 No. 2
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1klCCW_XPVd5bZtfIotpm6CEpyVUAeeOS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Irjmpc} alt="Irjmpc" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/11TvBFjw4MH4SB9B3q5thHqn-3pkJFc2_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Irjmpc} alt="Irjmpc" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1. No. 2
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1c5a4Hb4xdyQGICmAvR_EYrmezPGve-iQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Irjmpc} alt="Irjmpc" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1. No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            | The International Journal of Multidisciplinary Researches and
            Innovations (IJMRI)
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[1250px] mt-[25px]">
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1mi4K5LbymGHDLMI4DYk2h2uZu1a68nWW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/195sarNHLSMfx9MIYNaLoqHW98TxNNTGp/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 1 Vol. 2 No. 1 (Main work)
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1GWso94KesaGyoZnplTkb7UvB9ZOxPcbX/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 1 Vol. 2 No. 1 (Prelim)
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1kcKUDYsuEo0hPfYK4hdxp29orwJHo3px/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 3 Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1lXbAQ9F57pN4Y_I8K_9R9zg-1BIr-hqM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 4 Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/14BbWmdJjGjWKSHeFw39miOG572rPOjaY/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 5 Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1VF_3RUwzlMjQMXfQVoOhKFgT-rajcSb9/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 6 Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1wIGnNOA0tzvO1jw-ZFcUO7cPEdf-rWzO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijmri} alt="Ijmri" className="w-11 h-11" />

                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Art. 8 Vol. 2 No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            International Specialty Journal of Advanced Clinical Nursing
            Research
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[1250px] mt-[25px]">
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1TUSnfyZ6jn8jgeau5yevkXrlpCFeR-GQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Ijacn} alt="Ijacn" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1 No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            International Specialty Journal of Maternal and Child Health Nursing
            Research
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[1250px] mt-[25px]">
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/1vjnS4Fn6uTyzLuZq7rZwD3pt0fIBVSGq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Maternal} alt="Maternal" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1 No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <h1 className="text-[17px] text-gray-500 font-bold mb-6 mt-[35px]">
            International Specialty Journal of Medical and Surgical Nursing
            Research
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-[308px] lg:w-[1250px] mt-[25px]">
            <ul className="space-y-4 flex">
              <li className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition duration-200 w-[100px] ml-[30px]">
                <a
                  href="https://drive.google.com/file/d/11fkYlw-HiJE9aJMh4F9PbKU3diPXEPGV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <img src={Surgical} alt="Surgical" className="w-11 h-11" />
                  <div className="flex items-center">
                    <span className="text-[11px] mt-[7px] font-medium text-gray-800">
                      Vol 1 No. 1
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
