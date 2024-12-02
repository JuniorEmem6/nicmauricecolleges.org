import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Journals from "../components/Journals";
import JournalsCol from "../components/Jourrnals-col";

const Journal = () => {
  return (
    <>
      <Header />
      <h1 className="text-[40px] ml-[30px] lg:ml-[300px] font-bold lg:mt-[18px] underline mb-[-70px] lg:mb-[-30px]">
        All Journals
      </h1>
      <Journals head={true} />
      <JournalsCol />
      <Footer />
    </>
  );
};

export default Journal;
