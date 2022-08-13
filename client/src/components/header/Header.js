import { useContext } from "react";

// Import Component
import { UserContext } from "../../contexts/UserContext";

import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user.accessToken);
  return (
    <header className="site-header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left logo">
             
                <img src="/images/logo.png" alt="Medigo by templatemo" />
              
            </div>
            <div className="main-navigation pull-right">
              <nav className="main-nav visible-md visible-lg">
                <ul className="sf-menu">
                  <li className="active">
                    
                    <Link to="/" className="header-menu-link">Home</Link>
                  </li>
                  <li>
                    <Link to="/products" className="header-menu-link">Portfolio</Link>
                    {/* <ul>
                      <li>
                       Portfolio Grid
                      </li>
                      <li>
                        Project Image
                      </li>
                      <li>
                        Project Slideshow
                      </li>
                    </ul> */}
                  </li>
                 
                  {user.accessToken
                  ?  <>
                  <li> <Link to="/create-product" className="header-menu-link">Create Product</Link></li>
                  <li> <Link to="/my-profile" className="header-menu-link">My Profil</Link></li>
                  <li> <Link to="/logout" className="header-menu-link">Logout</Link></li></>

                  
                  :
                 <><li>
                  <Link to="/login" className="header-menu-link">Login</Link>
                  </li>
                  <li>
                  <Link to="/registration" className="header-menu-link">Registration</Link>
                  </li></>
                  }
                  
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
