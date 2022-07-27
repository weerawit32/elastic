import "../css/ToggledMenu.style.css";

const ToggledMenu = () => {
    return (
        <div className=" container-sm">
            <ul className="menu__list">
                <li className="list-item"><a href="/">Products</a> <span>Products</span></li>
                <li className="list-item"><a>Customers</a></li>
                <li className="list-item"><span>Learn</span></li>
                <li className="list-item"><span>Company</span></li>
                <li className="list-item"><a>Pricing</a></li>
            </ul>
        </div>
    );
    
}

export default ToggledMenu;