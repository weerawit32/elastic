import "../css/component/useCasesTrigger.style.css";

const UsecasesTrigger = () => {
  return (
    <div className="tooltips">
      Use cases
      <div className=" tooltiptext d-flex p-4 pt-2 shadow">
        <div className="px-4 border-end first-column">
          <h6 className="topic__heading text-muted">By topic</h6>
          <div className="link__panel p-1 pe-5  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Improving digital customer experiecesn
              </a>
              <p className="description text-muted">
                Connecting people with content that matters
              </p>
            </div>
          </div>
          <div className="link__panel p-1 pe-5">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Evolving the DevOps lifecycle
              </a>
              <p className="description text-muted">
                Building better applicationis efficiently and at scale
              </p>
            </div>
          </div>
          <div className="link__panel p-1 pe-5 ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Security without limits
              </a>
              <p className="description text-muted">
                Limitless visibility, analytics, and response capabilities
              </p>
            </div>
          </div>

          <a
            href="/"
            className="text__link-underline text-muted fs-6 fw-bold align-center"
          >
            View all topics
          </a>
        </div>
        <div className="px-4 second-column">
          <h6 className="topic__heading text-muted">By inductry</h6>
          <div className="link__panel  p-1 pe-5 postion-relative  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Public Sector
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Financial Services
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5 ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Telecommunications
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5  ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Healthcare
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Technology
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5   ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Retail and Ecommerce
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5   ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Media and Entertainment
              </a>
            </div>
          </div>
          <div className="link__panel  p-1 pe-5   ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Manufacturing and Automotive
              </a>
            </div>
          </div>
          <a
            href="/"
            className="text__link-underline text-muted fs-6 fw-bold align-center"
          >
            View all industries
          </a>
        </div>
        <div className="ps-4 third-column  bg-light">
          <h6 className="topic__heading text-muted">Featured</h6>
          <div className="link__panel p-1 pe-5   ">
            <div className="">
              <a href="/" className="platform__link stretched-link ">
                Secret ingredient for better website experiences
              </a>
              <p className="description text-muted">
                Boost conversations, lower bounce rates, and conquer abandonded
                shopping carts
              </p>
            </div>
          </div>
          <a
            href="/"
            className="text__link-underline d-block p-3 ps-0 border-bottom"
          >
            <span>downloads ebook</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsecasesTrigger;
