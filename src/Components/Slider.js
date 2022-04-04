import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './Slider.css';
export default function Slider(props) {
  return (
    <>
    <div style={{marginTop: "70px"}}>
        <Carousel fade="true" width="400px" variant={props.mode}>
  <Carousel.Item interval={1000}>
    <Link to="/place1"><img
      classNameName="d-block w-100"
      src="https://images.unsplash.com/photo-1641933002719-4c878c83f48e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3>Shimla</h3>
      <p>Live with no excuses and travel with no regrets.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Link to="/place2"><img
      classNameName="d-block w-100"
      src="https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
      alt="Second slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "white"}}>Goa</h3>
      <p style={{color: "white"}}>We travel not to escape life but for life not to escape us.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Link to="/place3"><img
      classNameName="d-block w-100"
      src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Ooty-In-Summer-cover_17th-Jan.jpg"
      alt="Third slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "black"}}>Ooty</h3>
      <p style={{color: "black"}}>Life is either a daring adventure or nothing at all.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <Link to="/place4"><img
      classNameName="d-block w-100"
      src="https://scoutmytrip.com/wp-content/uploads/2018/05/Lakes-in-Ladakh-Featured-1024x1024.jpg"
      alt="Third slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "black"}}>Ladakh</h3>
      <p style={{color: "black"}}>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <Link to="/place5"><img
      classNameName="d-block w-100"
      src="https://images.unsplash.com/photo-1577089907583-991f1ba4a03c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "white"}}>Jaisalmer</h3>
      <p style={{color: "white"}}>Stop worrying about the potholes in the road and enjoy the journey</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
    {/* ///////////////////REVIEWS/////////////////////////////// */}
        <div className="outerReview">
        <div className="reviews">
                <h1>
            Our Testimonials</h1>
            <div className="review">
                <div className="profile"><img
                        src="https://d3nn873nee648n.cloudfront.net/900x600/19008/220-SM887741.jpg"
                        alt=""/></div>
                <div className="rev"> <p className='revContent'>"The trip was wonderful!  On goa we enjoyed the pool and beach, the bonfire was outstanding, shopping in Lahaina, lots of great dinners/mai tais and just cruising around made the time pass too quickly. It was a great way to celebrate 5 years together." ~ <b>Kajal</b></p></div>
            </div>
            <div className="review">
                <div className="profile"><img
                        src="https://i.pinimg.com/564x/fd/69/f1/fd69f124744622c22bad3fcfc6036d52.jpg"
                        alt=""/></div>
                <div className="rev"> <p className='revContent'>"If there was a contest for the best travel blog, I would tell everyone to vote for them. They tell heartwarming stories and take incredible, out-of-this-world photographs. Their blog focuses on cultural travel and sustainability issues (they even work with the UN Global Sustainable Tourism Council). I focus on the nuts and bolts of going places, whereas they focus on the people. They are simply great storytellers." ~ <b>Rashmika</b></p></div>
            </div>
            <div className="review">
                <div className="profile"><img
                        src="https://i.pinimg.com/564x/4b/f7/34/4bf734cfb024b2a997ad7337e4aaf4c6.jpg"
                        alt=""/></div>
                <div className="rev"> <p className='revContent'> "What I love about Wanderlusters is the fabulous photography – taken by the blogger’s own fair hands – that perfectly captures the spirit of India.They beautifully journal their backpacking travel tales as they venture to the nooks and crannies of India, where they magically weave the magic of heritage, culture and mythology into something tangible for armchair travelers. " ~ <b>Rohit</b></p></div>
            </div>
        </div>
    </div>
    </>
  );
}
