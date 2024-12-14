import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Product from "./components/Product";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
