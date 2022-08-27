import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import enterpriseSearchLogo from "../logo/logo-enterprise-search-32-color.svg";
import plusIcon from "../logo/plus-icon.svg";

const ProductStart = () => {
  return (
    <section className="bg-light py-5">
      <div className=" container-md">
        <div className="mb-5">
          <h1 className="heading-primary">The products that started it all</h1>
          <p className="content__body">
            All of our solutions are powered by the speed, scale, and
            flexibility of the Elastic (ELK) Stack.
          </p>
        </div>
        <Row className="justify-content-center ">
          <Col
            lg="7"
            sm="11"
            className=" bg-white  border shadow  p-4 mt-5 position-relative"
          >
            <div className="d-md-flex d-sm-flex-column d-flex-column align-items-center">
              <div className="d-flex d- pe-lg-5 pe-md-3">
                <img
                  src={enterpriseSearchLogo}
                  className="align-self-start me-3"
                  alt="enterprise search logo"
                ></img>
                <div className="text-start">
                  <h3 className="heading-secondary">Elasticsearch</h3>
                  <p className="content__body">
                    The fast and scalable search amd analytics engine at the
                    heart of the Elastic Stack
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={plusIcon}
                  className="mx-3"
                  alt="plus icon"
                  width="30"
                ></img>
              </div>
              <div className="d-flex ps-lg-5 ps-md-3">
                <img
                  src={enterpriseSearchLogo}
                  className="align-self-start me-3"
                  alt="enterprise search logo"
                ></img>
                <div className="text-start">
                  <h3 className="heading-secondary">Kibana</h3>
                  <p className="content__body">
                    The powerful and customizable visualization layer and user
                    interface for the Elastic Stack
                  </p>
                </div>
              </div>
            </div>
            <span className="d-inline-block my-4">
              <a
                href="/"
                className="text__link-underline--normal  p-3 ps-0  stretched-link "
              >
                <span className="me-1">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="22"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </span>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProductStart;
