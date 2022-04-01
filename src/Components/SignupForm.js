import { useState } from 'react';
import './SignupForm.css';

export default function SignupForm(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white" : "#212529",
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
        border: props.mode === "dark" ? "white" : "#212529",
      };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [contactno, setContactNo] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, address,contactno }),
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
            setAddress("");
            setContactNo("");
        }
    }
    return (
        <>
            <div className="main">
            <div className="background">
              <div className="shape"></div>
              <div className="shape"></div>
            </div>
            <form action="" style={myStyle}>
                <h3 style={myStyle}>Login Here </h3>
                <label className='SUlabel' for="username" style={myStyle}>Name</label>
                <input type="text" style={{border: '1px solid black',color: 'black'}} placeholder="Name" id='username'
                value={name} onChange={(e) => setName(e.target.value)} />
                <label className='SUlabel' for="email" required style={myStyle}>Email</label>
                <input type="email" style={{border: '1px solid black',color: 'black'}} placeholder="Email" id='email'
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='SUlabel' for="address" required style={myStyle}>Address</label>
                <input type="text" style={{border: '1px solid black',color: 'black'}} placeholder="Address" id='address'
                value={address} onChange={(e) => setAddress(e.target.value)} />
                <label className='SUlabel' for="contact" required style={myStyle}>Contact No.</label>
                <input type="text" style={{border: '1px solid black',color: 'black'}} placeholder="Contact No." id='contactno'
                value={contactno} onChange={(e) => setContactNo(e.target.value)} />
                <button type="submit" id='sub'
                onClick={handleOnSubmit}>Sign Up</button>
            </form>
            </div>
        </>
    );
}
