const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="homeHero.png"
          alt="Hero Image"
          className="mb-1 m-auto"
          style={{ width: "80%" }}
        />
        <h1 className="">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivaties, mutual funds, and
          more
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
