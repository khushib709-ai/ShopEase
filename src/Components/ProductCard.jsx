import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import "../css/ProductCard.css";

function ProductCard({
  product,
  addToCart,
  toggleWishlist,
  isWishlisted
}) {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <button
          type="button"
          className={`wishlist-icon-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist && toggleWishlist(product)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="product-info">
        {product.category && (
          <span className="product-category-tag">{product.category}</span>
        )}
        <h3 title={product.name}>{product.name}</h3>
        <p className="product-price">₹{Number(product.price).toLocaleString("en-IN")}</p>
      </div>

      <div className="product-actions">
        <button
          type="button"
          className="add-cart-btn"
          onClick={() => addToCart && addToCart(product)}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
