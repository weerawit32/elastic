// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../css/component/learnTrigger.style.css";
import rightArrow from "../logo/right-arrow.svg";

const LearnTrigger = () => {
  return (
    <div className="tooltips">
      Learn
      <div className=" tooltiptext p-4">
        <div className="d-flex pb-3">
          <div className="">
            <div className="topics">
              <h5 className="topic">Blogs</h5>
              <p className="description text-muted">
                Totorials, update, people
              </p>
            </div>
            <div className="topics">
              <h5 className="topic">Docs</h5>
              <p className="description text-muted">Product guides</p>
            </div>
            <div className="topics">
              <h5 className="topic">Events</h5>
              <p className="description text-muted">
                ElasticON, meetups, virtual events
              </p>
            </div>
            <div className="topics">
              <h5 className="topic">Videos</h5>
              <p className="description text-muted">
                Tutorials and customer testomonials
              </p>
            </div>
            <div className="topics">
              <h5 className="topic">Community</h5>
              <p className="description text-muted">Groups, forums, code</p>
            </div>
            <div className="topics">
              <h5 className="topic">Consulting</h5>
              <p className="description text-muted">
                Project acceleration packages
              </p>
            </div>
            <div className="topics">
              <h5 className="topic">Customer success</h5>
              <p className="description text-muted">
                Customer guidance and resources
              </p>
            </div>
            <div className="topics">
              <h5 className="topic">Training</h5>
              <p className="description text-muted">
                Critical skill-building and certification
              </p>
            </div>
          </div>
          <div class="vr mx-3"></div>
          <div className="">
            <p className="text-muted text-uppercase mb-4">
              Featured topics
            </p>
            <p className="mb-4 topic-link">
              <a href="/">Elastic(ELK)Stack Upgrading</a>
            </p>
            <p className="mb-4 topic-link">
              <a href="/">Elastic Stack Getting Started</a>
            </p>
            <p className="mb-4 topic-link">
              <a href="/">Kibana Getting Started</a>
            </p>
            <p className="mb-4 topic-link">
              <a href="/">App Search Getting Started</a>
            </p>
            <p className="mb-4 topic-link">
              <a href="/">Workplace Search Getting Started</a>
            </p>
            <p className="mb-4 topic-link">
              <a href="/">APM Overview</a>
            </p>
          </div>
        </div>
        <div className="bg-light d-flex align-items-center justify-content-between p-3">
          <h4 className="text-muted">Upgradge the Elastic Stack</h4>
          <div>

          <a className="link-primary" href="/">
            <span className="texts-link fw-bold me-2">Watch video</span>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
          </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnTrigger;
