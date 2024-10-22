import React, { useState } from "react";
import App from "./App";

const PP = () => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const correctPassword = "082890"; // Change this to your desired password

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div>
      {isAuthorized ? (
        <App />
      ) : (
        <form onSubmit={handleSubmit} className="pp">
          <label>
            Enter Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PP;
