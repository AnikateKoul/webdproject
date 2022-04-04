import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

export default function SignupForm(props) {
  const navigate = useNavigate();
    let myStyle = {
        color: props.mode === "dark" ? "white" : "#212529",
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
      };
      let boxStyle = {
        color: props.mode === "dark" ? "white" : "#212529",
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
        border: props.mode === "dark" ? "1px solid #445" : "1px solid rgb(173,173,181)",
      }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactno, setContactNo] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password,contactno }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setName("");
            setEmail("");
            setPassword("");
            setContactNo("");
            navigate("/login");
        }
    }
  return (
    <>
      <div className="main">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form action="" style={myStyle} id="sgnForm">
          <h3 style={myStyle}>Login Here </h3>
          <label className="SUlabel" for="username" style={myStyle}>
            Name
          </label>
          <input
            type="text"
            style={boxStyle}
            placeholder="Name" 
            id="username" className="sgnInpt"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="SUlabel" for="email" required style={myStyle}>
            Email
          </label>
          <input
            type="email"
            style={boxStyle}
            placeholder="Email" className="sgnInpt" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="SUlabel" for="password" required style={myStyle}>
            Password
          </label>
          <input
            type="password"
            style={boxStyle}
            placeholder="Password" className="sgnInpt"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="SUlabel" for="contact" required style={myStyle}>
            Contact No.
          </label>
          <input
            type="text"
            style={boxStyle}
            placeholder="Contact No." className="sgnInpt"
            id="contactno"
            value={contactno}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <button type="submit" id="sub" onClick={handleOnSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

// #334
