import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../images/image/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Dear Readers,<br></br>
                 Are housewives,are businessmen,are connected with media are students are preparing for any competition are preparing
                 for IELTS or TOEFL if you want a job in call center then think Do you know how to answer effective sentences in English? Do you know 
                 difference between American and British English? Both these methods of English language are commonly used in india? Can you speak fluent English?
                 if your answer is "NO" then Aecedemy for American Institute assures you to get out of these problem
                 IN "Aecedemy for American Institute" gives you a well organized library at no extra cost for the development
                 of your knowledge
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=pV82vrcMohk"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;