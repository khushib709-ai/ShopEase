import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import ApiProducts from "../Components/ApiProducts";

function Home({
  addToCart,
  toggleWishlist,
  wishlistItems,
  searchTerm,
  setCurrentPage,
  onSelectCategory
}) {
  return (
    <div className="home-page">
      <Hero setCurrentPage={setCurrentPage} />

      <Categories onSelectCategory={onSelectCategory} />

      <Products
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlistItems={wishlistItems}
        searchTerm={searchTerm}
        setCurrentPage={setCurrentPage}
      />

      <ApiProducts
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
}

export default Home;
