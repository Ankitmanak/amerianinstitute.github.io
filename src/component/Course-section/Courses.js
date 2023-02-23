import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../images/image/5.jpg";
import courseImg2 from "../../images/image/3.jpg";
import courseImg3 from "../../images/image/7.jpg";
import courseImg4 from "../../images/image/8.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "IELTS",
   
    students: 12,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "SPOKEN ENGLISH",
 
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "PTE",
    
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  American Institutes offering Popular courses like Ielts Spoken English <br></ br>
                  PTE,Life Skills and More
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;