import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import elasticLogo from "../logo/elastic-logo.svg";
// import ProductTrigger from "../components/ProductTrigger";
// import ProductTrigger2 from "../components/ProductTrigger2";
// import LearnTrigger from "../components/LearnTrigger";
import CompanyTrigger from "../components/CompanyTrigger";
import TestPlatform from "../components/testPlatform";
import PlatformTrigger from "../components/PlatformTrigger";
import UsecasesTrigger from "../components/UsecasesTrigger";
// import CustomerTrigger from "../components/CustomerTrigger";
// import "../css/navbar.style.css";
import "../css/navbars.style.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import ToggledMenu from "../components/ToggledMenu";
import PlatformDetail from "../components/platformDetail";
import FooterMenu from "../components/FooterMenu";

function NavScrollExample() {
  const [isOpen, setOpen] = useState(false);
  const [platformIsopen, setPlatformIsopen] = useState(false);

  const platformToggle = () => {
    setPlatformIsopen(!platformIsopen);
  };

  const testClose = () => {
    // console.log("before", isOpen);
    setOpen(!isOpen);
    // console.log("after", isOpen);

    if (isOpen) {
      console.log("close");
      setPlatformIsopen(false);
    } else {
      console.log("open");
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
        style={{ maxHeight: "50px" }}
      >
        <div>
          <img src={elasticLogo} alt="elastic-l" width="80" height="70"></img>
        </div>
        <div className="d-md-block d-none">
          <ul className="nav__list nav__list-left  ">
            <li>
              <PlatformTrigger />
              {/* <TestPlatform /> */}
            </li>
            <li>{/* <UsecasesTrigger /> */}</li>
            <li>
              <a href="/" className="nav-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                {/* <CustomerTrigger /> */}
                Customer
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="d-md-block d-none ms-md-auto">
          <ul className="nav__list nav__list-right">
            <li>
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
            <li className="d-lg-block d-none d-sm-none">
              <Button
                className="nav__btn nav__btn-login px-5 py-2 "
                variant="outline-primary"
              >
                <span className="fw-bold">Login</span>
              </Button>
            </li>
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
                className="nav__btn nav__btn-try px-5 py-2"
                variant="primary"
              >
                <span className="fw-bold">Try Free</span>
              </Button>
            </li>{" "}
            <li>
              <a href="/" className="link-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  class="bi bi-search" viewBox="0 0 16 16">
                <path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="d-sm-block d-block d-lg-none ms-sm-auto ms-auto me-4">
          <Hamburger toggled={isOpen} toggle={testClose} />
        </div>
      </div>
      <div className="toggleMenu__container container-lg d-md-none d-sm-block d-block">
        {isOpen && <ToggledMenu togglePlatform={platformToggle} />}
        <div className="platform container-fluid text-center">
          {platformIsopen && <PlatformDetail togglePlatform={platformToggle} />}
        </div>
      </div>
      <div className="footer__menu">{isOpen && <FooterMenu />}</div>
    </>
  );
}

export default NavScrollExample;

// <Navbar bg="light" expand="md">
//   <div className="container-lg">
//     <Navbar.Brand href="#">
//       <img src={elasticLogo} alt="elastic-l" width="80" height="70"></img>
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0 d-flex align-items-center"
//         style={{ maxHeight: "100px" }}
//         navbarScroll
//       >
//         <Nav.Item href="#action1" className="navbar__text mx-3">
//           <ProductTrigger2 />
//         </Nav.Item>
//         <Nav.Item href="#action2" className="navbar__text mx-3">
//           Customer
//         </Nav.Item>
//         <Nav.Item href="#action2" className="navbar__text mx-3">
//           <LearnTrigger />
//         </Nav.Item>
//         <Nav.Item href="#action2" className="navbar__text mx-3">
//           <CompanyTrigger/>
//         </Nav.Item>
//         <Nav.Item href="#action2" className="navbar__text mx-3">
//           Pricing
//         </Nav.Item>
//       </Nav>
//       <Nav
//         className="ms-auto my-2 my-lg-0 d-flex align-items-center "
//         style={{ maxHeight: "100px" }}
//         navbarScroll
//       >
//         <Nav.Item href="#action1" className="mx-3">
//           Contact
//         </Nav.Item>
//         <Nav.Item href="#action2" className="mx-3">
//           <Button variant="outline-primary">Login</Button>
//         </Nav.Item>
//         <Nav.Item href="#action2" className="mx-3">
//           <Button variant="primary">Try free</Button>
//         </Nav.Item>
//         <Nav.Link href="#action2" className="text-primary button mx-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             class="bi bi-search"
//             viewBox="0 0 16 16"
//           >
//             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//           </svg>
//         </Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </div>
// </Navbar>
