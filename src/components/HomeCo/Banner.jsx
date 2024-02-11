import SimpleSlider from "./SimpleSlider";

const Banner = () => {
  return (
    <div>
      <div>
        <SimpleSlider />
      </div>
      <div
        className="bg-primaryColor text-white flex justify-around h-20 items-center text-xl pb-2"
      style={{margin:"-.4rem"}}
      >
        <div>
          NEWS
        </div>
        <div>
          <h2>
            WRKMEN Tech Serv Solution Reports Third Quarter Fiscal Year 2024
            Results
          </h2>
        </div>
        <div>
          <button className="button-secondary">READ</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Banner;
