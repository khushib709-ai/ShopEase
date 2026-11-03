import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
function Navbar({
  currentPage,
  setCurrentPage,
  searchTerm,
  setSearchTerm,
  cartCount,
  wishlistCount,
  theme,
  setTheme
}) {
  return (
    <nav className="navbar">
      <h2
        className="logo"
        onClick={() => setCurrentPage("home")}
        role="button"
        tabIndex={0}
      >
        Shop<span>Ease</span>
      </h2>
      <div className="nav-links">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <button
          className={currentPage === "products" ? "active" : ""}
          onClick={() => setCurrentPage("products")}
        >
          Products
        </button>
        <button
          onClick={() => {
            if (currentPage !== "home") {
              setCurrentPage("home");
              setTimeout(() => {
                document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
              }, 80);
            } else {
              document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Categories
        </button>
      </div>
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (currentPage !== "products") {
              setCurrentPage("products");
            }
          }}
        />
        {searchTerm && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <div className="nav-icons">
        <button
          className={`nav-btn ${currentPage === "login" ? "active" : ""}`}
          onClick={() => setCurrentPage("login")}
        >
          <FaUser />
          <span className="icon-label">Login</span>
        </button>
        <button
          className={`nav-btn ${currentPage === "wishlist" ? "active" : ""}`}
          onClick={() => setCurrentPage("wishlist")}
        >
          <div className="icon-with-badge">
            <FaHeart />
            {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
          </div>
          <span className="icon-label">Wishlist</span>
        </button>
        <button
          className={`nav-btn ${currentPage === "cart" ? "active" : ""}`}
          onClick={() => setCurrentPage("cart")}
        >
          <div className="icon-with-badge">
            <FaShoppingCart />
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </div>
          <span className="icon-label">Cart</span>
        </button>
        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
