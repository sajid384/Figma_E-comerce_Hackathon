import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ProductPage from "../components/ProductPage";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default Home;
