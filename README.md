# 🛍️ ShopEase - Modern E-Commerce Web Application

**ShopEase** is a responsive, feature-rich e-commerce store built with **React** and **Vite**. It features an elegant shopping experience with category filtering, cart management, wishlist functionality, real-time API product deals, and seamless Light/Dark mode theming.

---

## ✨ Features

- **🎨 Modern Design & Theming**: Clean UI with seamless Light Mode and Dark Mode toggle.
- **📱 Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- **🔍 Instant Search & Category Filters**: Search products by name and filter by categories (*Fashion*, *Electronics*, *Beauty*, and more).
- **🛒 Shopping Cart Management**: Add items, update quantities with sleek steppers, calculate live totals, and view order summaries.
- **❤️ Interactive Wishlist**: Save favorite items with one tap and transfer them directly into the cart.
- **🌐 Real-Time API Deals**: Integrates with live product feeds (*FakeStore API*) alongside curated local products.
- **💾 LocalStorage Persistence**: Cart, wishlist, and theme preferences are automatically saved in the browser.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite](https://vite.dev/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Vanilla CSS with modern CSS Variables (Design System)
- **Deployment**: [GitHub Actions & GitHub Pages](https://pages.github.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<YOUR-USERNAME>/ShopEase.git
cd ShopEase
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Deployment to GitHub Pages

This project is pre-configured for automatic deployment via **GitHub Actions**:

1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
