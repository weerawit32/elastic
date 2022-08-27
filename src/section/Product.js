import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import elasticCloundLogo from "../logo/logo-cloud-32-color.svg";
import firstVideo from "../video/video-home-enterprise-search.mp4";
import shopifyLogo from "../logo/logohome-quote-shopify (1).svg";
import enterpriseLogo from "../logo/logo-enterprise-search-32-color.svg";
import elasticObservabilityLogo from "../logo/logo-observability-32-color.svg";
import volvoLogo from "../logo/logohome-quote-volvo.svg";
import securityLogo from "../logo/logo-security-32-color.svg";
import barclaysLogo from "../logo/logohome-quote-barclays.svg";
import "./product.style.css";

const Product = () => {
  return (
    <section className="product">
      <div className="container-lg">
        <Row className="align-items-center justify-content-center py-5">
          <Col lg="7" md="10" className="product_title">
            <h1 className="heading-primary">Search.Observe.Protect</h1>
            <p className="content__body">
              We offer solutions for enterprise search, observability, and
              security that are built on a single, flexible technology stack
              that can be deployed anywhere.
            </p>
            <a href="/" className="text__link-underline--normal p-3 ps-0">
              <span className="me-1 text">View all products</span>
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
        <Row className="align-items-center py-5">
          <Col sm="5" className="product_content text-start p-4">
            <div className="product_logo_container mb-5 d-flex align-items-center">
              <img
                src={elasticCloundLogo}
                alt="elasti clound logo"
                className="img-fluid"
              ></img>
              <span className="heading-secondary align-self-center mb-0 ms-2 ">
                Elastic Clound
              </span>
            </div>
            <div className="product_title">
              <h2 className="heading-primary">
                Run on Elastic Cloud, your way
              </h2>
            </div>
            <div className="product_body">
              <p className="content__body">
                Run where and how you want. Deploy on Google Cloud, Microsoft
                Azure, and Amazon Web Services with Elastic Cloud. We deliver
                the complete Elasticsearch experience with flexible pricing.
              </p>
            </div>
            <div className="product_footer ">
              <a href="/" className="text__link-underline--normal  p-3 ps-0 ">
                <span className=" me-1 text">Learn more</span>
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
              <p className="content__body">
                <a
                  href="/"
                  className="text__link-underline--normal text-decoration-underline  "
                >
                  <span>Download our solutions</span>
                </a>
                &nbsp;or try one of our orchestration products:
                <a
                  href="/"
                  className="text__link-underline--normal text-decoration-underline  "
                >
                  <span>Elastic Cloud Enterprise </span>
                </a>
                &nbsp;and&nbsp;
                <a
                  href="/"
                  className="text__link-underline--normal text-decoration-underline"
                >
                  <span> Elastic Cloud on Kubernetes.</span>
                </a>
              </p>
            </div>
          </Col>
          <Col sm="7" lg="6" className="ms-auto">
            <video width="600" height="400" autoPlay muted>
              <source src={firstVideo}></source>
            </video>
          </Col>
          <Col sm="7" lg="6" className="d-sm-block d-none">
            <video width="600" height="400" autoPlay muted>
              <source src={firstVideo}></source>
            </video>
          </Col>
          <Col sm="5" className="product_content text-start p-4 ms-auto">
            <div className="product_logo_container d-flex align-items-center mb-5">
              <img src={enterpriseLogo} alt="enterprise logo"></img>
              <span className="heading-secondary align-self-center mb-0 ms-2">
                Elastic Enterprise Search
              </span>
            </div>
            <div className="product_title">
              <h2 className="heading-primary">Search everything, anywhere</h2>
            </div>
            <div className="product_body content__body">
              <p>
                Easily implement powerful, modern search experiences for your
                busy team. Quickly add pretuned search to your website, app, or
                ecommerce store. Search it all, simply.
              </p>
            </div>
            <div className="product_footer content__body ">
              <a href="/" className="text__link-underline--normal  p-3 ps-0 ">
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
              <div sm="5" className="d-sm-none d-block">
                <video width="600" height="400" autoPlay muted>
                  <source src={firstVideo}></source>
                </video>
              </div>
              <div className="bg-light p-3 rounded">
                <p>
                  We have a mix of two important things — a fast, powerful
                  search engine from Elastic and the right content.
                </p>
                <div className="d-flex">
                  <img
                    src={shopifyLogo}
                    alt="shopify logo"
                    className="img-fluid"
                  ></img>
                  <div class="vr mx-3"></div>
                  <span className="fs-6 fw-bold align-self-center">
                    Documentation Lead
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="5" className="product_content text-start p-4">
            <div className="product_logo_container d-flex align-items-center mb-5">
              <img
                src={elasticObservabilityLogo}
                alt="elastic observability logo"
                className="img-fluid"
              ></img>
              <span className="heading-secondary align-self-center mb-0 ms-2">
                Elastic Observability
              </span>
            </div>
            <div className="product_title">
              <h2 className="heading-primary">Observe your entire ecosystem</h2>
            </div>
            <div className="product_body content__body">
              <p>
                Unify logs, metrics, traces, and more in a scalable stack that's
                free, open, and built for speed. Monitor every element in your
                infrastructure to quickly resolve issues and consistently
                deliver exceptional digital experiences.
              </p>
            </div>
            <div className="product_footer content__body ">
              <a href="/" className="text__link-underline--normal  p-3 ps-0 ">
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
              <div lg="5" className="d-sm-none d-block">
                <video width="600" height="400" autoPlay muted>
                  <source src={firstVideo}></source>
                </video>
              </div>
              <div className="bg-light">
                <p>
                  Elastic provides the backbone for Volvo Group Connected
                  Solutions fleet of 1 million assets across the globe.
                </p>
                <div className="d-flex">
                  <img
                    src={volvoLogo}
                    className="img-fluid"
                    width="40"
                    height="40"
                    alt="volvo logo"
                  ></img>
                  <div class="vr mx-3"></div>
                  <span className="fs-6 fw-bold align-self-center">
                    IT Infrastructure Architect
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="7" lg="6" className="d-sm-block d-none ms-auto">
            <video width="600" height="400" autoPlay muted>
              <source src={firstVideo}></source>
            </video>
          </Col>
          <Col sm="7" lg="6" className="d-sm-block d-none">
            <video width="600" height="400" autoPlay muted>
              <source src={firstVideo}></source>
            </video>
          </Col>
          <Col sm="5" className="product_content text-start p-4 ms-auto">
            <div className="product_logo_container d-flex align-items-center mb-5">
              <img src={securityLogo} alt="security logo"></img>
              <span className="heading-secondary align-self-center mb-0 ms-2">
                Elastic Security
              </span>
            </div>
            <div className="product_title">
              <h2 className="heading-primary">
                Protect against security threats
              </h2>
            </div>
            <div className="product_body">
              <p className="content__body">
                Unify prevention, detection, and response to combat threats at
                scale. Operationalize any security use case: SIEM, malware
                prevention, threat hunting, cloud monitoring, and more.
              </p>
            </div>
            <div className="product_footer content__body ">
              <a href="/" className="text__link-underline--normal  p-3 ps-0 ">
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
              <div lg="5" className="d-sm-none d-block">
                <video width="600" height="400" autoPlay muted>
                  <source src={firstVideo}></source>
                </video>
              </div>

              <div className="bg-light p-3 rounded">
                <p>
                  Elastic made it possible for us to build our cyber security
                  and defense platform — and protect the bank from real‑time
                  threats.
                </p>
                <div className="d-flex">
                  <img
                    src={barclaysLogo}
                    alt="barclays logo"
                    className="img-fluid"
                  ></img>
                  <div class="vr mx-3"></div>
                  <span className="fs-6 fw-bold align-self-center">
                    Documentation Lead
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Product;
