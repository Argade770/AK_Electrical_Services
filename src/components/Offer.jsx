export default function Offer() {
  return (
    <section className="offer" id="offers">
      <div className="offer-left">
        <p>Upgrade to</p>
        <h2>Smarter Lighting</h2>
        <span>Modern | Stylish | Energy Saving</span>
        <div className="gold-line" />
      </div>
      <div className="offer-box">
        <p>UP TO</p>
        <h2>30% OFF</h2>
        <span>ON SELECTED LIGHTING PRODUCTS</span>
        <a href="#products" className="dark-pill">Grab the Offer →</a>
      </div>
      <div className="offer-right">
        <p>Small Details</p>
        <h2>Big Difference</h2>
      </div>
    </section>
  );
}