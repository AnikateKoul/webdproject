import React from "react";
import "./Place.css";

export default function Place5(props) {
  return (
    <>
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1600871215197-c68059ada01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"
          alt=""
        />
        <div class="bottom-left">Jaisalmer</div>
      </div>
      <div className="cards">
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://i.pinimg.com/originals/7f/62/8d/7f628daeff85825989a0d30a89d7b260.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <h1 className="">Jaisalmer</h1>
            <p>
              Jaisalmer is located in the middle of the Thar desert, the Great
              Indian desert, and almost all of the buildings and temples are
              made out of finely sculptured sandstone. This is also how
              Jaisalmer got its nickname of “The Golden City of India”.
              Jaisalmer is right next to the Pakistan border and the climate can
              be pretty unforgiving at times with temperatures rising up to
              45°C. But this gem of a city should be on everyone’s radar! Go on
              sunset tour through the vast Thar desert, relax in the comforts of
              an authentic havelli or sip some tea on a roof top terrace
              overlooking the city. There are so many unique and epic things to
              do in Jaisalmer and we guarantee that you’ll immediately fall in
              love with this city!
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://i.pinimg.com/originals/7f/62/8d/7f628daeff85825989a0d30a89d7b260.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <h1 className="">Jaisalmer</h1>
            <p>
              The city offers everything for every budget. You may like to book
              a specific tour and would just like to sit back and relax while
              they take care of everything else but still you must know what
              they are offering and what probable things you would be missing
              out on. Otherwise, you can book every tit and bit at your budget
              to make this trip budget-friendly and you will get to see the soul
              of the city and not just the highlights, by staying close to the
              locales.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://images.unsplash.com/photo-1583143874828-de3d288be51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzc29vcmllJTJDJTIwaW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <h1 className="">Jaisalmer</h1>
            <p>
              Spring is the best time to be in Jaisalmer because then the
              temperature during the day is not too hot and nights are not too
              cold. <br />
              When you are in Jaisalmer you must try their local cuisines and
              “chat” at the nook of the roads. Many restaurants would suffice
              your food with the musicians playing cool Rajasthani songs on
              their violins. Another way to enjoy the food in the city is to
              explore the market and try different cuisines there. Some of the
              recommended restaurants are Café de Kuku for its exotic cold
              coffee, The Seven Spice Restaurant, which specializes in Indian
              and Tibetan cuisine and the local cuisines of Jaisalmer, which
              includes a menu like Kadhi Pakora, bharwan aloo, vegetable kebabs,
              Gatte Ki Sabzi, and kulfi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
