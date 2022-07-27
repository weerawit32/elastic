// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../css/company.style.css";

const CompanyTrigger = () => {
    return (
      <div className="tooltips">
        Company
        <div className=" tooltiptext p-4">
          <div className="d-flex pb-3">
            <div className="">
              <div className="topics">
                <h5 className="topic">About</h5>
                <p className="description text-muted">
                  Our story, Source Code, ESG
                </p>
              </div>
              <div className="topics">
                <h5 className="topic">Customers</h5>
                <p className="description text-muted">Case studies, videos, blogs</p>
              </div>
              <div className="topics">
                <h5 className="topic">Careers</h5>
                <p className="description text-muted">
                  Peruse our opportunities
                </p>
              </div>
              <div className="topics">
                <h5 className="topic">Partners</h5>
                <p className="description text-muted">
                  Find or become a pertner
                </p>
              </div>
              <div className="topics">
                <h5 className="topic">Investor Relations</h5>
                <p className="description text-muted">Results, fillings, resources</p>
              </div>
              <div className="topics">
                <h5 className="topic">Awards</h5>
                <p className="description text-muted">
                  Recognizing remarkable work
                </p>
              </div>
            </div>
            <div class="vr mx-3"></div>
            <div className="">
              <h5 className="text-muted text-uppercase mb-4">
                News
              </h5>
              <p className="mb-4 topic-link">
                <a href="/">Elastic 8.3 released</a>
              </p>
              <p className="mb-4 topic-link">
                <a href="/">What's new in Elastic Enterprise Search 8.3</a>
              </p>
              <p className="mb-4 topic-link">
                <a href="/">What's new in Elastic Observability 8.3</a>
              </p>
              <p className="mb-4 topic-link">
                <a href="/">What's new in Elastic Security 8.3</a>
              </p>
              <p className="mb-4 topic-link">
                <a href="/">What's new in Elastic Platform 8.3</a>
              </p>
              
            </div>
          </div>
          <div className="bg-light d-flex align-items-center justify-content-between p-3">
            <h4 className="text-muted">Elastic is a search company</h4>
  
            <a className="fs-5 fw-bold" href="/">
              Watch video
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CompanyTrigger;