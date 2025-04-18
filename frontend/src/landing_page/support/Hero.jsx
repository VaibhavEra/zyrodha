const Hero = () => {
  return (
    <section className="containerfluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row" id="supportCont">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket.
          </h1>
          <input placeholder="Eg. how do I activate F&O" /> <br />
          <a href="" style={{ marginRight: "25px" }}>
            Track account opening
          </a>
          <a href="" style={{ marginRight: "25px" }}>
            Track segment activation
          </a>
          <a href="" style={{ marginRight: "25px" }}>
            Intraday margins
          </a>
          <a href="" style={{ marginRight: "25px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1>Featured</h1>
          <ol>
            <li>
              <a href="#">MCX Option contracts expiry - April 2025</a>
            </li>
            <li>
              <a href="#">MCX Base metals contract expiry - April 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
