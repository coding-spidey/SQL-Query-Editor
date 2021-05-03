import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md" id="main-nav">
      <div className="container border-bottom">
        <div className="navbar-brand header">
          <h4>atlan</h4>
        </div>
        <button
          className="navbar-toggler"
          data-target="#navbarCollapse"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item pl-3">
              <a href="https://atlan.com/" className="nav-link">
                Platform
              </a>
            </li>
            <li className="nav-item pl-3">
              <a href="https://atlan.com/" className="nav-link">
                Resources
              </a>
            </li>
            <li className="nav-item pl-3">
              <a href="https://atlan.com/careers" className="nav-link">
                Careers
              </a>
            </li>
            <li className="nav-item pl-3">
              <a href="https://atlan.com/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item pl-3">
              <a
                href="https://demo.atlan.com/#/5ic6e1e/screen/66363418/?utm_source=website&utm_medium=referral&utm_term=/"
                className="nav-link btn btn-primary text-light"
              >
                See The Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
