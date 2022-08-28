import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
// import Card from "react-bootstrap/Card";
// import logo from "../logo.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firstVideo from "../video/video-home-enterprise-search.mp4";
import rightArrow from "../logo/right-arrow.svg";
import "../css/section/SearchObserve.style.css";

const SearchObserve = () => {
  return (
    <section className="home py-5 px-lg-30 px-5 ">
      <Container>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-8 col-sm-6 col-7 text-centent text-center  ">
            <h1 className="heading-special">Search. Observe. Protect.</h1>
            <p className="col-md-10 col-sm-11 col-11 mb-5 mx-auto content__body">
              Accelerate results that matter, across any cloud. Easily deploy in
              your favorite public cloud, or in multiple clouds, and extend the
              value of Elastic with cloud-native features.
            </p>
            <Button variant="primary" className="py-3 px-5 mb-5">
              <span className="heading-tertiary">Getting started</span>
            </Button>
          </div>
        </div>
      </Container>
      <div className="container-lg mt-5">
        <div className="row  border shadow rounded-4">
          <div
            className="cards col-md-4 text-start position-relative d-flex flex-column justify-content-between
             
            border-bottom-md-0 border-sm-bottom border-bottom p-5"
          >
            <div className="card__content">
              <h5 className="card__title heading-tertiary text-uppercase text-muted mb-4">
                Analyst Reports
              </h5>
              <h3 className="card__header heading-secondary">
                The Forrester Wave Endpoint Detection and response Providers
                2022
              </h3>
              <p className="card__body">
                Elastic named s Strong Performance and included among the most
                significant vendors.
              </p>
            </div>
            <a
              href="/"
              className="text__link-underline--normal link-primary stretched-link  p-3 ps-0 "
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
            className="cards col-md-4 text-start position-relative d-flex flex-column justify-content-between  
            border-bottom-md-0 border-sm-bottom border-bottom p-5"
          >
            <div className="card__content">
              <h5 className="card__title heading-tertiary  text-uppercase text-muted mb-4">
                Events & Webinars
              </h5>
              <h3 className="card__header heading-secondary">
                Get started with Elasticsearch
              </h3>
              <p className="card__body">
                Watch this video to learn how to deploy, manage, and analyze
                your data in Elasticsearch
              </p>
            </div>
            <a
              href="/"
              className="text__link-underline--normal link-primary stretched-link  p-3 ps-0 "
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
          <div className="cards col-md-4 text-start position-relative d-flex flex-column justify-content-between  p-5 mt-md-0 mt-sm-5 mt-5">
            <div className="card__content">
              <h5 className="card__title heading-tertiary  text-uppercase text-muted mb-4">
                What's new
              </h5>
              <h3 className="card__header heading-secondary">
                Cross-cluster luster
              </h3>
              <p className="card__body ">
                In 8.3, easily search and replicate data between Elasticsearch
                clusters across hybrid environmets, seamlessly connecting from
                on-premises to the public cloud.
              </p>
            </div>
            <a
              href="/"
              className="text__link-underline--normal link-primary stretched-link  p-3 ps-0 "
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
        <div className="container-lg">
          <Row className=" my-5 align-items-center">
            <Col sm="5" className="text-start">
              <h1 className="heading-primary">What's new in 8.3</h1>
              <p className="content__body">
                With Elastic Security for Cloud, new cloud-native integrations,
                and the ability to search and replicate data across hybrid
                environments — Elastic 8.3 is helping the world’s leading
                organizations to search, solve, and succeed in a cloud-first
                world.
              </p>

              <a
                href="/"
                className="text__link-underline--normal d-flex  p-3 ps-0"
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
            <Col sm="6" className="ms-auto">
              <video autoPlay muted>
                <source src={firstVideo}></source>
              </video>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default SearchObserve;
