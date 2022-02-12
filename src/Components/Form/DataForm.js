import React from 'react'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Form, Col, Row } from 'react-bootstrap'

export default function DataForm() {
    return (

        <div className='background-overlay d-flex justify-content-center align-items-center'>
            <Form className='rounded p-4 p-sm-4'>
                <h1 className='font-weight-bold text-center pb-4'>
                    Data Form
                </h1>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formCompanyName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyMobile">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Contact Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="number" placeholder="Enter Postal Code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyWHours">
                    <Form.Label>Working Hours</Form.Label>
                    <Form.Control type="number" placeholder="Enter Working Hours" />
                </Form.Group>
                <Button type="submit" className='btn-lg btn-dark btn-span'>
                    Add
                </Button>
            </Form>
        </div>

        // Address
        // City Street/Avenue Postal Code


    );
}