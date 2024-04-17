import Home from "./Home";
import WhyChooseUs from "./WhyChooseUs";
import Howitworks from "./Howitworks";
import Roadmap from "./Roadmap";
import DiamonArrow from "@/components/DiamonArrow";
import See from "./See";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Home />
      <div id="background">
        <DiamonArrow />
        <WhyChooseUs />
        <DiamonArrow />
        <Howitworks />
        <DiamonArrow />
        <Roadmap />
        <DiamonArrow />
        <See />
      </div>
    </>
  );
};

export default Main;
