import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container} from "react-bootstrap";
import Time from "../functions/time"

export default class Home extends Component {
    render() {
        return (
            <Container marigin-top={"auto"}>
                <CarouselBox/>
                <Time/>
            </Container>

        );
    }
}

