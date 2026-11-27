import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Offer from "../components/Offer";
import Products from "../components/Products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  function handleAddCart(product) {
    setCart(current => [...current, product]);
    window.alert(`${product} added to cart!`);
  }
  function handleSearch(value) {
    setSearchTerm(value);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }
  function handleShowCart() {
    window.alert(cart.length ? `Your Cart:\\n${cart.join("\\n")}` : "Your cart is empty!");
  }

  return (
    <>
      <Navbar cartCount={cart.length} onSearch={handleSearch} onShowCart={handleShowCart} />
      <Hero />
      <Categories />
      <Offer />
      <Products onAddCart={handleAddCart} searchTerm={searchTerm} />
    </>
  );
}