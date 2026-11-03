import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [wishlistItems, setWishlistItems] = useState(
    () => JSON.parse(localStorage.getItem("wishlistItems")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  function addToCart(product) {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }
  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }
  function updateQuantity(id, amount) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  }
  function toggleWishlist(product) {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  }
  function handleSelectCategory(category) {
    setSelectedCategory(category);
    setCurrentPage("products");
  }
  return (
    <div className={`app ${theme}`}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        theme={theme}
        setTheme={setTheme}
        onSelectCategory={handleSelectCategory}
      />
      {currentPage === "home" && (
        <Home
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
          searchTerm={searchTerm}
          setCurrentPage={setCurrentPage}
          onSelectCategory={handleSelectCategory}
        />
      )}
      {currentPage === "products" && (
        <Product
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {currentPage === "cart" && (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "wishlist" && (
        <Wishlist
          wishlistItems={wishlistItems}
          toggleWishlist={toggleWishlist}
          addToCart={addToCart}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "login" && (
        <Login setCurrentPage={setCurrentPage} />
      )}
      <Footer
        setCurrentPage={setCurrentPage}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  );
}
export default App;
