import "../css/component/ToggledMenu.style.css";
// import { useState } from "react";

const ToggledMenu = ({
  togglePlatform,
  toggleUsecases,
  toggleCustomers,
  toggleResources,
  toggleCompany,
}) => {
  // const [platformIsopen, setPlatformIsopen] = useState(false);

  return (
    <div className="menu__container container-fluid ">
      <ul className="menu__list">
        <li className="list-item py-3" onClick={() => togglePlatform()}>
          <p>Platform</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="list-item" onClick={() => toggleUsecases()}>
          <p>Use cases</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="list-item position-relative">
          <a href="/" className="stretch-link">
            Pricing
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="list-item" onClick={() => toggleCustomers()}>
          <span>Customers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="list-item" onClick={() => toggleResources()}>
          <span>Resources</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="list-item" onClick={() => toggleCompany()}>
          <span>Company</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default ToggledMenu;
