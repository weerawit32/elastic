import "../css/component/ToggledMenu.style.css";
// import { useState } from "react";

const ToggledMenu = ({ togglePlatform, toggleUsecases }) => {
  // const [platformIsopen, setPlatformIsopen] = useState(false);

  return (
    <div className="menu__container container-fluid ">
      <ul className="menu__list">
        <li className="list-item py-3" onClick={() => togglePlatform()}>
          <p>Platform</p> <span>Products</span>
        </li>
        <li className="list-item" onClick={() => toggleUsecases()}>
          <p>Use cases</p>
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
