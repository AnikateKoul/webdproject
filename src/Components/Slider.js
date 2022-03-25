import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
export default function Slider(props) {
  return (
    <div style={{marginTop: "70px"}}>
        <Carousel fade="true" width="400px" variant={props.mode}>
  <Carousel.Item interval={1000}>
    <Link to="/place1"><img
      className="d-block w-100"
      src="https://imageio.forbes.com/specials-images/dam/imageserve/1139828965/960x0.jpg?fit=bounds&format=jpg&width=720"
      alt="First slide"
    /></Link>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Link to="/place2"><img
      className="d-block w-100"
      src="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/960x0.jpg?fit=bounds&format=jpg&width=720"
      alt="Second slide"
    /></Link>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Link to="/place3"><img
      className="d-block w-100"
      src="https://imageio.forbes.com/specials-images/dam/imageserve/1166259909/960x0.jpg?fit=bounds&format=jpg&width=720"
      alt="Third slide"
    /></Link>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <Link to="/place4"><img
      className="d-block w-100"
      src="https://imageio.forbes.com/specials-images/dam/imageserve/1166259909/960x0.jpg?fit=bounds&format=jpg&width=720"
      alt="Third slide"
    /></Link>
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <Link to="/place5"><img
      className="d-block w-100"
      src="https://imageio.forbes.com/specials-images/dam/imageserve/1166259909/960x0.jpg?fit=bounds&format=jpg&width=720"
      alt="Third slide"
    /></Link>
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
  );
}
