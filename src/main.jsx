import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <About />
    <Testimonials />
    <Gallery />
    <Footer />
  </StrictMode>,
);
