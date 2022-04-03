import React from "react";
import { useState, useEffect } from "react";
import "./Users.css";

export default function Users(props) {
  const [user, setUser] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      "X-RapidAPI-Key": "70e7a8fdc2mshc9e58cefa458646p1e71cbjsncd31fb2c143a",
    },
  };
  let url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow&country=India";
  const fetchData = () => {
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let datas = data;
        setUser(datas);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // function Form() {
  //   function handleClick(e) {
  //     e.preventDefault();
  //     console.log('You clicked submit.');
  //   }
  // }

  const HandleClick = () => {
    let city = document.getElementById("textBox").value;
    url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}&country=India`;
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);
  let feelsLike = document.getElementById("feelsLike");
    if (feelsLike!=null) {
      let temp = Number(feelsLike.innerText);
      let weatherReport = document.getElementById("weatherReport");
      if (temp < 15) {
        weatherReport.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1529017342279-ca5eb1c54bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80')";
      }
      else if (temp >=29) {
        weatherReport.style.backgroundImage =
          "url('https://cff2.earth.com/uploads/2017/10/06170735/The-10-hottest-places-on-Earth.jpg')";
        }
      else{
        weatherReport.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
          
      }
    }
  return (
    <>
      <div className="weatherReport" id="weatherReport">
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Check the Weather Report of your favourite city here!
        </h2>
        <div className="md-form md-outline my-3 form-floating checking">
          <input
            type="text"
            id="textBox"
            className="form-control"
            placeholder="City Name"
            defaultValue={"Lucknow"}
          />
          <label htmlFor="form-subject">City Name</label>
          <button
            type="submit"
            class="btn btn-primary mb-2 seeWeather"
            id="weatherRpt"
            onClick={HandleClick}
          >
            See Weather Report
          </button>
        </div>

        <table class="table text-light ourTable">
          <thead>
            <tr className="bg-dark">
              <th scope="col">City name</th>
              <th scope="col">Temperature</th>
              <th scope="col">Feels Like</th>
              <th scope="col">Humidity</th>
            </tr>
          </thead>
          <tbody>
            {user.error ? (
              <td
                className={`text-${props.mode === "dark" ? "light" : "dark"}`}
                colSpan={4}
                align="center"
              >
                No such place exists
              </td>
            ) : (
              <tr className={` bg-secondary text-light lastRow`}>
                <th scope="row">
                  {document.getElementById("textBox")
                    ? document.getElementById("textBox").value
                    : "1"}
                </th>
                <td>{user.temp}</td>
                <td id="feelsLike">{user.feels_like}</td>
                <td>{user.humidity}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
