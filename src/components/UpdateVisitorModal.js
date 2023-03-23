import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateVisitor } from '../services/VisitorsService';



const UpdateVisitorModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateVisitor(props.visitor.visitorId, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Visitor");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Visitor Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="FirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="FirstName" required defaultValue={props.visitor.FirstName} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="LastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="LastName" required defaultValue={props.visitor.LastName} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="RegisterNum">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="RegisterNumber" required defaultValue={props.visitor.RegisterNumber} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="Email" required defaultValue={props.visitor.Email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="PhoneNumber">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="PhoneNumber" required defaultValue={props.visitor.PhoneNumber} placeholder="" />
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


export default UpdateVisitorModal;
