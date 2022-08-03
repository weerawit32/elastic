import "../css/component/ToggledMenu.style.css";
// import { useState } from "react";

const ToggledMenu = ({ togglePlatform }) => {
  // const [platformIsopen, setPlatformIsopen] = useState(false);

  return (
    <div className="menu__container container-lg">
      <ul className="menu__list">
        <li className="list-item py-3" onClick={() => togglePlatform()}>
          <p>Platform</p> <span>Products</span>
        </li>
        <li className="list-item">
        <a href="/" className="stretch-link">
            Use cases
          </a>
        </li>
        <li className="list-item position-relative">
          <a href="/" className="stretch-link">
            Pricing
          </a>
        </li>
        <li className="list-item">
          <span>Customers</span>
        </li>
        <li className="list-item">
          <span>Resources</span>
        </li>
        <li className="list-item">
          <span>Company</span>
        </li>
      </ul>
    </div>
  );
};

export default ToggledMenu;
