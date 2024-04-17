import "./Home.scss";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  return (
    <div id="home" className="flex items-center justify-center">
      <h1 className={`${isMobile ? "text-[1.8em]" : "text-[3em]"} home-text`}>
        Unlocking The Power of Flare Network <br /> <span>By Flare Universe</span>
      </h1>
    </div>
  );
};

export default Home;
