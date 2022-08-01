import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/moreAbout.css";

const MoreAbout = () => {
  return (
    <section className="moreAbout py-5">
      <div className=" container-md  text-center ">
        <h1 className="my-5">More About Elastic</h1>
        <Row className="text-start">
          <Col md="4" sm="6" className="px-3 position-relative d-flex flex-column justify-content-between">
            <div>
              <h2 className="mb-3">We're hiring</h2>
            <p>
              Just like our products, our company finds strength in
              distribution. For us, it's critical to building a great company
              and great products.
            </p>
            </div>
            
            <a
                href="/"
                className="text__link-underline link-dark stretched-link  p-3 ps-0 "
              >
              
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
          </Col>
          <Col md="4" sm="6" className="px-3 position-relative d-flex flex-column justify-content-between">
            <div>
              <h2 className="mb-3">Our teams have character(s)</h2>
            <p>
              From engineering to HR, marketing, sales, finance, and legal,
              learn what makes our teams tick, which fit is right for you, and
              where opportunities await.
            </p>
            </div>
            
            <a
                href="/"
                className="text__link-underline link-dark stretched-link  p-3 ps-0 "
              >
              
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
          </Col>
          <Col md="4" sm="6" className="position-relative d-flex flex-column justify-content-between">
            <div>
              <h2 className="mb-3">Free and open, it's our heart</h2>
            <p>
              Our company is built around free and open which builds a community
              that keeps everyone honest in how we engineer products that users
              know and love. arrow-white
            </p>
            </div>
            
            <a
                href="/"
                className="text__link-underline link-dark stretched-link  p-3 ps-0 "
              >
              
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
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MoreAbout;
