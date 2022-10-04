import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label } from "../styles";

function LoginForm({ reader, setReader }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
            .then(res => res.json())
            .then(data => setReader(data))
    }

    // useNavigate("/home") can be used to push you to other parts of app
    // username: "annak" , password: "annak123"
    // "molloy", password: "molloy456"

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button variant="fill" color="primary" type="submit">
          {/* {isLoading ? "Loading..." : "Login"} */}
        </button>

        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}

    </form>
  );
}

export default LoginForm;
