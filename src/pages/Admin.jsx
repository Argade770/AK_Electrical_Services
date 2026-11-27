import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteContact,
  getContacts,
  updateContact,
} from "../db";

import AdminSettings from "../components/AdminSettings";
import "./AdminAuth.css";

export default function Admin() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  async function loadContacts() {
    setLoading(true);

    try {
      const data = await getContacts();
      setContacts(data.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.error(error);
      setNotice("Unable to load contacts.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContacts();
  }, []);

  // LOGOUT
  function handleLogout() {
    sessionStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  }

  // DELETE CONTACT
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      await deleteContact(id);
      setNotice("Message deleted successfully.");
      await loadContacts();
    } catch (error) {
      console.error(error);
      setNotice("Unable to delete message.");
    }
  }

  // UPDATE STATUS
  async function handleStatus(id, status) {
    try {
      const contact = contacts.find((item) => item.id === id);
      if (!contact) return;

      await updateContact(id, { ...contact, status });

      setNotice("Status updated successfully.");
      await loadContacts();
    } catch (error) {
      console.error(error);
      setNotice("Unable to update status.");
    }
  }

  // EDIT CONTACT
  async function handleEdit(event) {
    event.preventDefault();

    try {
      await updateContact(editing.id, editing);

      setEditing(null);
      setNotice("Contact updated successfully.");

      await loadContacts();
    } catch (error) {
      console.error(error);
      setNotice("Unable to update contact.");
    }
  }

  return (
    <main className="admin-page">

      {/* DASHBOARD HEADER */}
      <div className="admin-heading">
        <div>
          <p className="eyebrow">MANAGE CUSTOMER MESSAGES</p>
          <h1>
            Admin <span>Dashboard</span>
          </h1>
          <p>View, update and delete contact form submissions.</p>
        </div>

        <div className="admin-top-actions">
          <button className="outline-btn" onClick={loadContacts}>
            ↻ Refresh
          </button>

          <button
            className="outline-btn"
            onClick={() => setShowSettings(!showSettings)}
          >
            ⚙ Settings
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {notice && <p className="notice">{notice}</p>}

      {/* ADMIN SETTINGS */}
      {showSettings && <AdminSettings />}

      {/* EDIT CONTACT */}
      {editing && (
        <form className="panel edit-panel" onSubmit={handleEdit}>
          <h2>Edit Contact #{editing.id}</h2>

          <div className="form-grid">
            {["name", "email", "phone", "subject"].map((field) => (
              <label key={field}>
                {field[0].toUpperCase() + field.slice(1)}

                <input
                  required
                  value={editing[field] || ""}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      [field]: e.target.value,
                    })
                  }
                />
              </label>
            ))}
          </div>

          <label className="message-label">
            Full Address
            <textarea
              value={editing.address || ""}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  address: e.target.value,
                })
              }
            />
          </label>

          <label className="message-label">
            Work Type
            <select
              value={editing.workType || ""}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  workType: e.target.value,
                })
              }
            >
              <option value="">Select Work Type</option>
              <option value="House Wiring">House Wiring</option>
              <option value="Industrial Wiring">Industrial Wiring</option>
              <option value="Electrical Repair">Electrical Repair</option>
              <option value="Fan Installation">Fan Installation</option>
              <option value="Light Installation">Light Installation</option>
              <option value="CCTV Installation">CCTV Installation</option>
              <option value="Inverter Installation">Inverter Installation</option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Electrical Maintenance">Electrical Maintenance</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="message-label">
            Message
            <textarea
              required
              value={editing.message || ""}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  message: e.target.value,
                })
              }
            />
          </label>

          <div className="action-row">
            <button className="gold-btn" type="submit">
              Save Changes
            </button>

            <button
              type="button"
              className="outline-btn"
              onClick={() => setEditing(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* STATISTICS */}
      <div className="admin-stats">
        <div>
          <span>Total Messages</span>
          <strong>{contacts.length}</strong>
        </div>

        <div>
          <span>New Messages</span>
          <strong>
            {contacts.filter((c) => (c.status || "New") === "New").length}
          </strong>
        </div>

        <div>
          <span>Reviewed</span>
          <strong>
            {contacts.filter((c) => c.status === "Reviewed").length}
          </strong>
        </div>
      </div>

      {/* CONTACT TABLE */}
      {loading ? (
        <p>Loading messages...</p>
      ) : contacts.length === 0 ? (
        <div className="empty-state">
          <span>✉</span>
          <h2>No messages yet</h2>
          <p>
            Messages submitted through the Contact page will appear here.
          </p>
        </div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Contact</th>
                <th>Address / Work</th>
                <th>Subject / Message</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>#{contact.id}</td>

                  <td>
                    <strong>{contact.name}</strong>
                  </td>

                  <td>
                    {contact.email}
                    <br />
                    {contact.phone}
                  </td>

                  <td>
                    <strong>Address:</strong>
                    <p>{contact.address || "N/A"}</p>

                    <strong>Work Type:</strong>
                    <p>{contact.workType || "N/A"}</p>
                  </td>

                  <td>
                    <strong>{contact.subject}</strong>
                    <p className="table-message">
                      {contact.message}
                    </p>
                  </td>

                  <td>
                    {contact.createdAt
                      ? new Date(contact.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td>
                    <select
                      value={contact.status || "New"}
                      onChange={(e) =>
                        handleStatus(contact.id, e.target.value)
                      }
                    >
                      <option>New</option>
                      <option>Reviewed</option>
                      <option>Resolved</option>
                    </select>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button onClick={() => setEditing(contact)}>
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(contact.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}