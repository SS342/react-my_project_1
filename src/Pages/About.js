import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from "react-bootstrap";
import me from "../assets/me.jpg";


class About extends Component {
    render() {
        return (
           <Container>
               <Tab.Container id={"ledt-tabs-example"} defaultActivateKey={"first"}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className={"flex-column mt-2"}>
                                <Nav.Item>
                                    <Nav.Link eventKey={"first"}> Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"second"}> Team </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"third"}> Programming </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"fourth"}> Frameworks </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"fifth"}> Libraries </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className={"mt-3"}>
                                <Tab.Pane eventKey={"first"}>
                                    <img src={me} alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel.</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey={"second"}>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel.</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey={"third"}>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel.</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey={"fourth"}>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel.</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey={"fifth"}>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, earum harum inventore, ipsam iusto
                                        libero magni maiores nihil nulla pariatur quas, reprehenderit ut vel.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        );
    }
}

export default About;