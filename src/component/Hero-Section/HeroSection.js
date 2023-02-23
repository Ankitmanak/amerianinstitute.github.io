import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../images/image/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Your ideal English <br /> Language Learning <br /> Institute
              </h2>

              <p className="mb-5">
                We help you achieve your desired band. <br /> 
                And study at your dream university, Or<br /> 
                 move to your dream country
              </p>
            </div>
            <div className="search">
              
              <button className="btn">Get Started </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;