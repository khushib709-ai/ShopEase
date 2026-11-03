import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ApiProducts({ addToCart, toggleWishlist, wishlistItems = [] }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Unable to load live catalog at this moment.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="api-products" style={{ padding: "50px 8%", textAlign: "center", backgroundColor: "var(--bg-surface)", transition: "background-color 0.25s ease" }}>
      <div className="section-header" style={{ marginBottom: "35px" }}>
        <h2 style={{ color: "var(--text-main)", fontSize: "30px", fontWeight: "700", marginBottom: "8px" }}>
          Trending Online Deals
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
          Fresh arrivals fetched in real-time
        </p>
      </div>

      {loading && (
        <div style={{ padding: "40px", color: "var(--text-muted)", fontSize: "16px" }}>
          Loading products...
        </div>
      )}

      {error && !loading && (
        <div style={{ padding: "30px", color: "var(--text-muted)", backgroundColor: "var(--primary-light)", borderRadius: "10px", maxWidth: "450px", margin: "0 auto" }}>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="product-container">
          {products.map((product) => {
            const formattedProduct = {
              id: `api-${product.id}`,
              name: product.title,
              price: Math.round(product.price * 85),
              category: product.category,
              image: product.image
            };

            return (
              <ProductCard
                key={formattedProduct.id}
                product={formattedProduct}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isWishlisted={wishlistItems.some((item) => item.id === formattedProduct.id)}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default ApiProducts;
