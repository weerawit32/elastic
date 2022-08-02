import Button from "react-bootstrap/esm/Button";
import "../css/component/footerMenu.style.css";

const FooterMenu = () => {
  return (
    <div className="menu__footer__container p-3 fixed-bottom bg-light container-fluid">
      <Button className="nav__btn nav__btn-try px-5 py-3 m-4" variant="primary">
        <span className="fw-bold heading-tertiary">Try Free</span>
      </Button>
      <div className="heading-tertiary m-3">
        Have questions? <a href="/">Contact us</a>
      </div>
      <div className="heading-tertiary m-3">
        Already have an account? <a href="/">Log in</a>
      </div>
    </div>
  );
};

export default FooterMenu;
