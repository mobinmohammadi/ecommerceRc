import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
    </div>
  );
};

export default Home;
