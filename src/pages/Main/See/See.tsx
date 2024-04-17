import "./See.scss";

const See = () => {
  return (
    <div id="see" className="flex justify-center flex-col gap-10">
      <h1>
        Let's see <span>the dApp</span>
      </h1>
      <div className="flex justify-center">
        <a className="btn-grad rounded-full" href="https://app.flareuniverse.xyz" target="_blank">
          Open dAPP
        </a>
      </div>
    </div>
  );
};

export default See;
