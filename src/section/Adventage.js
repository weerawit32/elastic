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
            <a
                href="/"
                className="text__link-underline  p-3 ps-0 "
              >
                <span className="me-1 text">Explore more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="22"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
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
            <a
                href="/"
                className="text__link-underline  p-3 ps-0 "
              >
                <span className="me-1 text">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="22"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
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
            <a
                href="/"
                className="text__link-underline  p-3 ps-0 "
              >
                <span className="me-1 text">Watch video</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="22"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Advantage;
