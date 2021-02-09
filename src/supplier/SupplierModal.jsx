import Modal from 'react-modal';
import React from 'react';
import { postSupplier } from '../api.js'
import { useForm } from "react-hook-form";

function SupplierModal(props) {


    const { register, handleSubmit } = useForm();


    const newSupplier = data => {

        const postalAddress = {streetName: data.streetName, postalCode: data.postalCode, city: data.city};
        
        postSupplier(JSON.stringify({
            postalAddress: postalAddress,
            name: data.name,
            phoneNumber: data.phoneNumber,
            email: data.email
        }));
    }


    const customStyles = {
        content: {
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '60%',
            transform: 'translate(-40%, -10%)',
        },
    };

    return (
        <div>

            <Modal
                isOpen={props.isOpen}
                onAfterOpen={props.onAfterOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmit(newSupplier)}>
                    <div className="popup"></div>
                    <div className="popup\_inner">
                        <label> Insert Street Name<br />
                            <input
                                name="streetName"
                                ref={register}
                            /></label><br />
                        <label> Insert Postal Code <br />
                            <input
                                name="postalCode"
                                ref={register}
                            /></label><br />
                        <label> Insert City <br />
                            <input
                                name="city"
                                ref={register}
                            /></label><br />
                        <label> Insert Name <br />
                            <input
                                name="name"
                                ref={register}
                            /></label><br />
                        <label> Insert Phone Number <br />
                            <input
                                name="phoneNumber"
                                ref={register}
                            /></label><br />
                        <label> Insert Email <br />
                            <input
                                name="email"
                                ref={register}
                            /></label><br />
                    </div>
                    <br />
                    <div className="button-section">
                        <input type="submit" value="Validiraj" />&nbsp;
                        <button onClick={props.closeModal}>close</button>
                    </div>

                </form>
            </Modal>

        </div>
    );
}

export default SupplierModal;