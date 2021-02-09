import '../common-styles/card.css';

import React, { useEffect, useState } from 'react';

import SupplierModal from './SupplierModal';
import { getAllSuppliers } from '../api.js'
import { useHistory } from 'react-router-dom'

function Supplier() {

    const [suppliers, setSuppliers] = useState([]);
    const [shouldOpenModal, setShouldOpenModal] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let mounted = true;
        getAllSuppliers()
            .then(items => {
                if (mounted) {
                    setSuppliers(items)
                }
            })
        return () => mounted = false;
    }, [])

    const togglePopup = () => {
        setShouldOpenModal(true);
    }

    function closeModal() {
        setShouldOpenModal(false);
    }


    return (
        <div>
            <div>
                <button onClick={togglePopup}>Add</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>

            {shouldOpenModal ?
                <SupplierModal isOpen={true} closeModal={closeModal}></SupplierModal>
                : null
            }
            <ul>
                {suppliers.map(item =>

                    <div className="container" key={item.id}>

                        <div className="card" onClick={() => { history.push('/receiversBySupplier/' + item.id) }}>
                            Street Name: <li>{item.postalAddress.streetName}</li><br />
                            Postal Code: <li>{item.postalAddress.postalCode}</li><br />
                            City: <li>{item.postalAddress.city}</li><br />
                            Name: <li>{item.name}</li><br />
                            Phone Number: <li>{item.phoneNumber}</li><br />
                            Email: <li>{item.email}</li><br />
                        </div>

                    </div>

                )}
            </ul>
        </div>
    );
}

export default Supplier;
