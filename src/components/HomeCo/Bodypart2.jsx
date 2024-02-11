const Bodypart2 = () => {
  const gridStyles = {
    display: "grid",
  };
  return (
    <div
      style={gridStyles}
      className="grid-cols-2 pt-9 px-40 pl-52 bg-white gap-y-12 gap-x-7 place-items-center"
    >
      <div className="flex-col items-center space-y-4 ">
        <div className="text-4xl pb-2 font-medium gap-8">
          Mission-critical IT that transform <br/> business
        </div>
        <div className="text-2xl pb-2">
          Navigate the challenges and capitalize on the opportunities ahead to
          achieve greater performance, scale and competitiveness.
        </div>
        <div>
          <button className="button-primary">Learn About WRKMEN</button>
        </div>
      </div>
      <div>
        {" "}
        <img src="./grid/grid1.png" />{" "}
      </div>
      <div>
        <img src="./grid/grid2.png" />
      </div>
      <div>
        <div className="flex-col items-center space-y-4 ">
          <div className="text-4xl pb-2 font-medium gap-8">
          The power of DXC people and  <br/> technology

          </div>
          <div className="text-2xl pb-2">
          We deliver excellence for our customers and colleagues every day. Our values form the foundation of everything we do and every decision we make.

          </div>
          <div>
            <button className="button-primary">Join Our Team</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Bodypart2;
