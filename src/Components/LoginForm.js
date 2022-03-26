import { useState } from 'react';

export default function LoginForm() {
    const [email2, setEmail] = useState("");
    const [password2, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/signin', {
            method: "post",
            body: JSON.stringify({ email2, password2 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setPassword("");
        }
    }
    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="email" placeholder="email" 
                value={email2} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" 
                value={password2} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" 
                onClick={handleOnSubmit}>Login</button>
            </form>

        </>
    );
}
