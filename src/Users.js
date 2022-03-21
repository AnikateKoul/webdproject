import React from "react";

export default function Users(props) {
  return (
    <div>
      <table style={{width: "700px", marginLeft: "50px"}}>
      <thead>
          <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Age</th>
              <th>Photo</th>
          </tr>
      </thead>
      <tbody>
        {props.user.map((data) => (
          <tr>
            <td>{data.name.first + " " + data.name.last}</td>
            <td>
              {data.id.value}
            </td>
            <td>
                {data.dob.age}
            </td>
            <td>
                <img src={data.picture.large} alt="" />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
