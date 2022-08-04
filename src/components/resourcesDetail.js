import pencilLogo from "../logo/icon-blog-pencil-32-color.svg";
import trainingLogo from "../logo/icon-training-on-demand-32-color.svg";
import certificateLogo from "../logo/icon-certificate-award-32-color.svg";

const ResourcesDeail = ({ toggleResources }) => {
  return (
    <div className="platform__conatainer  bg-white text-start">
      <div
        className="platform__header py-3 border-bottom "
        onClick={() => toggleResources()}
      >
        Resources
      </div>
      <div className="p-4  pt-2 first-column bg-white">
        <h6 className="topic__heading text-muted">Learn</h6>
        <div className="link__panel bg-white p-1 pe-5  ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Documentation
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Blogs
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Training
            </a>
          </div>
        </div>
      </div>
      <div className="p-4  pt-2 bg-white second-column">
        <h6 className="topic__heading text-muted">Engage</h6>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Events
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Community
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Consulting
            </a>
          </div>
        </div>
      </div>
      <div className="p-4  pt-2 third-column  bg-white">
        <h6 className="topic__heading text-muted">Featured </h6>
        <div className="link__panel bg-white d-flex p-1 pe-5">
          <img
            src={pencilLogo}
            className="align-self-center"
            alt="pencil logo"
            width="25"
            height="25"
          ></img>
          <div className="ms-4">
            <a href="/" className="platform__link stretched-link ">
              Driving quatified success with Elastic Enterprise Search
            </a>
          </div>
        </div>
        <div className="link__panel bg-white d-flex p-1 pe-5 postion-relative  ">
          <img
            src={trainingLogo}
            className="align-self-center"
            alt="training logo"
            width="25"
            height="25"
          ></img>
          <div className="ms-4">
            <a href="/" className="platform__link stretched-link ">
              Get startd with Elasticsearch
            </a>
          </div>
        </div>
        <div className="link__panel bg-white d-flex p-1 pe-5 postion-relative">
          <img
            src={certificateLogo}
            className="align-self-center"
            alt="certificate logo"
            width="25"
            height="25"
          ></img>
          <div className="ms-4">
            <a href="/" className="platform__link stretched-link ">
              Observability Engineer training
            </a>
          </div>
        </div>
        <a href="/" className="platform__link p-3 ps-0">
          <span className="me-1 text">View all resources </span>
        </a>
      </div>
    </div>
  );
};

export default ResourcesDeail;
