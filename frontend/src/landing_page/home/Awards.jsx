const Awards = () => {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="largestBroker.svg" alt="" />
        </div>
        <div className="col-6 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Future and Options</li>
                <li>Commodity derivaties</li>
                <li>Currency derivaties</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Gold</li>
              </ul>
            </div>
          </div>
          <img
            src="pressLogos.png"
            alt="Press Logos"
            style={{ widht: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
