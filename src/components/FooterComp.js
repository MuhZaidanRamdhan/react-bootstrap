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
          <Col className="d-flex justify-content-center align-items-center mt-4">
            <h6 className="building text-white mt-3 mx-2">Building with</h6>
            <a href="https://react.dev/">
              <i class="react-logo fs-1 fa-brands fa-react"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className="create text-center text-white mt-5">
              Create with❤️and🍵from student at STT-NF 2024.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComp;
