import { Col, Row } from "react-bootstrap";

function CustomWelcome() {
  return (
    <div className="px-5 py-2 mb-4">
      <div className="container-fluid py-2 d-flex">
        <Row>
            <Col xs={12}>
            <p className="h5 ms-3 d-none d-md-block text-dark ">Libri scelti per te..</p>
            </Col>
        </Row>
      </div>
    </div>
  );
}

export default CustomWelcome
