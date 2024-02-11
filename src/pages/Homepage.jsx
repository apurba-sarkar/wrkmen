import Banner from "../components/HomeCo/Banner";
import Bodypart2 from "../components/HomeCo/Bodypart2";
import Connected from "../components/HomeCo/Connected";
import Stats from "../components/HomeCo/Stats";
import Widers from "../components/HomeCo/Widers";
import Navbar from "../components/HomeCo/Navbar";

export const Homepage = () => {
  return (
    <div>
      <Widers />
      <Navbar />
      <Banner />
      <Bodypart2/>
      <Stats/>
      <Connected/>
    </div>
  );
};
