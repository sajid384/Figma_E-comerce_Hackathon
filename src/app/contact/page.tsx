import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ContactUsPage from "../components/Contact";
import HighQualitySection from "../components/HighQualitySection";




const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ContactUsPage />
      <HighQualitySection />
      <Footer />
    </div>
  );
};

export default Home;
