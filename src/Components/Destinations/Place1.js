import React from "react";
import "./Place.css";

export default function Place1(props) {
  return (
    <>
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1489933504786-389c51eb1b7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt=""
        />
        <div class="bottom-left">Shimla</div>
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
            <h1 className="">Shimla</h1>
            <p>
              Breathtaking landscapes, colossal mountains, bustling markets,
              upscale hotels and restaurants, and pleasant weather all year
              round. Shimla has everything that makes it a popular retreat to
              beat the scorching summers of North India. With its peak tourist
              season during the summers, Shimla also witnesses a huge tourist
              footfall during the winter. This is because it is one of the few
              places in India which witnesses a subsequent amount of snowfall.
              So, satisfy your craze for a white winter as you embark on a
              journey to witness snowfall in Shimla.
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
            <h1 className="">Shimla</h1>
            <p>
              The temperature varies between 0°C to 10°C during snowfall in
              Shimla. The average temperature is on a higher side at the time of
              snowfall but drops sharply when it stops. This is because of the
              freezing winds that blow throughout the region. Tourists can enjoy
              the chilly winters at popular spots in and around Shimla such as
              the Mall Road, Kufri, Scandal Point, Jakhoo Peak, and more such
              places.
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
            <h1 className="">Masoori</h1>
            <p>
              Being a popular tourist hotspot of the country, Shimla boasts of
              numerous tourist attractions which need a minimum of 3 days and 2
              nights to be explored. If you are planning a trip to witness
              snowfall in Shimla then a weekend would be sufficient to traverse
              through this picturesque hill town. Travelers can also book a 2
              night 3 days Shimla Tour Package which would help them to explore
              the town in a planned, and organised manner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
