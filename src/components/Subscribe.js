import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/component/subscribe.style.css";

const Subscribe = () => {
  return (
    <div className="subscibe">
      <h4>Subscribe to our newsletter</h4>
      <Row className="mb-2">
        <Col lg="9">
          <InputGroup className="subscibe__form my-3  ">
            <Form.Control
              placeholder="Email address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="subscibe__form-control"
            />
            <Button variant="primary" className=" subscibe__form-btn ms-2 px-4">
              Sign up
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <p className=" subscibe-text mb-5  me-2">
        By submitting you agree to{" "}
        <a href="/" className ="link-light"><span className="text-decoration-underline">
          Elastic Terms of Service.
        </span></a>
        {" "}
        Your personal data will be processed in accordance with{" "}
        <a href="/" className ="link-light"><span className="text-decoration-underline">
          Elastic's Privacy Statement.
        </span></a>
        
      </p>
    </div>
  );
};

export default Subscribe;
