const CompanyDetail = ({ toggleCompany }) => {
  return (
    <div className="platform__conatainer  bg-white text-start">
      <div
        className="platform__header py-3 border-bottom "
        onClick={() => toggleCompany()}
      >
        Company
      </div>
      <div className="p-4  pt-2 bg-white  first-column">
        <h6 className="topic__heading text-muted">About Elastic</h6>
        <div className="link__panel bg-white p-1 pe-5  ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              About
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Careers
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Press
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Partners
            </a>
          </div>
        </div>
        <div className="link__panel bg-white p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Investor Relations
            </a>
          </div>
        </div>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Elastic Excellence Awards
            </a>
          </div>
        </div>
      </div>

      <div className="p-4  pt-2 third-column bg-white  ">
        <h6 className="topic__heading text-muted">Featured </h6>
        <div className="link__panel bg-white  p-1 pe-5 ">
          <div className="">
            <a href="/" className="platform__link stretched-link ">
              Why now is the time tomove critical database to the cloud
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
