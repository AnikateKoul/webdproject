import React from "react";
import "./Place.css";

export default function Place4(props) {
  return (
    <>
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1566560073340-0ee82cb29074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div class="bottom-left">Ladakh</div>
      </div>
      <div className="cards">
        <div className={`card bg-${props.mode==='light'?'light':'dark'}`}>
          <div className="image ">
            <img
              src="https://i.pinimg.com/originals/7f/62/8d/7f628daeff85825989a0d30a89d7b260.jpg"
              alt=""
            />
          </div>
          <div className={`text text-${props.mode==='light'?'dark':'light'}`}>
            <h1 className="">Ladakh</h1>
            <p>
            Going on a holiday to a charming land like Ladakh is surely an experience of a lifetime. So, why would you want to miss out on anything best there? With the world's two mightiest mountain ranges- the Himalayas & the Karakoram, 3 highest motorable raods- Chang La, Khardung La, & Tanglang La, desert mountains, gorgeous night skies, rainbows, Tibetan monasteries, flowers, lakes, rainbow hills, & the most stunning landscapes, Ladakh is bound to be one of the most epic journeys you can take in India.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode==='light'?'light':'dark'}`}>
          <div className="image ">
            <img
              src="https://i.pinimg.com/originals/7f/62/8d/7f628daeff85825989a0d30a89d7b260.jpg"
              alt=""
            />
          </div>
          <div className={`text text-${props.mode==='light'?'dark':'light'}`}>
            <h1 className="">Ladakh</h1>
            <p>
            The town offers a good variety of the Tibetan cuisine, so that's a must try. Head to The Tibetan Kitchen & the Lamayuru Restaurant for delicacies like Thukpa, Shabakley, Momos, & more. Try the Yak Cheese, a local delicacy which is rare & delicious. Monasteries, rivers, valleys, lakes, villages and museums – this place is a confluence of so many popular and awesome things. Here’s a list of the top places in Leh Ladakh for a fantastic vacation. Most of the tourist attractions are now open in Ladakh and some of the best places to visit in Ladakh are Khardung-la Pass, Nubra Valley, Magnetic Hill, and Royal Leh Palace.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode==='light'?'light':'dark'}`}>
          <div className="image ">
            <img
              src="https://images.unsplash.com/photo-1583143874828-de3d288be51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzc29vcmllJTJDJTIwaW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div className={`text text-${props.mode==='light'?'dark':'light'}`}>
            <h1 className="">Ladakh</h1>
            <p>
            It is advisable to visit Ladakh during the dry season, which is from April to June. You can feel some sunshine and heat during the day. The summer season is the best time to travel here by all ages of people. You can go exploring the glaciers, Indus River, trekking in its mountain pass and valleys. Ladakh is open for domestic travel and travelers can board a flight from all major states in India including Delhi, Kolkata, and Bangalore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

