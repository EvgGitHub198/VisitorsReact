import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addVisitor } from '../services/VisitorsService';


const AddVisitorModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addVisitor(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Visitor");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Visitor Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="FirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="FirstName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="LastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="LastName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="RegisterNumber">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="RegisterNumber" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="Email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="PhoneNumber">
                                    <Form.Label>PhoneNumber</Form.Label>
                                    <Form.Control type="text" name="PhoneNumber" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddVisitorModal;