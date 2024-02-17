import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComp() {
  return (
    <div className="services min-vh-100 d-flex align-items-center" id="service">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="services-title text-center fw-bold">Services</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              reiciendis.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className=" text-center py-5 px-3" data-aos="fade-up">
            <i className="fa-solid fa-coins fs-2 mb-4"></i>
            <h5>Harga Terjangkau</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col
            className=" text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5>Fasilitas Terbaik</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col
            className=" text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i className="fa-solid fa-shield-halved fs-2 mb-4"></i>
            <h5>Harga Terjangkau</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceComp;
