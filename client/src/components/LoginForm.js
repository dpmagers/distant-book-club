import React, { useState } from "react";
import { useHistory } from "react-router-dom"


function LoginForm({ setReader }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()


    const handleSubmit = (e) => {
      e.preventDefault()

      setUsername("")
      setPassword("")

      
      fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({username, password})
      })
          .then(res => res.json())
          .then(data => setReader(data))
          history.push('/booklist');
  }

  // "/booklist"


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
          Login
        </button>

    </form>
  );
}

export default LoginForm;
