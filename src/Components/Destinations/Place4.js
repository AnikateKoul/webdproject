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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a
              dolorem repellendus eius, pariatur facere rerum perspiciatis ex
              tenetur sit harum veniam, ad quos nobis sunt iste iusto velit
              mollitia nemo cupiditate nisi, possimus quaerat. Harum, ipsa?
              Blanditiis, maiores ipsa voluptates nisi doloribus est modi vero
              fugiat tenetur soluta fugit amet excepturi voluptatum nostrum
              molestias repudiandae dicta illum sit dignissimos. Commodi
              mollitia repellendus veniam dignissimos molestias nemo, eaque
              perspiciatis quod amet cupiditate repudiandae officiis assumenda,
              minima velit! Recusandae quaerat sapiente, sed et sequi nam ea
              reprehenderit impedit quas quod, adipisci architecto voluptas.
              Praesentium beatae sit, error dolorum at sint. Similique!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a
              dolorem repellendus eius, pariatur facere rerum perspiciatis ex
              tenetur sit harum veniam, ad quos nobis sunt iste iusto velit
              mollitia nemo cupiditate nisi, possimus quaerat. Harum, ipsa?
              Blanditiis, maiores ipsa voluptates nisi doloribus est modi vero
              fugiat tenetur soluta fugit amet excepturi voluptatum nostrum
              molestias repudiandae dicta illum sit dignissimos. Commodi
              mollitia repellendus veniam dignissimos molestias nemo, eaque
              perspiciatis quod amet cupiditate repudiandae officiis assumenda,
              minima velit! Recusandae quaerat sapiente, sed et sequi nam ea
              reprehenderit impedit quas quod, adipisci architecto voluptas.
              Praesentium beatae sit, error dolorum at sint. Similique!
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
            <h1 className="">Masoori</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a
              dolorem repellendus eius, pariatur facere rerum perspiciatis ex
              tenetur sit harum veniam, ad quos nobis sunt iste iusto velit
              mollitia nemo cupiditate nisi, possimus quaerat. Harum, ipsa?
              Blanditiis, maiores ipsa voluptates nisi doloribus est modi vero
              fugiat tenetur soluta fugit amet excepturi voluptatum nostrum
              molestias repudiandae dicta illum sit dignissimos. Commodi
              mollitia repellendus veniam dignissimos molestias nemo, eaque
              perspiciatis quod amet cupiditate repudiandae officiis assumenda,
              minima velit! Recusandae quaerat sapiente, sed et sequi nam ea
              reprehenderit impedit quas quod, adipisci architecto voluptas.
              Praesentium beatae sit, error dolorum at sint. Similique!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

