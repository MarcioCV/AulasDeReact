import { useState } from "react";
import "./style.css";
import { Button } from "@/components/ui/button";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log(`Username: ${username} \nPassword:${password}`);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="*********"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
      <Button>Qualquer texto</Button>
    </div>
  );
}
