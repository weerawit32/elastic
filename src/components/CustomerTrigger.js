import { useState } from "react";
import jaguarLogo from "../logo/logo-nav-dropdown-48x48-jaguar.png";
import emirateLogo from "../logo/logo-nav-dropdown-48x48-emirates-nbd.png";
import zurichLogo from "../logo/logo-nav-dropdown-48x48-zurich.png";

const CustomerTrigger = () => {
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
      <span>Customers</span>
      {isOpen && (
        <div className=" tooltiptext tooltiptext--customers d-flex shadow">
          <div className="p-4  pt-2 border-end first-column">
            <h6 className="topic__heading text-muted">Stories by use case</h6>
            <div className="link__panel p-1 pe-5  ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Enterprise Search
                </a>
                <p className="description text-muted">
                  Search applications of all kinds
                </p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Observability
                </a>
                <p className="description text-muted">
                  Logs, metrics, APM, and more
                </p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Security
                </a>
                <p className="description text-muted">
                  SIEM, endpoint, cloud, and XDR
                </p>
              </div>
            </div>
          </div>
          <div className="p-4  pt-2 second-column">
            <h6 className="topic__heading text-muted">Help center</h6>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Customer success
                </a>
                <p className="description text-muted">
                  Customer guidance and resources
                </p>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Documentation
                </a>
                <p className="description text-muted">
                  Read latest product guides
                </p>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Contact us
                </a>
                <p className="description text-muted">
                  Have questions? Get in touch
                </p>
              </div>
            </div>
          </div>
          <div className="p-4  pt-2 third-column  bg-light">
            <h6 className="topic__heading text-muted">Featured Customers</h6>
            <div className="link__panel d-flex p-1 pe-5">
              <img src={jaguarLogo} alt="jaguar logo" width="40" height="40"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Jaguar Land Rover
                </a>
                <p className="description text-muted">Vehicle intelligence</p>
              </div>
            </div>
            <div className="link__panel d-flex p-1 pe-5 postion-relative  ">
              <img src={emirateLogo} alt="emirate logo" width="40" height="40"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Emirates NBD
                </a>
                <p className="description text-muted">
                  Secured billions in assets
                </p>
              </div>
            </div>
            <div className="link__panel d-flex p-1 pe-5 postion-relative border-bottom">
              <img src={zurichLogo} alt="zurich logo" width="40" height="40"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Zurich Insurance
                </a>
                <p className="description text-muted">
                  Increased customers trust
                </p>
              </div>
            </div>
            <a href="/" className="text__link-underline p-3 ps-0">
              <span className="me-1 text">View all case studies </span>
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
      )}
    </div>
  );
};

export default CustomerTrigger;
