import ProductCard from "../Components/ProductCard";
import products from "../data/products";
import "../css/ProductPage.css";

function Product({
  addToCart,
  toggleWishlist,
  wishlistItems,
  searchTerm,
  selectedCategory = "All",
  setSelectedCategory
}) {
  const categories = ["All", "Fashion", "Electronics", "Beauty"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes((searchTerm || "").toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="all-products">
      <div className="section-header">
        <h2>Our Products</h2>
        <p>Explore our premium collection of handpicked essentials</p>
      </div>

      <div className="filter-bar">
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory && setSelectedCategory(cat)}
            >
              {cat === "All" ? "All Products" : cat}
            </button>
          ))}
        </div>

        <div className="results-count">
          {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"} found
        </div>
      </div>

      <div className="all-products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlistItems.some((item) => item.id === product.id)}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-results">
          <h3>No products match your criteria</h3>
          <p>Try searching with another keyword or change your category filter.</p>
          <button
            type="button"
            className="reset-filter-btn"
            onClick={() => setSelectedCategory && setSelectedCategory("All")}
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

export default Product;
