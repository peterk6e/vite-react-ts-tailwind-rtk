import React, { useState } from "react";
import { login } from "../features/User";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          login({ id: Math.random(), email: email, password: password })
        );
      }}
    >
      <input
        type="email"
        value={email}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="email"
        value={password}
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};
