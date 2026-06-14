import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Downtown Chillicothe, Ohio</p>

          <h1>
            Start Your Career in <span>Beauty with Confidence</span>
          </h1>

          <p className="hero-subtitle">
            Cosmetology • Esthetics • Manicuring • Advanced Training
          </p>
        </div>
      </section>

      <section className="home-preview-section">
        <div className="preview-card">
          <div className="preview-copy">
            <p className="card-label">The School</p>
            <h2>Beauty career training</h2>
            <p>
              Learn hands-on skills in cosmetology, esthetics, manicuring, and
              advanced training with real salon experience.
            </p>
            <Link to="/school" className="text-link">
              Learn about the school →
            </Link>
          </div>

          <div className="preview-image school-image"></div>
        </div>

        <div className="preview-card">
          <div className="preview-copy">
            <p className="card-label">Salon Services</p>
            <h2>Student salon services</h2>
            <p>
              Book beauty services performed by students under expert
              supervision in downtown Chillicothe.
            </p>
            <Link to="/services" className="text-link">
              View services →
            </Link>
          </div>

          <div className="preview-image services-image"></div>
        </div>
      </section>
    </>
  );
}

export default Home;