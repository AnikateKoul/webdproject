import React from "react";
import "./Place.css";

export default function Place3(props) {
  return (
    <>
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1597165253287-d06597132da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div class="bottom-left">Ooty</div>
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
            <h1 className="">Ooty</h1>
            <p>
              The quaint and quiet hill station of Ooty in Tamil Nadu is one of
              the most popular mountain destinations in South India.
              Traditionally called Udhagamandalam or Ootacamund, abbreviated as
              Udhagai, Ooty is the headquarters of the Nilgiris district, with
              Doddabetta as the highest point. It is located 86 km from
              Coimbatore and 128 km from Mysore.
              <br />
              <br />
              The town of Ooty is tucked into the heart of the Nilgiris, making
              it a part of the Nilgiri Biosphere Reserve. Owing to its perfect
              geographical location on the hills, it has remained an all-time
              favorite retreat for travelers of all kinds, from the colonial
              days to the current times. The lush landscape with tea estates,
              valleys, and forested lands on one hand and the classic vibes of
              the good old days make this hill station the perfect place to
              escape. The expansive greenery, the pleasant weather, and the
              endless adventure options are what Ooty is famous for.
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
            <h1 className="">Ooty</h1>
            <p>
              Not only for tourists, but Ooty is also a popular honeymoon
              destination for newlywed couples. The place is decorated with
              several magnificent sights of tea gardens, serene waterfalls, and
              Nilgiri Hills. Here you will get the movie-like view and also will
              witness the charm of old-world colonial architecture that will
              fill your soul with satisfaction. If you want to flee from the
              extreme humidity and the scorching heat of the Indian sun, then
              Ooty will be the perfect destination for you. You can enjoy a trip
              on the Toy train to move around the city. By the Toy Train trip,
              you will get the panoramic views of this entire beautiful hill
              station. To witness the beauty of nature must visit this beautiful
              hill station.
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
            <h1 className="">Ooty</h1>
            <p>
              If you are looking for an offbeat place to visit in Ooty then you
              should surely check out the Tea Park. The Tea park is not known to
              many tourists. Yet it will provide you with a great experience.
              Once here you should definitely opt for the Ooty train ride. If
              you love anything tea then be ready to click some pictures and to
              soak in the great aroma of the tea leaves. The best time to visit
              Ooty is in the summer season. The temperature is near 25-degree
              Celsius, however, the afternoons can be a little hot. However,
              sometimes the heat is unbearable but with the occasional showers,
              it won’t be a problem. The night here gets cold during the summer
              season. Therefore, do not forget to carry some extra warm clothes
              with you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
