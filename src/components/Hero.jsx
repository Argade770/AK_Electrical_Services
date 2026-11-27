const heroImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">BETTER LIGHTS · BRIGHTER SPACES</p>
        <h1>Illuminate<br /><span>Your World</span></h1>
        <p className="hero-description">Premium electrical &amp; lighting solutions for modern homes and workspaces.</p>
        <div className="features">
          <div><span>ϟ</span><p>Energy<br />Efficient</p></div>
          <div><span>◇</span><p>Premium<br />Quality</p></div>
          <div><span>◆</span><p>Safe &amp;<br />Reliable</p></div>
          <div><span>♧</span><p>Eco<br />Friendly</p></div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Modern illuminated living room" />
        <div className="hero-image-copy">Good Lights<br />Brighter Lives</div>
      </div>
      <aside className="side-text">
        {["HOMES", "OFFICES", "SHOWROOMS", "HOTELS", "EVERYWHERE"].map(x => <p key={x}>{x}</p>)}
      </aside>
    </section>
  );
}