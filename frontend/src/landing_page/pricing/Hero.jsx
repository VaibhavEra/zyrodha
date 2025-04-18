const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-3 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-2">
          Free equity investments and flat $20 intraday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4">
          <img src="pricingEquity.svg" alt="" />
          <h1 className="fs-2">Free equity delivery</h1>
          <p
            className="text-muted
          "
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="intradayTrades.svg" alt="" />
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="pricingEquity.svg" alt="" />
          <h1 className="fs-2">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
