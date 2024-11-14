import React from "react";
import Header from "../components/Header";
import Scene from "../assets/scene.jpg";
import Unions from "../components/Unions";
import Journals from "../components/Journals";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <section class="mt-[10px] lg:mt-[40px] ml-[30px] lg:ml-[160px]">
        <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center ">
          {/* <!-- Left Text Section --> */}
          <div class="lg:w-1/2 lg:text-left">
            <h2 className="font-bold text-[20px] leading-[30px] lg:text-[65px] lg:leading-[75px]">
              <span className="">
                Empowering Minds, <br />
              </span>
              <span className="text-blue-600">Shaping Futures -</span> Where
              Diversity Meets Opportunity
            </h2>

            <p class="mt-[23px] text-gray-600 max-w-lg mx-auto lg:mx-0 text-[17px]">
              Discover a world of opportunities with our diverse programs,
              experienced faculty, and a community dedicated to your success.
            </p>
            <div class="mt-[20px] lg:mt-[50px] flex lg:justify-start space-x-4">
              <a class="text-blue-600 border font-bold border-blue-600 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-blue-50">
                <Link to="/publish">Publish article here </Link>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[40px] lg:mt-0 lg:absolute lg:top-[250px] lg:left-[1100px]">
          <img
            src={Scene}
            alt="College"
            className="w-[300px] h-[300px] lg:h-[500px] lg:w-[550px]"
          />
        </div>
      </section>
      <Unions />
      <Journals />
      <Footer />
    </>
  );
};

export default Home;
