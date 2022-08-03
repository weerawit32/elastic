import { useState } from "react";

import pencilLogo from "../logo/icon-blog-pencil-32-color.svg";
import trainingLogo from "../logo/icon-training-on-demand-32-color.svg";
import certificateLogo from "../logo/icon-certificate-award-32-color.svg";

const ResourcesTrigger = () => {
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
      <span>Resources</span>
      {isOpen && (
        <div className=" tooltiptext tooltiptext--resources d-flex shadow">
          <div className="p-4  pt-2 border-end first-column">
            <h6 className="topic__heading text-muted">Learn</h6>
            <div className="link__panel p-1 pe-5  ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Documentation
                </a>
                <p className="description text-muted">Products guides</p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Blogs
                </a>
                <p className="description text-muted">
                  Tech topics, innovation, news
                </p>
              </div>
            </div>
            <div className="link__panel p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Training
                </a>
                <p className="description text-muted">
                  Skill building and certification
                </p>
              </div>
            </div>
          </div>
          <div className="p-4  pt-2 second-column">
            <h6 className="topic__heading text-muted">Engage</h6>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Events
                </a>
                <p className="description text-muted">
                  ElasticOn, meetups, virtual events
                </p>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Community
                </a>
                <p className="description text-muted">Groups, forums, code</p>
              </div>
            </div>
            <div className="link__panel  p-1 pe-5 ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Consulting
                </a>
                <p className="description text-muted">Outcome-based services</p>
              </div>
            </div>
          </div>
          <div className="p-4  pt-2 third-column  bg-light">
            <h6 className="topic__heading text-muted">Featured </h6>
            <div className="link__panel bg-light d-flex p-1 pe-5">
              <img src={pencilLogo} className="align-self-center" alt="pencil logo" width="32" height="32"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Driving quatified success with Elastic Enterprise Search
                </a>
              </div>
            </div>
            <div className="link__panel bg-light d-flex p-1 pe-5 postion-relative  ">
              <img src={trainingLogo} className="align-self-center" alt="training logo" width="32" height="32"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Get startd with Elasticsearch
                </a>
              </div>
            </div>
            <div className="link__panel bg-light d-flex p-1 pe-5 postion-relative border-bottom">
              <img src={certificateLogo} className="align-self-center" alt="certificate logo" width="32" height="32"></img>
              <div className="ms-4">
                <a href="/" className="platform__link stretched-link ">
                  Observability Engineer training
                </a>
              </div>
            </div>
            <a href="/" className="text__link-underline p-3 ps-0">
              <span className="me-1 text">View all resources </span>
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

export default ResourcesTrigger;
