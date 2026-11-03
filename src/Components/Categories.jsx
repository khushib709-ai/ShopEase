import "../css/Categories.css";

function Categories({ onSelectCategory }) {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400"
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400"
    },
    {
      id: 3,
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400"
    },
    {
      id: 4,
      name: "Food Items",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400"
    },
    {
      id: 5,
      name: "Stationery",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400"
    },
    {
      id: 6,
      name: "Medical",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400"
    },
    {
      id: 7,
      name: "Home Essentials",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400"
    },
    {
      id: 8,
      name: "Personal Care",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400"
    }
  ];

  return (
    <section className="categories" id="categories">
      <div className="section-header">
        <h2>Shop By Category</h2>
        <p>Explore popular categories curated for you</p>
      </div>

      <div className="category-container">
        {categories.map((category) => (
          <div
            className="category-card"
            key={category.id}
            onClick={() => onSelectCategory && onSelectCategory(category.name)}
            role="button"
            tabIndex={0}
          >
            <div className="category-img-wrapper">
              <img src={category.image} alt={category.name} loading="lazy" />
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
