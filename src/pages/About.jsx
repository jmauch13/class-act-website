import ownerImage from "../assets/owner.jpg";

function About() {
  const details = [
    {
      title: "Instructors",
      text: "Stacy, Riley, Jackie & Taylor",
    },
    {
      title: "Programs",
      text: "Cosmetology, Advanced Cosmetology, Manicuring, Advanced Manicuring & Esthetics",
    },
    {
      title: "Location",
      text: "49 E Main Street, Chillicothe, Ohio",
    },
    {
  title: "Contact",
  text: (
    <>
      <a href="tel:7407732612">740-773-2612</a>
      <br />
      <a
        href="https://www.facebook.com/share/1BK3TbMTB5/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook Page →
      </a>
    </>
  ),
},
  ];

  return (
    <section className="page-section about-page">
      <div className="about-intro">
        <p className="eyebrow">About Class Act</p>

        <h1>
          A Local Beauty School Built on <span>Hands-On Experience</span>
        </h1>

        <p>
          Class Act School of Cosmetology is a full-service cosmetology school
          and salon located in downtown Chillicothe, Ohio. Students receive
          hands-on training while providing affordable services to the community
          under supervision.
        </p>
      </div>

      <div className="owner-feature">
        <div className="owner-photo-card">
          <img src={ownerImage} alt="Colleen K Robinette-Rife" />
        </div>

        <div className="owner-feature-copy">
          <p className="eyebrow">Owner / Instructor</p>
          <h2>Colleen K Robinette-Rife</h2>

          <p>
            Colleen leads Class Act with a passion for helping students build
            real skills, gain confidence, and prepare for careers in the beauty
            industry.
          </p>
        </div>
      </div>

      <div className="about-info-grid">
  {details.map((item) => (
    <div className="about-info-card" key={item.title}>
      <h3>{item.title}</h3>
      <div>{item.text}</div>
    </div>
  ))}
</div>
    </section>
  );
}

export default About;