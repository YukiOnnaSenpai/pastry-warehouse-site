import { BrowserRouter as Router, Route } from "react-router-dom";

import './Home.css';
import Employee from '../employee/Employee';
import Receiver from '../receiver/Receiver';
import Supplier from '../supplier/Supplier';
import NavComponent from '../navbar/NavComponent';
import ReceiversBySupplier from '../receiver/ReceiversBySupplier';

function Home() {
    return (
        <Router>
            <Route path="/" component={NavComponent} />
            <Route path="/employee" component={Employee} />
            <Route path="/receiver" component={Receiver} />
            <Route path="/supplier" component={Supplier} />
            <Route exact path="/receiversBySupplier/:supplierId" component={ReceiversBySupplier} />

        </Router>
    );
}

export default Home;

