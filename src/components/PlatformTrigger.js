import "../css/component/platformTrigger.style.css";
import enterpriseLogo from "../logo/logo-enterprise-search-32-color.svg";
import elasticObservabilityLogo from "../logo/logo-observability-32-color.svg";
import securityLogo from "../logo/logo-security-32-color.svg";

const PlatformTrigger = () => {
  return (
    <div className="tooltips">
      Platform
      <div className=" tooltiptext d-flex  p-4 pt-2 shadow">
        <div className="pe-4 first-column">
          <h6 className="topic__heading text-muted ">Elastic Clound</h6>
          <h6 className="topic__heading py-1">
            Maximize value and optimize your experience
          </h6>
          <p className="description text-muted mb-4">
            Deploy everything Elastic has to offer across any clound, in
            mimutes.
          </p>
          <a
            href="/"
            className="text__link-underline d-block p-3 ps-0 border-bottom"
          >
            <span>Learn more</span>
            <span>&rarr;</span>
          </a>
          <h6 className="topic__heading text-muted">ADDITIONAL RESOURCES</h6>
          <ul className="link__list">
            <li>
              <a href="/" className="text__link-underline ">
                <img src={enterpriseLogo} width="15" className="me-2"></img>View
                pricing
              </a>
            </li>
            <li>
              <a href="/" className="text__link-underline">
                Free trial and downloads
              </a>
            </li>
            <li>
              <a href="/" className="text__link-underline">
                View all integrations
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 border-end">
          <h6 className="topic__heading text-muted">Use elastic for</h6>
          <div className="link__panel d-flex p-1 pe-5">
            <img src={enterpriseLogo} width="24"></img>
            <div className="ms-4">
              <a href="/" className="platform__link stretched-link ">
                Enterprise Search
              </a>
              <p className="description text-muted">
                Search and discovery experiences
              </p>
            </div>
          </div>
          <div className="link__panel d-flex p-1 pe-5 postion-relative  ">
            <img src={elasticObservabilityLogo} width="24"></img>
            <div className="ms-4">
              <a href="/" className="platform__link stretched-link ">
                Observability
              </a>
              <p className="description text-muted">
                Unified logs, metrics, and traces
              </p>
            </div>
          </div>
          <div className="link__panel d-flex p-1 pe-5 postion-relative border-bottom">
            <img src={securityLogo} width="24"></img>
            <div className="ms-4">
              <a href="/" className="platform__link stretched-link ">
                Security
              </a>
              <p className="description text-muted">
                SIEM, endpoint, clound, and XDR
              </p>
            </div>
          </div>
          <div className="link__panel d-flex p-1 pe-5 postion-relative  ">
            <img src={elasticObservabilityLogo} width="24"></img>
            <div className="ms-4">
              <a href="/" className="platform__link stretched-link ">
                Elastic Clound
              </a>
              <p className="description text-muted">
                Deploy and scale in any clound
              </p>
            </div>
          </div>
          <div className="link__panel d-flex p-1 pe-5 postion-relative  ">
            <img src={elasticObservabilityLogo} width="24"></img>
            <div className="ms-4">
              <a href="/" className="platform__link stretched-link ">
                Elastic (ELK) Stack
              </a>
              <p className="description text-muted">
                Elasticsearch, Kibana, and integrations
              </p>
            </div>
          </div>
          <a href="/" className="text-muted fs-6 fw-bold">
            View platform overview
          </a>
        </div>
        <div className="ps-4">
          <h6 className="topic__heading text-muted">what's new</h6>
          <div className="link__panel p-1 pe-5 postion-relative  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Elastic 8.3 released
              </a>
              <p className="description text-muted">
                Search, observe, and protect everything
              </p>
            </div>
          </div>
          <div className="link__panel p-1 pe-5 postion-relative  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Upgrade the Elastic Stack
              </a>
              <p className="description text-muted">
                Expert tips when upgrading
              </p>
            </div>
          </div>
          <div className="link__panel p-1 pe-5 postion-relative  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Documentation
              </a>
              <p className="description text-muted">
                Read latest product guides
              </p>
            </div>
          </div>
          <div className="link__panel p-1 pe-5 postion-relative  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                ElasticON Global 2021
              </a>
              <p className="description text-muted">Stream on-demand now</p>
            </div>
          </div>
          <div className="link__panel p-1 pe-5 postion-relative  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                We're hiring
              </a>
              <p className="description text-muted">
                Join a global, distribution team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformTrigger;
