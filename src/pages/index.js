import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Footer from "../components/Footer";
import {LoaderContainer} from "./PageElements";
import GlobalStyles from "../globalStyles";
import AOS from "aos";
import "aos/dist/aos.css";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 950 });
  }, []);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <LoaderContainer>
          <HashLoader color={"black"} loading={loading} size={50} />
        </LoaderContainer>
      ) : (
        <>
          <Sidebar isOpen={isOpen} handleIsOpen={handleIsOpen} />
          <Navbar handleIsOpen={handleIsOpen} />
          <Hero />
          <About />
          <Project />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
