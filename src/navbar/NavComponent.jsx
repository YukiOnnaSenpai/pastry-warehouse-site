import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";
import './Navbar.css';

function NavComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <FontAwesomeIcon icon={faBirthdayCake} className="fa-2x icon-cog" />
                            <p className="nav-link active"> SKLADIŠTE </p>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li><Link to="/employee" className="nav-link active">ZAPOSLENI</Link></li>
                            <li><Link to="/receiver" className="nav-link active">PRIJEMNICA</Link></li>
                            <li><Link to="/supplier" className="nav-link active">DOBAVLJAČ</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavComponent;