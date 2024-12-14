import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import CartPage from "../components/CartPage";



const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <CartPage />
      <Footer />
    </div>
  );
};

export default Home;
