import React, {Component} from 'react';
import Carousel  from "react-bootstrap/Carousel";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import me from "../assets/me.jpg";
import {Container} from "react-bootstrap";

class CarouselBox extends Component {
    render() {
        return (
            <Container vertical-align={"middle"} >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className={"d-block w-100"}
                            src={ image1 }
                            alt = "Coder1"

                        />
                        <Carousel.Caption>
                            <h3>Ёжки макарошки</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"d-block w-100"}
                            src={ image2 }
                            alt = "Coder2"
                        />
                        <Carousel.Caption>
                            <h3>Ёбушки воробушки</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"d-block w-100"}
                            src={ image3 }
                            alt = "Code"
                        />
                        <Carousel.Caption>
                            <h3>Ёлки Иголки</h3>
                            <h3>Неровезло, неповезло</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>

        );
    }
}

export default CarouselBox;