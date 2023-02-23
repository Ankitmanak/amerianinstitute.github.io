import React, { Fragment } from "react";
import Header from "../component/Header/Header";
import HeroSection from "../component/Hero-Section/HeroSection";
/*import CompanySection from "../component/Company-section/Company";*/


import Courses from "../component/Course-section/Courses";
import ChooseUs from "../component/Choose-us/ChooseUs";
import Features from "../component/Feature-section/Features";


import Testimonials from "../component/Testimonial/Testimonials";

import Newsletter from "../component/Newsletter/Newsletter";
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      
    
      <Courses />
      <ChooseUs />
      <Features />
    
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;