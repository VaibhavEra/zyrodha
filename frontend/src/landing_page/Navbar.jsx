import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="logo.svg" alt="logo" style={{ width: "25%" }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                  style={{ marginLeft: "20px" }}
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  style={{ marginLeft: "20px" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/products"
                  style={{ marginLeft: "20px" }}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/pricing"
                  style={{ marginLeft: "20px" }}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/support"
                  style={{ marginLeft: "20px" }}
                >
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
