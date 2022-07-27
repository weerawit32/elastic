import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/esm/Button';
import elasticSearchLogo from "../logo/logo-elasticsearch-32-color.svg";
import plusIcon from "../logo/plus-icon.svg"
import "../css/productTrigger.css"

function ProductTrigger() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props} >
        <div className=' tooltiptext tooltip__container-products d-flex   text-start p-3' style={{width: "800px"}}>
          <div className='me-4'>
              <p className='fs-6 fw-bold text-muted mb-5'>SOLUTIONS</p>
            <div>
              <img src={elasticSearchLogo} alt="elastic search logo"></img>
              <p className='fw-bold mt-3'>Elastic Enterprise Search</p>
              <p>Workplace, website, and app search</p>
            </div>
            <div>
              <img src={elasticSearchLogo} alt="elastic search logo"></img>
              <p className='fw-bold mt-3'>Elastic Observability</p>
              <p>Unified logs, metrics, and APM data</p>
            </div>
            <div>
              <img src={elasticSearchLogo} alt="elastic search logo"></img>
              <p className='fw-bold mt-3'>Elastic Security</p>
              <p>SIEM, endpoint, and threat hunting</p>
            </div>
          </div>
          <div className='me-4'>
              <p className='fs-6 fw-bold text-muted'>ELASTIC (ELK) STACK</p>
            <div className='border p-3'>

            <div>
              <img src={elasticSearchLogo} alt="elastic search logo"></img>
              <p className='fw-bold mt-3'>Elastic Enterprise Search</p>
              <p>Workplace, website, and app search</p>
            </div>
            <div >
                <img src={plusIcon} alt="plus icon" width="30"></img>
            </div>
            <div>
              <img src={elasticSearchLogo} alt="elastic search logo"></img>
              <p className='fw-bold mt-3'>Elastic Observability</p>
              <p>Unified logs, metrics, and APM data</p>
            </div>
            <div>
              <img src={elasticSearchLogo} alt="elastic search logo"></img>
              <p className='fw-bold mt-3'>Elastic Security</p>
              <p>SIEM, endpoint, and threat hunting</p>
            </div>
            </div>
          </div>
        </div>
      </Tooltip>
    );
  
    return (
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <p className='tooltip'>Products</p>
      </OverlayTrigger>
    );
  }
  
  export default ProductTrigger;