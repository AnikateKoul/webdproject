import { useState } from 'react';
import './SignupForm.css';

export default function SignupForm() {
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
            <div className="background">
              <div className="shape"></div>
              <div className="shape"></div>
            </div>
            <form action="">
                <h3>Login Here </h3>
                <label for="username" >Name</label>
                <input type="text" placeholder="name" id='username'
                value={name} onChange={(e) => setName(e.target.value)} />
                <label for="email" required>Email</label>
                <input type="email" placeholder="email" id='email'
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <label for="address" required>Address</label>
                <input type="text" placeholder="Address" id='address'
                value={address} onChange={(e) => setAddress(e.target.value)} />
                <label for="contact" required>Contact No.</label>
                <input type="text" placeholder="Contact No." id='contactno'
                value={contactno} onChange={(e) => setContactNo(e.target.value)} />
                <button type="submit" id='sub'
                onClick={handleOnSubmit}>Sign Up</button>
            </form>

        </>
    );
}
