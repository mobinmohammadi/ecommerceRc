import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import Header from "../components/Header";
import FeatureProducts from "../components/products/FeatureProducts";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <FeatureProducts/>
    </div>
  );
};

export default Home;
