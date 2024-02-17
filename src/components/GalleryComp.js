import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery1 from "../assets/gallery/gallery-1.jpg";
import Gallery2 from "../assets/gallery/gallery-2.jpg";
import Gallery3 from "../assets/gallery/gallery-3.jpg";
import Gallery4 from "../assets/gallery/gallery-4.jpg";
import Gallery5 from "../assets/gallery/gallery-5.jpg";
import Gallery6 from "../assets/gallery/gallery-6.jpg";

function GalleryComp() {
  return (
    <div className="gallery min-vh-100 d-flex justify-content-center align-items-center" id="gallery">
      <Container>
        <Row className="mb-5">
          <Col>
            <div className="title-gallery text-black text-center">
              <h1 className="fw-bold">My Gallery</h1>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                suscipit!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
          <Col>
            <img
              src={Gallery1}
              alt="unplash.com"
              className="w-100"
              data-aos="fade-up"
            />
          </Col>
          <Col>
            <img
              src={Gallery2}
              alt="unplash.com"
              className="w-100"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </Col>
          <Col>
            <img
              src={Gallery3}
              alt="unplash.com"
              className="w-100"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </Col>
          <Col>
            <img
              src={Gallery4}
              alt="unplash.com"
              className="w-100"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </Col>
          <Col>
            <img
              src={Gallery5}
              alt="unplash.com"
              className="w-100"
              data-aos="fade-up"
              data-aos-delay="800"
            />
          </Col>
          <Col>
            <img
              src={Gallery6}
              alt="unplash.com"
              className="w-100"
              data-aos="fade-up"
              data-aos-delay="1000"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GalleryComp;
