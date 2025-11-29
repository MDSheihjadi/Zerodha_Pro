import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/productsPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./landing_page/NotFound";

// import Navbar from './landing_page/navbar/Navbar';
// import Footer from './landing_page/footer/Footer';

// Make sure this matches the id in your public/index.html
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* setting up all the routes for different pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* now navbar and footer will be visible on all pages */}
    </BrowserRouter>
  );
} else {
  console.error(
    "Root element not found. Please ensure there is a div with id='root' in your public/index.html."
  );
}
