import React from "react";
import "./Place.css";

export default function Place4(props) {
  return (
    <>
    {/* This is the main code of the Ladakh page */}
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="bottom-left">Ladakh</div>
      </div>
      <div className="cards">
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://www.thrillophilia.com/blog/wp-content/uploads/2017/05/how-to-reach-ladakh-1.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              Going on a holiday to a charming land like Ladakh is surely an
              experience of a lifetime. So, why would you want to miss out on
              anything best there? With the world's two mightiest mountain
              ranges- the Himalayas & the Karakoram, 3 highest motorable raods-
              Chang La, Khardung La, & Tanglang La, desert mountains, gorgeous
              night skies, rainbows, Tibetan monasteries, flowers, lakes,
              rainbow hills, & the most stunning landscapes, Ladakh is bound to
              be one of the most epic journeys you can take in India.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://scoutmytrip.com/wp-content/uploads/2018/05/Lakes-in-Ladakh-Featured-1024x1024.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              The town offers a good variety of the Tibetan cuisine, so that's a
              must try. Head to The Tibetan Kitchen & the Lamayuru Restaurant
              for delicacies like Thukpa, Shabakley, Momos, & more. Try the Yak
              Cheese, a local delicacy which is rare & delicious. Monasteries,
              rivers, valleys, lakes, villages and museums – this place is a
              confluence of so many popular and awesome things. Here’s a list of
              the top places in Leh Ladakh for a fantastic vacation. Most of the
              tourist attractions in Ladakh are Khardung-la Pass, Nubra Valley,
              Magnetic Hill, and Royal Leh Palace.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://www.re-thinkingthefuture.com/wp-content/uploads/2020/12/A2315-10-Things-to-remember-when-designing-in-Ladakh.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              It is advisable to visit Ladakh during the dry season, which is
              from April to June. You can feel some sunshine and heat during the
              day. The summer season is the best time to travel here by all ages
              of people. You can go exploring the glaciers, Indus River,
              trekking in its mountain pass and valleys. Ladakh is open for
              domestic travel and travelers can board a flight from all major
              states in India including Delhi, Kolkata, and Bangalore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
