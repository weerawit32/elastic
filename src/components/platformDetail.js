import "../css/component/platformDetail.style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlatformDetail = ({ togglePlatform }) => {
  return (
    <div className="platform__conatainer  bg-white text-start">
      <Row>
        <Col>
          <div
            className="platform__header py-3 border-bottom "
            onClick={() => togglePlatform()}
          >
            Platform
          </div>
          <div className="panel my-5">
            <p className="platform__topic my-4 text-muted ">
              ADDITIONAL RESOURCES
            </p>
            <ul className="platform__list text-start">
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Elastic Clound
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  View pricing
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Free trial and downloads
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  View all integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="panel my-5">
            <p className="platform__topic my-4 text-muted ">USE ELASTIC FOR</p>
            <ul className="platform__list text-start">
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Enterprise Search
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Observability
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Security
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Elastic Clound
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Elastic (ELK) Stack
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  View platform overview
                </a>
              </li>
            </ul>
          </div>
          <div className="panel my-5">
            <p className="platform__topic my-4 text-muted ">WHAT'S NEW</p>
            <ul className="platform__list text-start">
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Elastic 8.3 released
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Upgrade the Elastic Stack
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  Documentation
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  ElasticON Global 2021
                </a>
              </li>
              <li className="platform__item position-relative">
                <a href="/" className="platform__link strectch-link">
                  We're hiring
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlatformDetail;
