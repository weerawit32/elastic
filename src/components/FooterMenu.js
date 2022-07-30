import Button from "react-bootstrap/esm/Button";
import "../css/component/footerMenu.style.css";

const FooterMenu = () => {
  return (
    <div className="menu__footer__container p-3 fixed-bottom bg-light container-fluid">
      <Button className="nav__btn nav__btn-try px-5 py-2 m-3" variant="primary">
        <span className="fw-bold">Try Free</span>
      </Button>
      <div className="m-3">
        Have questions? <a href="/">Contact us</a>
      </div>
      <div className="m-3">
        Already have an account? <a href="/">Log in</a>
      </div>
    </div>
  );
};

export default FooterMenu;
