const UseCaseDetail = ({ toggleUsecases }) => {
  return (
    <div className="platform__conatainer  bg-white text-start">
      <div
        className="platform__header py-3 border-bottom "
        onClick={() => toggleUsecases()}
      >
        Use cases
      </div>
      <div className="p-4  pt-2 bg-white  first-column">
        <h6 className="topic__heading text-muted">By topic</h6>
        <div className="link__panel bg-white p-1 pe-5  ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Improving digital customer experiecesn
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Evolving the DevOps lifecycle
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Security without limits
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              View all topics
            </a>
          </div>
        </div>
      </div>
      <div className="p-4  pt-2 bg-white second-column">
        <h6 className="topic__heading text-muted">By inductry</h6>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Public Sector
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Financial Services
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Telecommunications
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5  ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Healthcare
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Technology
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5   ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Retail and Ecommerce
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5   ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Media and Entertainment
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5   ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Manufacturing and Automotive
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5   ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              View all industries
            </a>
          </div>
        </div>
      </div>
      <div className="p-4  pt-2 third-column  bg-white">
        <h6 className="topic__heading text-muted">Featured</h6>
        <div className="link__panel bg-white p-1 pe-5   ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Secret ingredient for better website experiences
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDetail;
