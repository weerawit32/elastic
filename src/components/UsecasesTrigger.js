import "../css/component/useCasesTrigger.style.css";
import { useState } from "react";

const UsecasesTrigger = () => {
  const [isOpen, setOpen] = useState(false);

  const onMouseEnter = () => {
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className="tooltips-usecase"
      onMouseOver={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <span>Use cases</span>
      {isOpen && (
        <div className=" tooltiptext-usecase d-flex shadow">
          <div className="p-4  pt-2 border-end first-column">
            <h6 className="topic__heading text-muted">By topic</h6>
            <div className="link__panel p-1 pe-5  ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Improving digital customer experiecesn
                </a>
                <p className="description text-muted">
                  Connecting people with content that matters
                </p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Evolving the DevOps lifecycle
                </a>
                <p className="description text-muted">
                  Building better applicationis efficiently and at scale
                </p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Security without limits
                </a>
                <p className="description text-muted">
                  Limitless visibility, analytics, and response capabilities
                </p>
              </div>
            </div>

            <a
              href="/"
              className="text__link-underline text-muted fs-6 fw-bold align-center"
            >
              View all topics
            </a>
          </div>
          <div className="p-4  pt-2 second-column">
            <h6 className="topic__heading text-muted">By inductry</h6>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Public Sector
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Financial Services
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Telecommunications
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5  ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Healthcare
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Technology
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5   ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Retail and Ecommerce
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5   ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Media and Entertainment
                </a>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5   ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Manufacturing and Automotive
                </a>
              </div>
            </div>
            <a
              href="/"
              className="text__link-underline text-muted fs-6 fw-bold align-center"
            >
              View all industries
            </a>
          </div>
          <div className="p-4  pt-2 third-column  bg-light">
            <h6 className="topic__heading text-muted">Featured</h6>
            <div className="link__panel p-1 pe-5   ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Secret ingredient for better website experiences
                </a>
                <p className="description text-muted">
                  Boost conversations, lower bounce rates, and conquer
                  abandonded shopping carts
                </p>
              </div>
            </div>
            <a href="/" className="text__link-underline p-3 ps-0">
              <span className="me-1 text">downloads ebook</span>
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

export default UsecasesTrigger;
