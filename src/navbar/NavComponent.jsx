import { NavLink as Link } from "react-router-dom";
import './Navbar.css';

function NavComponent() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul className="nav nav-pills">
                    <li><Link to="/employee" activeClassName="active">Employee</Link></li>
                    <li><Link to="/receiver" activeClassName="active">Receiver</Link></li>
                    <li><Link to="/supplier" activeClassName="active">Supplier</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default NavComponent;