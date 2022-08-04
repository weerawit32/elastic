import jaguarLogo from "../logo/logo-nav-dropdown-48x48-jaguar.png";
import emirateLogo from "../logo/logo-nav-dropdown-48x48-emirates-nbd.png";
import zurichLogo from "../logo/logo-nav-dropdown-48x48-zurich.png";

const CustomersDetail = ({ toggleCustomers }) => {
  return (
    <div className="platform__conatainer  bg-white text-start">
      <div
        className="platform__header py-3 border-bottom "
        onClick={() => toggleCustomers()}
      >
        Customers
      </div>
      <div className="p-4  pt-2  first-column">
        <h6 className="topic__heading text-muted">Stories by use case</h6>
        <div className="link__panel bg-white p-1 pe-5  ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Enterprise Search
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Observability
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Security
            </a>
          </div>
        </div>
      </div>
      <div className="p-4  pt-2 second-column">
        <h6 className="topic__heading text-muted">Help center</h6>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Customer success
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Documentation
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="p-4  pt-2 third-column  bg-white">
        <h6 className="topic__heading text-muted">Featured Customers</h6>
        <div className="link__panel bg-white d-flex p-1 pe-5">
          <img src={jaguarLogo} alt="jaguar logo" width="25" height="25"></img>
          <div className="ms-4">
            <a href="/" className="platform__link  stretched-link ">
              Jaguar Land Rover
            </a>
          </div>
        </div>
        <div className="link__panel bg-white d-flex p-1 pe-5 postion-relative  ">
          <img
            src={emirateLogo}
            alt="emirate logo"
            width="25"
            height="25"
          ></img>
          <div className="ms-4">
            <a href="/" className="platform__link stretched-link ">
              Emirates NBD
            </a>
          </div>
        </div>
        <div className="link__panel bg-white d-flex p-1 pe-5 postion-relative">
          <img src={zurichLogo} alt="zurich logo" width="25" height="25"></img>
          <div className="ms-4">
            <a href="/" className="platform__link stretched-link ">
              Zurich Insurance
            </a>
          </div>
        </div>
        <a href="/" className="platform__link p-3 ps-0">
          <span className="me-1 ">View all case studies </span>
        </a>
      </div>
    </div>
  );
};

export default CustomersDetail;
