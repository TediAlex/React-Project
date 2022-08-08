// Import Component

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left logo">
              <a  >
                <img src="images/logo.png" alt="Medigo by templatemo" />
              </a>
            </div>
            <div className="main-navigation pull-right">
              <nav className="main-nav visible-md visible-lg">
                <ul className="sf-menu">
                  <li className="active">
                    <a  >Home</a>
                  </li>
                  <li>
                    <Link to="/portfolio" className="header-menu-link">Portfolio</Link>
                    <ul>
                      <li>
                        <a  >Portfolio Grid</a>
                      </li>
                      <li>
                        <a  >Project Image</a>
                      </li>
                      <li>
                        <a  >Project Slideshow</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a  >Blog</a>
                    <ul>
                      <li>
                        <a  >Blog Standard</a>
                      </li>
                      <li>
                        <a  >Blog Single</a>
                      </li>
                      <li>
                        <a  >visit templatemo</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a  >Archives</a>
                  </li>
                  <li>
                    <a  >Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
