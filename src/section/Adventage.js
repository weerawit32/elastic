import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import enterpriseSearchLogo from "../logo/logo-enterprise-search-32-color.svg";
import elasticSearchLogo from "../logo/logo-elasticsearch-32-color.svg";

const Advantage = () => {
  return (
    <section className=" py-5">
      <div className=" text-center container-lg">
        <div className=" d-sm-block d-block d-md-none px-3 text-start">
          <h2 className="mb-3 display-6 fw-bold">Scale up your expertise</h2>
          <p className="fs-6">
            You're up, running, and ready for more. From creating machine
            learning jobs to custom visualizations in Kibana, there's way more
            to explore.
          </p>
        </div>
        <Row className="text-start d-sm-flex d-flex ">
          <Col md="3" className=" d-sm-none d-none d-md-block px-3 me-auto">
            <h2 className="mb-3 display-6 fw-bold">Scale up your expertise</h2>
            <p className="fs-6">
              You're up, running, and ready for more. From creating machine
              learning jobs to custom visualizations in Kibana, there's way more
              to explore.
            </p>
          </Col>
          <Col md="4" sm="6" className="px-3">
            <img
              src={enterpriseSearchLogo}
              alt="enterprise search logo"
              className="mb-4"
            ></img>
            <h4 className="mb-3">
              Best practices for successful customer service search
            </h4>
            <p>
              Learn more about how strong search leads to satisfied customers
              and helps prevent case escalation.
            </p>
          </Col>
          <Col md="4" sm="6">
            <img
              src={elasticSearchLogo}
              alt="elastic search logo"
              className="mb-4"
            ></img>
            <h4 className="mb-3">
              Improve responsiveness with distributed Elastic architectures
            </h4>
            <p>
              See how Elastic replicates data across nodes for better
              responsiveness and resiliency.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Advantage;
