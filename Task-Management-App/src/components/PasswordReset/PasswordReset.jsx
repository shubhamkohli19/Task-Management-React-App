import React, { useState } from "react";
import { projectAuth } from "../../firebase/config";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await projectAuth.sendPasswordResetEmail(email);
      setResetSent(true);
    } catch (error) {
      console.error("Error sending password reset email", error);
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Password Reset</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <button type="submit">Reset Password</button>
      {resetSent && <div>Password reset email sent. Check your inbox.</div>}
    </form>
  );
};

export default PasswordReset;