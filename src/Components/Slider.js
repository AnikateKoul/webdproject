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
      src="https://images.unsplash.com/photo-1641933002719-4c878c83f48e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    /></Link>
    <Carousel.Caption>
      <h3>Shimla</h3>
      <p>Live with no excuses and travel with no regrets.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Link to="/place2"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
      alt="Second slide"
    /></Link>
    <Carousel.Caption>
      <h3>Goa</h3>
      <p>We travel not to escape life but for life not to escape us.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Link to="/place3"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1500614922032-b6dd337b1313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    /></Link>
    <Carousel.Caption>
      <h3>Ooty</h3>
      <p>Life is either a daring adventure or nothing at all.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <Link to="/place4"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1593118845043-359e5f628214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    /></Link>
    <Carousel.Caption>
      <h3>Ladakh</h3>
      <p>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <Link to="/place5"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1577089907583-991f1ba4a03c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    /></Link>
    <Carousel.Caption>
      <h3>Jaisalmer</h3>
      <p>Stop worrying about the potholes in the road and enjoy the journey</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
  );
}
