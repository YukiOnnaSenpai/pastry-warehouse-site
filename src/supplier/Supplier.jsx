import '../common-styles/card.css';

import React, { useEffect, useState } from 'react';

import SupplierModal from './SupplierModal';
import { getAllSuppliers } from '../api.js';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

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
        <div className="card d-flex flex-wrap">
            <div className="card-body">
                {shouldOpenModal ?
                    <SupplierModal isOpen={true} closeModal={closeModal}></SupplierModal>
                    : null
                }
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Redni broj</th>
                            <th scope="col">Ulica</th>
                            <th scope="col">Poštanski broj</th>
                            <th scope="col">Grad</th>
                            <th scope="col">Naziv</th>
                            <th scope="col">Telefon</th>
                            <th scope="col">Email</th>
                            <th scope="col">Opcije</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map((item, i) =>
                            <tr key={i}>
                                <th scope="row" onClick={() => { history.push('/receiversBySupplier/' + item.id) }}>{item.id}</th>
                                <td>{item.postalAddress.streetName}</td>
                                <td>{item.postalAddress.postalCode}</td>
                                <td>{item.postalAddress.city}</td>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td><FontAwesomeIcon icon={faPlus} onClick={togglePopup} /> <FontAwesomeIcon icon={faPen} onClick={togglePopup} /> <FontAwesomeIcon icon={faTrash} onClick={togglePopup} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Supplier;
