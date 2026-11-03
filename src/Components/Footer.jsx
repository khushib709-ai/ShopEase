import "../css/Footer.css";

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2
            className="footer-logo"
            onClick={() => setCurrentPage && setCurrentPage("home")}
          >
            Shop<span>Ease</span>
          </h2>
          <p>Your favourite shopping destination for all modern lifestyle essentials.</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <button
            type="button"
            className="footer-link"
            onClick={() => setCurrentPage && setCurrentPage("home")}
          >
            Home
          </button>
          <button
            type="button"
            className="footer-link"
            onClick={() => setCurrentPage && setCurrentPage("products")}
          >
            Products
          </button>
          <button
            type="button"
            className="footer-link"
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage("home");
                setTimeout(() => {
                  document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
                }, 80);
              }
            }}
          >
            Categories
          </button>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Email: support@shopease.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Hours: Mon - Sat (9am - 8pm)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopEase. All Rights Reserved. Crafted with care.</p>
      </div>
    </footer>
  );
}

export default Footer;
