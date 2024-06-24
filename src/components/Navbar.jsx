import { useState } from "react";
import "../css/navbar.css";
import SideNav from "./SideNav";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <header className="container">

        <div className="logo-head">
          <div className="nav-logo">
            <a href="#">
              <img
                src="https://w1.pngwing.com/pngs/659/960/png-transparent-gold-badge-university-of-ceylon-university-of-sri-lanka-higher-education-college-faculty-university-of-peradeniya-logo-thumbnail.png"
                alt="Uni-logo"
              />
            </a>
          </div>
          <div className="head">
            <h2>Non Academic Staffs</h2>
            <h5>University of Peradeniya</h5>
          </div>
        </div>

        <div className="nav">
            <p><a href="#">Staffs</a></p>
            <p><a href="#">Forms</a></p>
            <p><a href="#">Profile</a></p>
            <p><a href="#">News</a></p>
        </div>

        <div className="login-signup">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
      </header>

      <button id="side-nav-btn" onClick={toggleSideNav}>
        <img id="side-nav-img" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-direction-right-round-outline-icon.png" alt="" />
      </button>
      <SideNav isOpen={isSideNavOpen} toggleNav={toggleSideNav} />
      
    </>
  );
};

export default Navbar;
