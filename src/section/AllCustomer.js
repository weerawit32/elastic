import Container from "react-bootstrap/esm/Container";
import microsoftLogo from "../logo/logohome-microsoft.svg";
import netflixLogo from "../logo/logohome-netflix.svg";
import slackLogo from "../logo/logohome-slack.svg";
import twilloLogo from "../logo/logohome-twilio.svg";
import uberLogo from "../logo/logohome-uber.svg";

const AllCustomer = () => {
  return (
    <section className="bg-light py-5">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-md-8  col-sm-10 text-content my-5 ">
            <h1 className=" heading-primary">
              Our customers bring search to life
            </h1>
            <p className="content__body  col-lg-10 col-sm-10 mx-auto">
              From startups to the global 2000, Elastic powers search solutions
              for thousands of companies worldwide to find documents, monitor
              infrastructure, protect against security threats, and more.
            </p>
          </div>
        </div>
        <div className="customer_logo-container d-flex flex-wrap justify-content-center  mb-4">
          <a
            href="/"
            className="customer_logo_container  rounded-3 me-3 mt-3 bg-white"
          >
            <img
              src={netflixLogo}
              alt="netflix-logo"
              width="200"
              height="91"
            ></img>
          </a>
          <a href="/" className="customer_logo_container me-3 mt-3 bg-white">
            <img src={uberLogo} alt="uber-logo" width="200" height="91"></img>
          </a>
          <a href="/" className="customer_logo_container me-3 mt-3 bg-white">
            <img src={slackLogo} alt="slack-logo" width="200" height="91"></img>
          </a>
          <a href="/" className="customer_logo_container me-3 mt-3 bg-white">
            <img
              src={twilloLogo}
              alt="twillo-logo"
              width="200"
              height="91"
            ></img>
          </a>
          <a href="/" className="customer_logo_container  mt-3 bg-white">
            <img
              src={microsoftLogo}
              alt="microsoft-logo"
              width="200"
              height="91"
            ></img>
          </a>
        </div>
        <a href="/" className="text__link-underline--normal p-3 ps-0  ">
          <span className="me-1 ">View all customers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="22"
            class="bi bi-arrow-right"
            className="align-self-center"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default AllCustomer;
