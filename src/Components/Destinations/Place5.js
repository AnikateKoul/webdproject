import React from "react";
import "./Place.css";

export default function Place5(props) {
  return (
    <>
    {/* This is the main page of the Jaisalmer page */}
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1600871215197-c68059ada01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"
          alt=""
        />
        <div className="bottom-left">Jaisalmer</div>
      </div>
      <div className="cards">
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/f6dogpfgq9nbowtwmh2z2t91o0qu_1574494280_shutterstock_329467904.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              Jaisalmer is located in the middle of the Thar desert, the Great
              Indian desert, and almost all of the buildings and temples are
              made out of finely sculptured sandstone. This is also how
              Jaisalmer got its nickname of “The Golden City of India”. But this
              gem of a city should be on everyone’s radar! Go on sunset tour
              through the vast Thar desert, relax in the comforts of an
              authentic havelli or sip some tea on a roof top terrace
              overlooking the city. There are so many unique and epic things to
              do in Jaisalmer and we guarantee that you’ll immediately fall in
              love with this city!
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/Jaisalmer-Monsoon-Cover.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
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
              src="https://hikerwolf.com/wp-content/uploads/2020/04/top-10-Jaisalmer-Header.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              Spring is the best time to be in Jaisalmer because then the
              temperature during the day is not too hot and nights are not too
              cold. When you are in Jaisalmer you must try their local cuisines
              and “chat” at the nook of the roads. Some of the recommended
              restaurants are Café de Kuku for its exotic cold coffee, The Seven
              Spice Restaurant, which specializes in Indian and Tibetan cuisine
              and the local cuisines of Jaisalmer, which includes a menu like
              Kadhi Pakora,vegetable kebabs, Gatte Ki Sabzi, and kulfi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
