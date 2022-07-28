import "../css/component/platformDetail.style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlatformDetail = ({togglePlatform}) => {
    return (
        <div className="platform__conatainer  bg-white text-start">
            <Row>
                <Col>
                <div className="platform__header py-3 border-bottom " onClick={() => togglePlatform()}><h4>Platform</h4></div>
                    <p className="topic my-5 text-muted fs-4">ADDITIONAL RESOURCES</p>
                    <ul className="platform__list text-start">
                        <li className="platform__item">Elastic Clound</li>
                        <li className="platform__item">View pricing</li>
                        <li className="platform__item">Free trial and downloads</li>
                        <li className="platform__item">View all integrations</li>


                    </ul>
                </Col>
            </Row>
            
        </div>
    );
}

export default PlatformDetail;