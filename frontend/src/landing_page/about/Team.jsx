const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row text-muted">
        <div className="col-6 p-5 text-center text-muted">
          <img
            src="nithinKamath.jpg"
            alt="nithin kamath"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5">Nikhil Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
