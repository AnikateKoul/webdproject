import React from "react";
import { useState, useEffect } from "react";
import './Users.css';

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
    <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>
      Check the weather report of your favourite city here
    </h3>
      <div className="md-form md-outline my-3 form-floating">
        <input
          type="text"
          id="textBox"
          className="form-control"
          placeholder="City Name"
          defaultValue={"Lucknow"}
        />
        <label htmlFor="form-subject">City Name</label>
      </div>

      <button type="submit" class="btn btn-primary mb-2" id='weatherRpt' onClick={HandleClick}>
        See Weather Report
      </button>
      <table class="table">
        <thead>
          <tr>
            <th className={`text-${props.mode==='light'?'dark':'light'}`} scope="col">City name</th>
            <th className={`text-${props.mode==='light'?'dark':'light'}`} scope="col">Temperature</th>
            <th className={`text-${props.mode==='light'?'dark':'light'}`} scope="col">Feels Like</th>
            <th className={`text-${props.mode==='light'?'dark':'light'}`} scope="col">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {user.error ? (
            <td className={`text-${props.mode==='light'?'dark':'light'}`} colSpan={4} align="center">
              No such place exists
            </td>
          ) : (
            <tr className={`text-${props.mode==='light'?'dark':'light'}`}>
              <th scope="row">{document.getElementById("textBox")?document.getElementById("textBox").value:"1"}</th>
              <td>{user.temp}</td>
              <td>{user.feels_like}</td>
              <td>{user.humidity}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
