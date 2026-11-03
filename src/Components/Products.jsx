import ProductCard from "./ProductCard";
import products from "../data/products";
import "../css/Products.css";

function Products({
  addToCart,
  toggleWishlist,
  wishlistItems,
  searchTerm,
  setCurrentPage
}) {
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes((searchTerm || "").toLowerCase())
    )
    .slice(0, 4);

  return (
    <section className="products" id="products">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p>Top trending picks handpicked just for you</p>
      </div>

      <div className="product-container">
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
        <div className="no-products">
          <p>No products match your search.</p>
        </div>
      )}

      {setCurrentPage && (
        <div className="view-all-wrapper">
          <button
            type="button"
            className="view-all-btn"
            onClick={() => setCurrentPage("products")}
          >
            View All Products →
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
