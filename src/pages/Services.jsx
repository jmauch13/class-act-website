const serviceGroups = [
  {
    title: "Haircuts & Styling",
    items: [
      ["Kids 12 & Under", "$7"],
      ["Women & Men", "$12"],
      ["Bang Trim", "$5"],
      ["Shampoo Only", "$5"],
      ["Shampoo / Set", "$8"],
      ["Shampoo / Blow Dry", "$8"],
      ["Shampoo / Cut / Style", "$15"],
      ["Shampoo / Cut / Set", "$15"],
      ["Curling Iron / Flat Iron", "$10"],
      ["Up-Do", "$20"],
      ["Braids", "$10"],
      ["Deep Conditioner", "$10"],
    ],
  },
  {
    title: "Perms, Color & Highlights",
    items: [
      ["Perm - Normal Hair", "$28"],
      ["Perm - Color Treated", "$32.50"],
      ["Spiral Wrap", "$60 & up"],
      ["Piggy Back Wrap", "$60 & up"],
      ["Relaxer - Short Hair", "$30"],
      ["Relaxer - Shoulder Length", "$40"],
      ["Relaxer Retouch", "$25"],
      ["Color - All Over", "$32 & up"],
      ["Color Retouch", "$28"],
      ["Specialty Color Brand Upcharge", "$12"],
      ["Highlights", "$40 & up"],
      ["Partial Highlights", "$30"],
      ["Additional Color", "$6.50"],
      ["Virgin Bleach", "$45"],
      ["Bleach Retouch", "$30"],
      ["Corrective Color", "$50 & up"],
    ],
  },
  {
    title: "Nails",
    note: "Taxable services — 7.25%",
    items: [
      ["Water Manicure", "$8"],
      ["Hot Oil Manicure", "$8.50"],
      ["Polish Only", "$10"],
      ["Gel Polish Manicure", "$15"],
      ["Pedicure", "$15"],
      ["Pedicure Gel", "$15"],
      ["Toe Nail Trim", "$10"],
      ["Acrylics", "$32"],
      ["Acrylic Fill", "$25"],
      ["Gel X", "$32"],
      ["Acrylic Removal", "$15"],
      ["Nail Art Upcharge", "$10"],
    ],
  },
  {
    title: "Facials & Waxing",
    note: "Taxable services — 7.25%",
    items: [
      ["Facial", "$15"],
      ["Facial w/ Mask", "$15"],
      ["Derma Plane Facial", "$20"],
      ["Back Facial", "$20"],
      ["Eyebrow Wax", "$8"],
      ["Lip / Chin Wax", "$8"],
      ["Underarm Wax", "$20"],
      ["Bikini Wax", "$25"],
      ["Brazilian Wax", "$35"],
    ],
  },
  {
    title: "Lashes & Brows",
    note: "Taxable services — 7.25%",
    items: [
      ["Eyebrow Tint", "$10"],
      ["Lash Lift & Tint", "$28"],
      ["Classic Lashes", "$45"],
      ["Hybrid Lashes", "$55"],
      ["Volume Lashes", "$55"],
      ["Lash Fill", "$28"],
      ["Lash Removal", "$20"],
    ],
  },
];

function Services() {
  return (
    <section className="page-section services-page">
      <p className="eyebrow">Salon Services</p>

      <h1 className="services-heading">
        Affordable Services Performed by{" "}
        <span>Students in Training</span>
      </h1>

      <p className="page-intro">
        Services are performed by students under instructor supervision. Pricing
        is kept affordable so the community can enjoy salon services while
        students gain real experience.
      </p>

      <div className="service-grid">
        {serviceGroups.map((group) => (
          <article className="service-card" key={group.title}>
            <div className="service-card-header">
              <h2>{group.title}</h2>
              {group.note && <p>{group.note}</p>}
            </div>

            <div className="service-list">
              {group.items.map(([name, price]) => (
                <div className="service-row" key={name}>
                  <span>{name}</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="booking-banner">
        <p className="eyebrow">Ready to schedule?</p>
        <h2>Call to book your appointment</h2>
        <a href="tel:7407732611">740-773-2611</a>
      </div>
    </section>
  );
}

export default Services;