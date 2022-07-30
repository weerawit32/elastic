import "../css/component/platformTrigger.style.css";

const PlatformTrigger = () => {
  return (
    <div className="tooltips">
      Platform
      <div className=" tooltiptext d-flex  p-4">
        <div className="pe-4">
          <h6 className="topic-heading">Elastic Clound</h6>
          <h6>Maximize value and optimize your experience</h6>
          <p>
            Deploy everything Elastic has to offer across any clound, in
            mimutes.
          </p>
          <a href="/">
            <span>Learn more</span>
            <span>&rarr;</span>
          </a>
          <h6 className="topic-heading">ADDITIONAL RESOURCES</h6>
          <a href="/">View pricing</a>
          <a href="/">Free trial and downloads</a>
          <a href="/">View all integrations</a>
        </div>
        <div className="px-4">
          <h6 className="topic-heading">Use elastic for</h6>
          <div className="link-panel d-flex p-3 pe-5 postion-relative bg-warning">
            <span>Logo</span>
            <div>
              <a href="/" className="stretched-link">
                Enterprise Search
              </a>
              <p>Search and discovery experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformTrigger;
