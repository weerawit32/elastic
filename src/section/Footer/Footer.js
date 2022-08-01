import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import elasticLogo from "../../logo/elastic-logo.svg";
import twitterLogo from "../../logo/twiiter-icon.svg";
import facebookLogo from "../../logo/facebook-icon.svg";
import youtubeLogo from "../../logo/youtube-icon.svg";
import linkedLogo from "../../logo/linked-icon.svg";
import Badge from "react-bootstrap/Badge";
import elasticLogoReverse from "../../logo/logo-elastic-vertical-reverse (1).svg";

import Subscribe from "../../components/Subscribe";
import SocialLogo from "../../components/SocialLogo";

import "./Footer.style.css";

const Footer = () => {
  return (
    <section className="footer bg-dark py-5">
      <div className="container-lg">
        <Row className="border-bottom mb-3 pb-5">
          <div className="d-block d-sm-block d-lg-none text-white text-start d-md-flex">
            <div>
              <Subscribe />
            </div>
            <div className="d-sm-none d-none d-md-block d-lg-none ms-auto">
              <span className="me-4">Follow us</span>
              <div className="d-flex mt-4">
                <SocialLogo/>
              </div>
            </div>
          </div>
          <Col lg="3" md="4" sm="4" className="text-white text-start">
            <h5 className="mb-3 text-uppercase">Products & solutions</h5>
            <ul className="list-unstyled footer__links">
              <li>
                <a href="/" className="footer__link ">
                  Enterprise Search
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Obsercability
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Security
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Elastic Stack
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Elasticsearch
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Kibana
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Integrations
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Subscriptions
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Pricing
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="4" sm="4" className="text-white text-start">
            <div className="">
              <h5 className="mb-3">COMPANY</h5>
              <ul className="list-unstyled text-white ">
                <li>
                  <a href="/" className="footer__link">
                    Careers
                  </a>
                  <Badge bg="black" text="warning" className="ms-2">
                    WE'RE HIRING
                  </Badge>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    Board of Directors
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-none d-sm-none d-lg-block">
              <h5 className="mb-3">RESOURCES</h5>
              <ul className="list-unstyled text-white ">
                <li>
                  <a href="/" className="footer__link">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    What is the ELK Stack?
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    What is Elasticsearch?
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    Migrating from Splunk
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    Compare AWS Elasticsearch
                  </a>
                </li>
                <li>
                  <a href="/" className="footer__link">
                    Public Sector
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            md="4"
            sm="4"
            className="text-white text-start d-block d-sm-block d-lg-none"
          >
            <h5 className="mb-3">RESOURCES</h5>
            <ul className="list-unstyled text-white ">
              <li>
                <a href="/" className="footer__link">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  What is the ELK Stack?
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  What is Elasticsearch?
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Migrating from Splunk
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Compare AWS Elasticsearch
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Public Sector
                </a>
              </li>
            </ul>
          </Col>
          <div className="d-sm-block d-block d-md-none text-white text-start">
            <span className="me-4">Follow us</span>
            <div className="d-flex mt-4">
              <SocialLogo/>
            </div>
          </div>

          <Col
            lg="6"
            xl="5"
            className="d-none d-sm-none d-lg-block text-white text-start ms-auto"
          >
            <Subscribe />
            <div className="d-flex align-item-center ">
              <span className="me-4 align-self-center">Follow us</span>
              <SocialLogo/>  
            </div>
          </Col>
        </Row>
        <Row className="footer__bottom">
          <Col
            lg="6"
            className="text-md-start py-5 text-white d-md-flex d-lg-block "
          >
            <div className="footer__form mb-4 me-md-auto">
              <p className="footer__form-label me-sm-3 me-3">
                <strong>Langauge</strong>
              </p>
              <div className="d-block footer__form-control">
                <Form.Select
                  aria-label="Default select example"
                  className="align-self-start py-2 "
                >
                  <option>English</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="logo__container-elastic d-none d-sm-none d-md-block d-lg-none ">
              <img
                src={elasticLogoReverse}
                alt="elastic-l"
                width="80"
                height="70"
                fill="white"
                className="elastic__logo"
              ></img>
            </div>
            <div className="d-none d-sm-none d-lg-block ">
              <p>
                Elasticsearch is a trademark of Elasticsearch B.V., registered
                in the U.S. and in other countries.
              </p>
              <p>
                Apache, Apache Lucene, Apache Hadoop, Hadoop, HDFS and the
                yellow elephant logo are trademarks of the Apache Software
                Foundation in the United States and/or other countries.
              </p>
            </div>
          </Col>
          <Col
            lg="5"
            className="text-center text-white text-sm-center py-5  ms-lg-auto"
          >
            <div className="footer_nav ">
              <a href="/" className="footer__link">
                Trademarks
              </a>
              <div class="vr mx-2"></div>
              <a href="/" className="footer__link">
                Terms of Use
              </a>
              <div class="vr mx-2"></div>
              <a href="/" className="footer__link">
                Privacy
              </a>
              <div class="vr mx-2"></div>
              <a href="/" className="footer__link">
                Sitemap
              </a>
            </div>
            <p className="">© 2022. Elasticsearch B.V. All Rights Reserved</p>
            <div className="d-block d-sm-block d-lg-none mt-5">
              <p>
                Elasticsearch is a trademark of Elasticsearch B.V., registered
                in the U.S. and in other countries.
              </p>
              <p>
                Apache, Apache Lucene, Apache Hadoop, Hadoop, HDFS and the
                yellow elephant logo are trademarks of the Apache Software
                Foundation in the United States and/or other countries.
              </p>
            </div>
            <div className="logo__container-elastic d-none d-sm-none d-lg-block ">
              <img
                src={elasticLogoReverse}
                alt="elastic-l"
                width="80"
                height="70"
                fill="white"
                className="elastic__logo"
              ></img>
            </div>
            <div className="logo__container-elastic d-block d-sm-block d-md-none mt-5 ">
              <img
                src={elasticLogoReverse}
                alt="elastic-l"
                width="80"
                height="70"
                fill="white"
                className="elastic__logo"
              ></img>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
