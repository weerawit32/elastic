import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import elasticLogo from "../logo/elastic-logo.svg";

import { useState } from "react";

import PlatformTrigger from "../components/PlatformTrigger";
import UsecasesTrigger from "../components/UsecasesTrigger";
import CustomerTrigger from "../components/CustomerTrigger";
import ResourcesTrigger from "../components/ResourcesTrigger";
import CompanyTrigger from "../components/CompanyTrigger";

import Hamburger from "hamburger-react";
import ToggledMenu from "../components/ToggledMenu";
import PlatformDetail from "../components/platformDetail";
import UseCaseDetail from "../components/useCaseDetail";
import CustomersDetail from "../components/customerDetail";
import ResourcesDeail from "../components/resourcesDetail";
import FooterMenu from "../components/FooterMenu";
import CompanyDetail from "../components/CompanyDetail";

import "../css/section/navbars.style.css";

function NavScrollExample() {
  const [isOpen, setOpen] = useState(false);
  const [platformIsopen, setPlatformIsopen] = useState(false);
  const [usecasesIsopen, setUsecasesIsopen] = useState(false);
  const [customersIsopen, setCustomersIsopen] = useState(false);
  const [resourcesIsopen, setResourcesIsopen] = useState(false);
  const [companyIsopen, setCompanyIsopen] = useState(false);
  const toggledMenuContainer = document.querySelector(".toggleMenu__container");
  // Off canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const platformToggle = () => {
    setPlatformIsopen(!platformIsopen);
  };

  const usecasesToggle = () => {
    setUsecasesIsopen(!usecasesIsopen);
    // console.log("use case", usecasesIsopen);
  };

  const customersToggle = () => {
    setCustomersIsopen(!customersIsopen);
  };

  const resourcesToggle = () => {
    setResourcesIsopen(!resourcesIsopen);
    console.log("resources");
  };

  const companyToggle = () => {
    setCompanyIsopen(!companyIsopen);
  };

  const testClose = () => {
    // console.log("before", isOpen);
    setOpen(!isOpen);
    // console.log("after", isOpen);

    if (isOpen) {
      console.log("close");
      setPlatformIsopen(false);
      setUsecasesIsopen(false);
      setCustomersIsopen(false);
      setResourcesIsopen(false);
      setCompanyIsopen(false);
      document.body.classList.remove("body__overflow--hidden");
      toggledMenuContainer.classList.remove("overflow-scroll");
      toggledMenuContainer.classList.add("overflow-hidden");
    } else {
      console.log("open");
      document.body.classList.add("body__overflow--hidden");
      toggledMenuContainer.classList.add("overflow-scroll");
    }
  };

  // if (!isOpen) {
  //   // setPlatformIsopen(false);
  //   console.log("close from if");
  // }

  return (
    <>
      <div
        className="nav__container container-xl border-bottom"
        style={{ maxHeight: "80px" }}
      >
        <div>
          <img src={elasticLogo} alt="elastic-l" width="110" height="70"></img>
        </div>
        <div className="d-xl-block d-none">
          <ul className="nav__list nav__list-left  ">
            <li>
              <PlatformTrigger />
            </li>
            <li>
              <UsecasesTrigger />
            </li>
            <li>
              <a href="/" className="tooltips text-decoration-none">
                Pricing
              </a>
            </li>
            <li>
              <CustomerTrigger />
            </li>
            <li>
              <ResourcesTrigger />
            </li>
            <li>
              <CompanyTrigger />
            </li>
          </ul>
        </div>

        <div className="d-xl-block d-none ms-md-auto">
          <ul className="nav__list nav__list-right">
            <li>
              <a href="/" className="navbar-link">
                Contact
              </a>
            </li>
            <a href="/" className="navbar-link">
              Login
            </a>
            <li>
              <a
                href="/"
                className="nav-link d-sm-inline-block d-lg-none d-inline-block text-primary fw-bold"
              >
                Login
              </a>
            </li>
            <li>
              <Button
                className="nav__btn nav__btn-try px-4 py-1"
                variant="primary"
              >
                <span className="navbar-link text-white">Try Free</span>
              </Button>
            </li>{" "}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="bi bi-search"
                viewBox="0 0 16 16"
                className="link-primary search-icon"
                onClick={handleShow}
              >
                <path
                  fill="currentColor"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
              {/* <Offcanvas
                show={show}
                onHide={handleClose}
                placement="top"
                className="bg-primary"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="border-bottom display-inline-block">
                    <input
                      className="col-8 bg-transparent border m-2"
                      type="text"
                    ></input>
                  </div>
                </Offcanvas.Body>
              </Offcanvas> */}
            </li>
          </ul>
        </div>
        <div className="d-sm-block d-block d-xl-none ms-sm-auto ms-auto me-4 d-sm-flex d-flex">
          <a href="/" className="link-primary align-self-center me-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="bi bi-search "
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </a>
          <Hamburger toggled={isOpen} toggle={testClose} />
        </div>
      </div>
      <div className="toggleMenu__container  container-fluid d-xl-none d-sm-block d-block">
        {isOpen && (
          <ToggledMenu
            togglePlatform={platformToggle}
            toggleUsecases={usecasesToggle}
            toggleCustomers={customersToggle}
            toggleResources={resourcesToggle}
            toggleCompany={companyToggle}
          />
        )}
        <div className="platform container-fluid bg-white text-start">
          {platformIsopen && <PlatformDetail togglePlatform={platformToggle} />}
          {usecasesIsopen && <UseCaseDetail toggleUsecases={usecasesToggle} />}
          {customersIsopen && (
            <CustomersDetail toggleCustomers={customersToggle} />
          )}
          {resourcesIsopen && (
            <ResourcesDeail toggleResources={resourcesToggle} />
          )}
          {companyIsopen && <CompanyDetail toggleCompany={companyToggle} />}
        </div>
        <div className="footer__menu">{isOpen && <FooterMenu />}</div>
      </div>
    </>
  );
}

export default NavScrollExample;
