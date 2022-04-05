import React from "react";
import "./Place.css";

export default function Place2(props) {
  return (
    <>
    {/* This is the main code of Goa page*/}
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1424112908919-49d7a3e04482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt=""
        />
        <div className="bottom-left">Goa</div>
      </div>
      <div className="cards">
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://images.unsplash.com/photo-1586076920412-f37073ff5e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              Mention the word “Goa” and scenes of lazily swaying palms, golden
              sands, dread-locked-beer-swilling-hippies, dance parties and yoga
              retreats probably come to mind. This beachside jewel of India was
              established as a firm favourite on the Hippy Trail of the ’70s,
              and the rest as they say… is history. Beach shacks and cocohuts
              have been (mostly) “upgraded” to makeshift plywood and in some
              places concrete: built supposedly to attract high-rollers; only
              the high-rollers didn’t really make it. Instead, mass,
              package-tourism has floated into Goa over recent decades, leaving
              a high tide of trash behind.
              
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
            One of the best ways to experience Goa is by staying in a local home with a Goan family. Not only will you be guaranteed the best of Goan home cooking, but you also get a glimpse of the local culture, too. Many homestays are located in the North of Goa along the Konkan coast, bordering Maharashtra. You’ll also find a homestays in Panjim (Panaji) and in the south of Goa towards Karnataka. Nativefolks are a company helping travellers experience the local side of Goa and offer a mix of homestays and excursions throughout the state. 
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://images.unsplash.com/photo-1429279905410-894d3980828b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
            Even though Goa is most famous for it’s beaches and wild parties, there really is something for everyone in Goa which makes it perfect for couples and families, not just party people. There’s plenty to explore; from luxury hotels to cheap and cheerful beach huts, gourmet restaurants, mellow yoga retreats, colourful hippie markets and plenty of natural beauty spots as well as historic and cultural attractions.Goa has over 300 km of tropical coast line and all the beaches have their own special charm and character which means you will never get bored. From the empty, white sands of the beaches in the South to the action packed beaches in Calangute or hippy Arambol, mellow Morjim, colourful Palolem or secluded Cola Beach – there’s a beach to suit everyone in Goa! <br/><br/>Goa is a foodies heaven! Indian food is always a delight and Goan cuisine which fuses the flavours of Indian and Portuguese cuisines with a healthy amount of fresh seafood and tasty spices is a unique treat. But it’s not just about curry, any food you want, from anywhere in the world, you can enjoy in Goa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
