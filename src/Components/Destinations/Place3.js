import React from "react";
import "./Place.css";

export default function Place3(props) {
  return (
    <>
    {/* This is the main code of the Ooty page */}
      <div style={{ marginTop: "70px" }}></div>
      <div className="main1">
        <img
          src="https://images.unsplash.com/photo-1597165253287-d06597132da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="bottom-left">Ooty</div>
      </div>
      <div className="cards">
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://thetraveltroupe.files.wordpress.com/2021/07/dppqk29u0aae4-r.jpg?w=710"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              The quaint and quiet hill station of Ooty in Tamil Nadu is one of
              the most popular mountain destinations in South India. Ooty is the
              headquarters of the Nilgiris district, with Doddabetta as the
              highest point. The town of Ooty is tucked into the heart of the
              Nilgiris, making it a part of the Nilgiri Biosphere Reserve. The
              lush landscape with tea estates, valleys, and forested lands on
              one hand and the classic vibes of the good old days make this hill
              station the perfect place to escape. The expansive greenery, the
              pleasant weather, and the endless adventure options are what Ooty
              is famous for.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1a/e4/63/ef/ooty-is-a-resort-town.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              The place is decorated with several magnificent sights of tea
              gardens, serene waterfalls, and Nilgiri Hills. Here you will get
              the movie-like view and also will witness the charm of old-world
              colonial architecture that will fill your soul with satisfaction.
              If you want to flee from the extreme humidity and the scorching
              heat of the Indian sun, then Ooty will be the perfect destination
              for you. You can enjoy a trip on the Toy train to move around the
              city. By the Toy Train trip, you will get the panoramic views of
              this entire beautiful hill station.
            </p>
          </div>
        </div>
        <div className={`card bg-${props.mode === "light" ? "light" : "dark"}`}>
          <div className="image ">
            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Ooty-In-Summer-cover_17th-Jan.jpg"
              alt=""
            />
          </div>
          <div
            className={`text text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              If you are looking for an offbeat place to visit in Ooty then you
              should surely check out the Tea Park. The Tea park is not known to
              many tourists. Yet it will provide you with a great experience.
              Once here you should definitely opt for the Ooty train ride.The
              best time to visit Ooty is in the summer season. The temperature
              is near 25-degree Celsius, however, the afternoons can be a little
              hot. However, sometimes the heat is unbearable but with the
              occasional showers, it won’t be a problem. The night here gets
              cold during the summer season. Therefore, do not forget to carry
              some extra warm clothes with you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
