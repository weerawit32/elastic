import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
// import Card from "react-bootstrap/Card";
// import logo from "../logo.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firstVideo from "../video/video-home-enterprise-search.mp4";
import rightArrow from "../logo/right-arrow.svg";
import "../section/SearchObserve/SearchObserve.style.css";

const SearchObserve = () => {
  return (
    <section className="home py-5 px-lg-30 px-5 ">
      <Container>
        <div className="row justify-content-center">
          <div className="col-6 text-centent text-center ">
            <h1 className="display-1 mb-5 fw-bold">
              Search. Observe. Protect.
            </h1>
            <p className="mb-5">
              Accelerate results that matter, across any cloud. Easily deploy
              anywhere, and extend the value of Elastic with cloud-native
              features.
            </p>
            <Button variant="primary" className="py-3 px-4">
              Getting started
            </Button>
          </div>
        </div>
      </Container>
      <Container className="mt-5">
        <div className="row  border shadow rounded-4">
          <div
            className=" col-md-4 text-start position-relative d-flex flex-column justify-content-between  py-4
            border-bottom-md-0 border-sm-bottom border-bottom"
          >
            <div>
              <h5 className="text-muted">Analyst Reports</h5>
              <h3>
                The Forrester Wave Endpoint Detection and response Providers
                20202
              </h3>
              <p>
                Elastic named s Strong Performance and included among the most
                significant vendors.
              </p>
            </div>
            <a
                href="/"
                className="text__link-underline link-primary stretched-link  p-3 ps-0 "
              >
              
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
            
          </div>
          <div
            className=" col-md-4 text-start position-relative d-flex flex-column justify-content-between  py-4
            border-bottom-md-0 border-sm-bottom border-bottom"
          >
            <div className="card__content">
              <h5 className="card__title text-muted">Events & Webinars</h5>
              <h3 className="card__header">Get started with Elasticsearch</h3>
              <p>
                Watch this video to learn how to deploy, manage, and analyyze
                your data in Elasticsearch
              </p>
            </div>
            <a
                href="/"
                className="text__link-underline link-primary stretched-link  p-3 ps-0 "
              >
              
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
          </div>
          <div className=" col-md-4 text-start position-relative d-flex flex-column justify-content-between  py-4 mt-md-0 mt-sm-5 mt-5">
            <div className="card__content">
              <h5 className="text-muted">What's new</h5>
              <h3>Ingestion without congestion</h3>
              <p>
                In 8.3, get broader observabiliti for cloud, SaaS, and big data
                apps with serverless log forwarding for AWS and performance
                insights for Saleforce and Hadoop.
              </p>
            </div>
            <a
                href="/"
                className="text__link-underline link-primary stretched-link  p-3 ps-0 "
              >
              
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
          </div>
        </div>
        <Container>
          <Row className=" my-5 align-items-center">
            <Col lg="5" className="text-start">
              <h1>What's new in 8.3</h1>
              <p>
                With Elastic Security for Cloud, new cloud-native integrations,
                and the ability to search and replicate data across hybrid
                environments — Elastic 8.3 is helping the world’s leading
                organizations to search, solve, and succeed in a cloud-first
                world.
              </p>
              <a
                href="/"
                className="text__link-underline  p-3 ps-0"
              >
                <span className="me-1 text">Learn more</span>
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
            <Col lg="5">
              <video autoPlay muted>
                <source src={firstVideo}></source>
              </video>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default SearchObserve;
