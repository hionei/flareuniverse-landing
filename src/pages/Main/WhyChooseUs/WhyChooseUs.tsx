import "./WhyChooseUs.scss";

const cardList = [
  {
    src: "public/background/easy.png",
    title: "Easy to Use",
    content: "Manage your assets easily in one page: Wrapping, Unwrapping, Sending, Delegating, Claiming Rewards",
  },
  {
    src: "public/background/fee.png",
    title: "0 FLR(SGB) Auto-claim fee",
    content: "Experience zero fees upon activating auto-claim functionality for automatic delegation reward retrieval.",
  },
  {
    src: "public/background/running.png",
    title: "Awesome FTSO",
    content: "We are going to run ftso data provider with high success rate and reward rate to delegators.",
  },
  {
    src: "public/background/metrics.png",
    title: "Wide insights for metrics",
    content:
      "Unlike other metrics, our metrics update quickly, displaying a wide insights and highly accurate performance of ftso data providers.",
  },
];

const WhyChooseUs = () => {
  return (
    <div id="whychooseus">
      <h2 className="choose-us mb-10">
        Why <span>choose us?</span>
      </h2>
      <div className="flex justify-center flex-wrap gap-10">
        {cardList.map((card, index) => {
          return (
            <div className={index % 2 == 0 ? "pb-10" : "pt-10"}>
              <div className="card" key={"card" + index}>
                <img src={card.src} alt="card-image" />
                <h4 className="card-title">{card.title}</h4>
                <p className="card-content">{card.content}</p>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
