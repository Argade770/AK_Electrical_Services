import { useState } from "react";

export default function AdminSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("adminUsername") || "admin"
  );
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleUpdate(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    const savedPassword =
      localStorage.getItem("adminPassword") || "admin123";

    if (currentPassword !== savedPassword) {
      setError("Current password is incorrect!");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must have at least 3 characters.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must have at least 8 characters.");
      return;
    }

    localStorage.setItem("adminUsername", username.trim());
    localStorage.setItem("adminPassword", newPassword);

    setCurrentPassword("");
    setNewPassword("");
    setMessage("Credentials updated successfully!");
  }

  return (
    <section className="admin-settings">
      <h2>⚙ Admin Account Settings</h2>

      <form onSubmit={handleUpdate}>
        <label>Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <label>New Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          minLength={8}
          required
        />

        <button type="submit">Update Credentials</button>

        {message && <p className="auth-success">{message}</p>}
        {error && <p className="auth-error">{error}</p>}
      </form>
    </section>
  );
}