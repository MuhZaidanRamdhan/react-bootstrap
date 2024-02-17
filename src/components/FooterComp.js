import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function FooterComp() {
  return (
    <div className="footer pb-3 pt-4 mt-5">
      <Container>
        <Row>
          <Col>
            <h3 className="w-bold text-white">Ngoding</h3>
          </Col>
          <Col className="text-end">
            <i className="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className="text-center text-white mt-5">
              Create with ❤️ and 🍵 from student at STT-NF 2024.{" "}
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComp;
