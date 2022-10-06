import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function SignUpForm({ reader, setReader }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [favoriteBook, setFavoriteBook] = useState("")

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        favoriteBook,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => setReader(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

//   new user: mariedefrance romance11c

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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />


        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />


        <label htmlFor="favorite-book">Favorite Book</label>
        <input
          type="text"
          id="favorite-book"
          value={favoriteBook}
          onChange={(e) => setFavoriteBook(e.target.value)}
        />

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}

    </form>
  );
}

export default SignUpForm;
