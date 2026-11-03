import { FaTrashAlt, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import "../css/Cart.css";

function Cart({
  cartItems,
  removeFromCart,
  updateQuantity,
  setCurrentPage
}) {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <div className="cart-header">
        <h2>My Shopping Cart</h2>
        <p>Review items added to your bag</p>
      </div>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FaShoppingBag />
            </div>
            <h3>Your Cart is Empty!</h3>
            <p>Looks like you haven't added anything to your cart yet.</p>

            <button
              type="button"
              className="continue-btn"
              onClick={() => setCurrentPage("products")}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content-grid">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-unit-price">₹{Number(item.price).toLocaleString("en-IN")}</p>

                    <div className="item-controls">
                      <div className="qty-stepper">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>

                        <span className="qty-value">{item.quantity}</span>

                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrashAlt /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="item-total-price">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary-card">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Charges</span>
                <span className="free-shipping">FREE</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>Total Amount</span>
                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>

              <button
                type="button"
                className="checkout-btn"
                onClick={() => alert("🎉 Thank you for testing ShopEase! Checkout is connected successfully.")}
              >
                Proceed to Checkout <FaArrowRight />
              </button>

              <button
                type="button"
                className="continue-shopping-link"
                onClick={() => setCurrentPage("products")}
              >
                ← Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
