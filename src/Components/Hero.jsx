import "../css/Hero.css";

function Hero({ setCurrentPage }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO SHOPEASE</p>

        <h1>
          Everything You Love,
          <span> All in One Place</span>
        </h1>

        <p className="hero-description">
          Discover amazing products across fashion, electronics, beauty and more.
          Shop your favourites at unbeatable prices!
        </p>

        <button
          className="hero-btn"
          onClick={() => setCurrentPage && setCurrentPage("products")}
        >
          Explore Products →
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
          alt="Shopping store interior"
        />
      </div>
    </section>
  );
}

export default Hero;
