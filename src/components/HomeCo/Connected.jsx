const Connected = () => {
  return (
    <div
      className="justify-center py-10 space-y-10"
      style={{ display: "flex" }}
    >
      <div className=" space-y-4">
        <div>Want to stay connected?</div>
        <div>
          Subscribe here to stay up-to-date on the technologies defining today
          and shaping tomorrow.
        </div>
        <div>
          <input type="text" placeholder="Full Name *" />
          <input type="email" placeholder="Email *" />
          <div>
            <input type="checkbox" name="sada" id="" />
            <div>
              Yes, you can email me and process my data for marketing purposes.
              (learn more)
            </div>
          </div>
          <button className="button-primary">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Connected;
