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
      src="https://images.unsplash.com/photo-1500614922032-b6dd337b1313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
      src="https://images.unsplash.com/photo-1593118845043-359e5f628214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
      <h3>Jaisalmer</h3>
      <p>Stop worrying about the potholes in the road and enjoy the journey</p>
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
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""/></div>
                <div className="rev"> <p className='revContent'>"The trip was wonderful!  On Maui we enjoyed the pool and beach, the LeLe Luau was outstanding, I play the Kaanapali Kai golf course, shopping in Lahaina, lots of great dinners/mai tais and just cruising around the island made the time pass too quickly. It was a great way to celebrate 5 years together." ~ <b>Jenny</b></p></div>
            </div>
            <div className="review">
                <div className="profile"><img
                        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""/></div>
                <div className="rev"> <p className='revContent'>"If there was a contest for the best travel blog, I would tell everyone to vote for me. Then I would go vote for Audrey and Dan. They tell heartwarming stories and take incredible, out-of-this-world photographs. Their blog focuses on cultural travel and sustainability issues (they even work with the UN Global Sustainable Tourism Council). I focus on the nuts and bolts of going places, whereas they focus on the people. They are simply great storytellers." ~ <b>Jake</b></p></div>
            </div>
            <div className="review">
                <div className="profile"><img
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""/></div>
                <div className="rev"> <p className='revContent'> "While I read many travel-hacking blogs, I visit this one reguarly because they provides industry analysis and behind-the-scenes information on loyalty programs and airlines. They don’t just provide trip reports or share deals and reward opportunities, they gives you context and a greater understanding of how travel hacking and airlines operate." ~ <b>Alex</b></p></div>
            </div>
        </div>
    </div>
    </>
  );
}
