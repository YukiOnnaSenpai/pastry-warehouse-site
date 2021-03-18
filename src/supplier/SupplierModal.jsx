import Modal from 'react-modal';
import React from 'react';
import { postSupplier } from '../api.js'
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';

function SupplierModal(props) {


    const { register, handleSubmit } = useForm();


    const newSupplier = data => {

        const postalAddress = { streetName: data.streetName, postalCode: data.postalCode, city: data.city };

        postSupplier(JSON.stringify({
            postalAddress: postalAddress,
            name: data.name,
            phoneNumber: data.phoneNumber,
            email: data.email
        }));
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <Modal isOpen={props.isOpen} closeModal={props.closeModal} backdrop="static"
                    keyboard={false} ariaHideApp={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dodaj dobavljaca</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group onSubmit={handleSubmit(newSupplier)}>
                            <Form.Label>Ulica: </Form.Label>
                            <Form.Control type="text" name="streetName" ref={register} />
                            <Form.Label>Postanski kod: </Form.Label>
                            <Form.Control type="text" name="postalCode" ref={register} />
                            <Form.Label>Grad: </Form.Label>
                            <Form.Control type="text" name="city" ref={register} />
                            <Form.Label>Naziv: </Form.Label>
                            <Form.Control type="text" name="name" ref={register} />
                            <Form.Label>Broj telefona: </Form.Label>
                            <Form.Control type="text" name="phoneNumber" ref={register} />
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" name="email" ref={register} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.closeModal}>
                            Zatvori</Button>
                        <Button variant="primary" type="submit">
                            Scuvaj promene</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default SupplierModal;