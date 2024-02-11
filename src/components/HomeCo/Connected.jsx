const Connected = () => {


  const input_style= {
    backgroundColor:"transparent",
    padding:"1rem"
  }
  return (
    <div
      className="justify-center py-10 space-y-10"
      style={{ display: "flex" }}
    >
      <div className=" space-y-4">
        <div className="text-4xl font-medium ">Want to stay connected?</div>
        <div>
          Subscribe here to stay up-to-date on the technologies defining today
          and shaping tomorrow.
        </div>
        <div>
          <div style={{display:"flex"}} className="flex gap-10">
            <input type="text" placeholder="Full Name *" style={input_style} />
            <input type="email" placeholder="Email *" style={input_style}/>
          </div>
          <div className="flex gap-2 pt-4">
            <input type="checkbox" name="sada" id="" />
            <div>
              Yes, you can email me and process my data for marketing purposes.
              (learn more)
            </div>
          </div>
            <button className="button-primary">SEND DATA</button>
        </div>
      </div>
    </div>
  );
};

export default Connected;
