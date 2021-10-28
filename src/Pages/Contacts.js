import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: "500px"}}>
                <h1 className={"text-center"}>Contact Us</h1>
                <Form>
                    <Form.Group controlId={"formBasicEmail"}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type={"email"} placeholder={"Enter email"}/>
                        <Form.Text>
                            We'll never share you email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId={"formBasicPassword"}>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as={"textarea"} rows={3}/>
                    </Form.Group>

                    <Form.Group controlId={"formBasicCheckbox"}>

                        <Form.Check type={"checkbox"} label={"Check me out"}/>


                        <Button variant={"primary"} type={"submit"}>Submit</Button>

                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

