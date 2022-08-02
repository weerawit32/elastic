import "../css/component/platformTrigger.style.css";
import { useState } from "react";
import enterpriseLogo from "../logo/logo-enterprise-search-32-color.svg";
import elasticObservabilityLogo from "../logo/logo-observability-32-color.svg";
import securityLogo from "../logo/logo-security-32-color.svg";
import elasticLogo from "../logo/logo-cloud-32-color.svg";
import stackLogo from "../logo/logo-stack-32-color.svg";
import priceIcon from "../logo/icon-price-16-blue.svg";
import downloadIcon from "../logo/icon-download-16-blue.svg";
import integratingIcon from "../logo/icon-integration-16-blue.svg";

const PlatformTrigger = () => {
  const [isOpen, setOpen] = useState(false);

  const onMouseEnter = () => {
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className="tooltips"
      onMouseOver={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <span>Platform</span>
      {isOpen && (
        <div className=" tooltiptext d-flex  shadow">
          <div className="p-5 pt-2 first-column bg-light">
            <div className="d-flex">
              <img src={elasticLogo} width="24" className="me-3"></img>
              <h6 className="topic__heading text-muted ">Elastic Clound</h6>
            </div>

            <div className="link__panel bg-light">
              <h6 className="topic__heading--noupper py-1">
                Maximize value and optimize your experience
              </h6>
              <p className="description text-muted mb-4">
                Deploy everything Elastic has to offer across any clound, in
                mimutes.
              </p>
              <a
                href="/"
                className="text__link-underline d-block p-3 ps-0 border-bottom stretched-link "
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
            </div>
            <h6 className="topic__heading text-muted">ADDITIONAL RESOURCES</h6>
            <ul className="link__list">
              <li>
                <a href="/" className="text__link-underline mb-3  ">
                  <img src={priceIcon} width="13" className="me-2"></img>
                  View pricing
                </a>
              </li>
              <li>
                <a href="/" className="text__link-underline mb-3">
                  <img src={downloadIcon} width="13" className="me-2"></img>
                  Free trial and downloads
                </a>
              </li>
              <li>
                <a href="/" className="text__link-underline">
                  <img src={integratingIcon} width="13" className="me-2"></img>
                  View all integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="p-4 pt-2 border-end">
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
              <img src={elasticLogo} width="24"></img>
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
              <img src={stackLogo} width="24"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Elastic (ELK) Stack
                </a>
                <p className="description text-muted">
                  Elasticsearch, Kibana, and integrations
                </p>
              </div>
            </div>
            <a href="/" className="text-muted text__link-underline">
              View platform overview
            </a>
          </div>
          <div className="p-4 pt-2">
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
      )}
    </div>
  );
};

export default PlatformTrigger;
