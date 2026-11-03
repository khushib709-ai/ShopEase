import { FaHeart } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import "../css/Wishlist.css";

function Wishlist({
  wishlistItems = [],
  toggleWishlist,
  addToCart,
  setCurrentPage
}) {
  return (
    <section className="wishlist-page">
      <div className="wishlist-header">
        <h2>My Wishlist <span className="heart-accent">❤️</span></h2>
        <p>Saved favorites you can move to your cart anytime</p>
      </div>

      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">
              <FaHeart />
            </div>
            <h3>Your Wishlist is Empty!</h3>
            <p>Explore our products and tap the heart icon to save your favorites.</p>
            {setCurrentPage && (
              <button
                type="button"
                className="explore-btn"
                onClick={() => setCurrentPage("products")}
              >
                Explore Products
              </button>
            )}
          </div>
        ) : (
          <div className="all-products-container">
            {wishlistItems.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isWishlisted={true}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
