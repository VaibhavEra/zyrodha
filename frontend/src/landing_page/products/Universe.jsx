const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <h1 className="mt-5 mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mt-5"
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
