import { useState } from "react";
import "../css/component/companyTrigger.style.css";

const CompanyTrigger = () => {
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
      <span>Company</span>
      {isOpen && (
        <div className=" tooltiptext tooltiptext--company d-flex shadow">
          <div className="p-4  pt-2 border-end first-column">
            <h6 className="topic__heading text-muted">About Elastic</h6>
            <div className="link__panel p-1 pe-5  ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  About
                </a>
                <p className="description text-muted">
                  Our story and leadership
                </p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Press
                </a>
                <p className="description text-muted">Elastic news</p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Investor Relations
                </a>
                <p className="description text-muted">
                  Result, filing, resources
                </p>
              </div>
            </div>
          </div>
          <div className="p-4  pt-2 second-column">
            <h6 className="topic__heading text-muted">&nbsp;</h6>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Careers
                </a>
                <p className="description text-muted">
                  Peruse our opportunities
                </p>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Partners
                </a>
                <p className="description text-muted">
                  Find or become a partner
                </p>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Elastic Excellence Awards
                </a>
                <p className="description text-muted">See remarkable work</p>
              </div>
            </div>
          </div>
          <div className="p-4  pt-2 third-column  bg-light">
            <h6 className="topic__heading text-muted">Featured </h6>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Why now is the time tomove critical database to the cloud
                </a>
              </div>
            </div>
            <a href="/" className="text__link-underline p-3 ps-0">
              <span className="me-1 text">Read more</span>
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

export default CompanyTrigger;
