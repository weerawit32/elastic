import "../css/component/ToggledMenu.style.css";
// import { useState } from "react";

const ToggledMenu = ({togglePlatform}) => {
    // const [platformIsopen, setPlatformIsopen] = useState(false);

    return (
        <div className=" container-lg">
            <ul className="menu__list">
                <li className="list-item py-3" onClick={() => togglePlatform()}>
                    <p>Platform</p> <span>Products</span>
                </li>
                <li className="list-item"><a>Customers</a></li>
                <li className="list-item position-relative"><a href="/" className="stretch-link">Pricing</a></li>
                <li className="list-item"><span>Company</span></li>
                <li className="list-item"><a>Pricing</a></li>
            </ul>
        </div>
    );
    
}

export default ToggledMenu;