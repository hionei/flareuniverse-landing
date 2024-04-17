import "./Howitworks.scss";
import { useMediaQuery } from "react-responsive";

const Howitworks = () => {
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  return (
    <div id="howitworks">
      <h2 className="howitworks mb-10">
        How it<span> works?</span>
      </h2>
      <div className="flex justify-center flex-col items-center gap-32 px-5">
        <div className={`content-item flex gap-10 ${isMobile ? "flex-wrap justify-center" : ""}`}>
          <img src="background/account.png" />
          <div className="item-desc-box flex flex-col gap-10">
            <label>01.</label>
            <h3>Account Management</h3>
            <p>Connect metamask and wrap, delegate and get reward by delegation per epoch period</p>
          </div>
        </div>
        <div className={`content-item flex gap-10 ${isMobile ? "flex-wrap justify-center" : ""}`}>
          {isMobile && <img src="background/metrics-img.png" />}
          <div className="item-desc-box flex flex-col gap-10">
            <label>02.</label>
            <h3>FTSO Performance Monitor</h3>
            <p>You can see all the performance data by clicking the ftso data provider what you want</p>
          </div>
          {!isMobile && <img src="background/metrics-img.png" />}
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
