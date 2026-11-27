import { useEffect, useRef } from "react";

const categories = [
  ["LED Lights", "Bright & Efficient", "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"],
  ["Track Lights", "Modern Illumination", "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=600&q=80"],
  ["Pendant Lights", "Style Your Space", "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80"],
  ["Wall Lights", "Beautiful Walls", "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=600&q=80"],
  ["Ceiling Fans", "Comfort All Year", "\celing fanss.jpg"],
  ["Switches & Sockets", "Safety with Style", "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=600&q=80"],
  ["Outdoor Lights", "Light Beyond Walls", "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80"]
];

export default function Categories() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) container.scrollLeft = 0;
      else container.scrollLeft += 1;
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="category-section" id="categories">
      <div className="section-heading"><h2>Electrical Services  <span>Category</span></h2><a href="#products">View All →</a></div>
      <div className="categories" ref={scrollRef}>
        {[...categories, ...categories].map(([name, desc, image], index) => (
          <article className="category-card" key={`${name}-${index}`}>
            <img src={image} alt={name} />
            <div><h3>{name}</h3><p>{desc}</p></div>
            <a href="/contact" aria-label={`Ask about ${name}`}>→</a>
          </article>
        ))}
      </div>
    </section>
  );
}