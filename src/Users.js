import React from "react";
import { useState, useEffect } from "react";
import "./Users.css"

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
        console.log(datas);
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

  return (
    <>
    <div className="weatherReport">
    <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>
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
      <button type="submit" class="btn btn-primary mb-2 seeWeather" onClick={HandleClick}>
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
            <td className={`text-${props.mode==='dark'?'light':'dark'}`} colSpan={4} align="center">
              No such place exists
            </td>
          ) : (
            <tr className={` bg-secondary text-light lastRow`}>
              <th scope="row">{document.getElementById("textBox")?document.getElementById("textBox").value:"1"}</th>
              <td>{user.temp}</td>
              <td>{user.feels_like}</td>
              <td>{user.humidity}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
}
