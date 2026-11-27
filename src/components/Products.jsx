import { Link } from "react-router-dom";
import "./Products.css";

const services = [
  [
    "Premium LED TV Backlight / Wall Strip",
    "LED Lighting Installation",
    "\images (1).jpg"
  ],
  [
    "Professional Electrical Maintenance",
    "Electrical Repair & Maintenance",
    "\istockphoto-1758530578-612x612.jpg"
  ],
  [
    "Luxury Staircase Wall Light",
    "Decorative Lighting Installation",
    "\outdoor-wall-light-illuminates-field-at-dusk-with-fence-view-photo.jpeg"
  ],
  [
    "House Wiring Installation",
    "Complete House Wiring",
    "\istockphoto-2084526747-612x612.jpg"
  ],
  [
    "Ceiling Fan Installation",
    "Fan Installation & Repair",
    "/celing fanss.jpg"
  ],
  [
    "Switchboard Installation",
    "Switch & Socket Repair",
    "\istockphoto-2151912560-1024x1024.webp"
  ],
  [
    "False Ceiling Light InstallationService",
      " Ceiling Light Installation & Repair",
    "\istockphoto-1770428408-612x612.jpg"
  ],
    [
    "MCB Box Installation & Distribution Service",
      "MCB Box Installation",
    "\istockphoto-2220215027-612x612.jpg"
  ]
];

export default function Products({ searchTerm = "" }) {
  const filtered = services.filter(([name, description]) =>
    `${name} ${description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="products" id="products">

      <div className="section-heading">
        <h2>Electrical <span>Services</span></h2>
        <p>Professional Electrical Solutions For Your Home & Business</p>
      </div>

      <div className="product-container">
        {filtered.map(([name, description, image]) => (
          <article className="product-card" key={name}>

            <img src={image} alt={name} />

            <div className="product-info">
              <h3>{name}</h3>
              <p>{description}</p>

              <Link to="/contact" className="service-btn">
                Book Service
              </Link>
            </div>

          </article>
        ))}

        {filtered.length === 0 && (
          <p className="no-results">
            No services found. Try another search.
          </p>
        )}
      </div>

    </section>
  );
}