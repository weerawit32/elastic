import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import enterpriseSearchLogo from "../logo/logo-enterprise-search-32-color.svg";
import plusIcon from "../logo/plus-icon.svg";

const ProductStart = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <div className="my-4">
          <h1>The products that started it all</h1>
          <p>
            All of our solutions are powered by the speed, scale, and
            flexibility of the Elastic (ELK) Stack.
          </p>
        </div>
        <Row className="justify-content-center position-relative">
          <Col lg="9" md="11" className=" bg-white  border  p-4">
            <div className="d-md-flex d-sm-flex-column d-flex-column align-items-center">
              <div className="d-flex d- pe-lg-5 pe-md-3">
                <img
                  src={enterpriseSearchLogo}
                  className="align-self-start me-3"
                  alt="enterprise search logo"
                ></img>
                <div className="text-start">
                  <h4>Elasticsearch</h4>
                  <p>
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
                  <h3>Kibana</h3>
                  <p className="fs-6">
                    The powerful and customizable visualization layer and user
                    interface for the Elastic Stack
                  </p>
                </div>
              </div>
            </div>
            <span className="d-inline-block my-4">
              <a href="/" className="stretched-link">
                Learn more
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductStart;
