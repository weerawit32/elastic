import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/moreAbout.css";

const MoreAbout = () => {
  return (
    <section className="moreAbout py-5">
      <div className=" container-md  text-center">
        <h1 className="my-5">More About Elastic</h1>
        <Row className="text-start">
          <Col md="4" sm="6" className="px-3">
            <h2 className="mb-3">We're hiring</h2>
            <p>
              Just like our products, our company finds strength in
              distribution. For us, it's critical to building a great company
              and great products.
            </p>
          </Col>
          <Col md="4" sm="6" className="px-3">
            <h2 className="mb-3">Our teams have character(s)</h2>
            <p>
              From engineering to HR, marketing, sales, finance, and legal,
              learn what makes our teams tick, which fit is right for you, and
              where opportunities await.
            </p>
          </Col>
          <Col md="4" sm="6">
            <h2 className="mb-3">Free and open, it's our heart</h2>
            <p>
              Our company is built around free and open which builds a community
              that keeps everyone honest in how we engineer products that users
              know and love. arrow-white
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MoreAbout;
