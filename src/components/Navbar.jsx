import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount, onSearch, onShowCart }) {
  const [search, setSearch] = useState("");
  function submitSearch(event) {
    event.preventDefault();
    onSearch(search);
  }
  return (
    <div className="home-navbar">
    </div>
  );
}