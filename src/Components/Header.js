import React, { Component } from 'react';
import { Button, FormControl, Navbar } from "react-bootstrap";
import logo from "./logo512.png"
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";


import Home  from "../Pages/Home";
import About  from "../Pages/About";
import Contacts  from "../Pages/Contacts";




class Header extends Component {
    render() {
        return (
            <>
                <Navbar  collapseOnSelect expand={ "md"} bg={ "dark"} variant={ "dark"}>
                    <Container>
                        <Navbar.Brand href={ "/"}>

                            <img src={logo} alt="logo" height={ 30} width={ 30} className={ "d-inline-block align-top"} /> React Site

                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls={ "responsive-navbar-nav"}/>

                        <Navbar.Collapse id={ "responsive-navbar-nav"}>
                            <Nav className={ "mr-auto"}>
                                <Nav.Link href={ "/" }> Home </Nav.Link>
                                <Nav.Link href={ "/about" }> About us </Nav.Link>
                                <Nav.Link href={ "/contacts" }> Contacts </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Form inline>
                            <FormControl type={ "text"} placeholder={ "Search"} className={ "mr-sm-2"} />

                        </Form>
                        <Button variant={ "outline-info"}> Search </Button>

                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path={ "/" } component={Home}/>
                        <Route exact path={ "/about" } component={About}/>
                        <Route exact path={ "/contacts" } component={Contacts}/>
                    </Switch>
                </Router>
            </>

        );
    }
}

export default Header;