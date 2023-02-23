import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Being a quick learner can be a valuable skill to include on your resume, but it has very little meaning on its own. person who has an exceptional ability to process, understand and memorize new information. ",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Academy For American completely support your decision to stay. She no longer supports the war. The senator says that he supports the proposed legislation.We continue to offer our full support Any time.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: " Academy For American Provide the certifications show that a person has the specific knowledge or skill needed to do a job. Typically, you earn these credentials after you have completed your education.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;