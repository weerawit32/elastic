import { useState } from "react";
import "../css/component/platformTrigger.style.css";

const TestPlatform = () => {
  const [isopen, setOpen] = useState(true);

  //   const onMouseEnter = () => {
  //     setOpen(true);
  //   };

  //   const onMouseLeave = () => {
  //     setOpen(false);
  //   };

  return (
    <div
      className="tooltips"
      //   onMouseOver={() => onMouseEnter()}
      //   onMouseLeave={() => onMouseLeave()}
    >
      <span>Platform</span>
      {isopen && (
        <div className=" tooltiptext d-flex  p-4 pt-2 shadow">
          <div className="pe-4 first-column">
            <div className="link__panel p-1 pe-5 postion-relative  ">
              <div className="">
                <a href="/" className="platform__link stretched-link ">
                  Elastic 8.3 released
                </a>
                <p className="description text-muted">
                  Search, observe, and protect everything
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPlatform;
