import { useState } from "react";

const hairImages = Object.values(
  import.meta.glob("../assets/gallery/hair/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const nailImages = Object.values(
  import.meta.glob("../assets/gallery/nails/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const lashImages = Object.values(
  import.meta.glob("../assets/gallery/lashes-brows/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const facialImages = Object.values(
  import.meta.glob("../assets/gallery/facials/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "Hair", value: "hair" },
    { label: "Nails", value: "nails" },
    { label: "Lashes & Brows", value: "lashes-brows" },
    { label: "Facials", value: "facials" },
  ];

  const images = [
    ...hairImages.map((src) => ({ src, category: "hair" })),
    ...nailImages.map((src) => ({ src, category: "nails" })),
    ...lashImages.map((src) => ({ src, category: "lashes-brows" })),
    ...facialImages.map((src) => ({ src, category: "facials" })),
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section className="page-section gallery-page">
      <p className="eyebrow">Student Work</p>

      <h1>
        Salon <span>Gallery</span>
      </h1>

      <p className="page-intro">
        Browse examples of hair, nails, lashes, brows, and facial services
        performed by students under instructor supervision.
      </p>

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category.value}
            className={activeCategory === category.value ? "active" : ""}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div className="gallery-card" key={`${image.category}-${index}`}>
            <img src={image.src} alt={`${image.category} example`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;