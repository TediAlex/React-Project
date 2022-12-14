// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Default
import { useContext, useState  } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { user } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const clickMobileMenu = () => {    
    setMobileMenu(!mobileMenu)
  }
  return (
    <header className="site-header clearfix">
      <div className="responsive_menu"
      style={mobileMenu ? {display: 'block'}: {display: 'none'}}>
        <ul className="sf-menu">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? 'active header-menu-link'
                          : 'inactive header-menu-link'
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        isActive
                          ? 'active header-menu-link'
                          : 'inactive header-menu-link'
                      }
                    >
                     Yachts
                    </NavLink>
                  </li>
                  {user.accessToken ? (
                    <>
                      <li>
                        {' '}
                        <NavLink
                          to="/create-product"
                          className={({ isActive }) =>
                          isActive
                            ? 'active header-menu-link'
                            : 'inactive header-menu-link'
                        }
                        >
                          Create Yacht
                        </NavLink>
                      </li>
                      <li>
                        {' '}
                        <NavLink to="/my-profile" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          My Profil
                        </NavLink>
                      </li>
                      <li>
                        {' '}
                        <NavLink to="/logout" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          Logout
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>                    
                      <li
                      >
                        <NavLink to="/login" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/registration" 
                          className={({ isActive }) =>
                          isActive
                            ? 'active header-menu-link'
                            : 'inactive header-menu-link'
                        }
                        >
                          Registration
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink to="/contact" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          Contact Us
                        </NavLink>
                    </li>
                </ul>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left logo">
              <img src="/images/logo.png" alt="Medigo by templatemo" />
            </div>
            <div className="main-navigation pull-right">
              <nav className="main-nav visible-md visible-lg">
                <ul className="sf-menu">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? 'active header-menu-link'
                          : 'inactive header-menu-link'
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        isActive
                          ? 'active header-menu-link'
                          : 'inactive header-menu-link'
                      }
                    >
                     Yachts
                    </NavLink>
                  </li>
                  {user.accessToken ? (
                    <>
                      <li>
                        {' '}
                        <NavLink
                          to="/create-product"
                          className={({ isActive }) =>
                          isActive
                            ? 'active header-menu-link'
                            : 'inactive header-menu-link'
                        }
                        >
                          Create Yacht
                        </NavLink>
                      </li>
                      <li>
                        {' '}
                        <NavLink to="/my-profile" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          My Profil
                        </NavLink>
                      </li>
                      <li>
                        {' '}
                        <NavLink to="/logout" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          Logout
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>                    
                      <li
                      >
                        <NavLink to="/login" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/registration" 
                          className={({ isActive }) =>
                          isActive
                            ? 'active header-menu-link'
                            : 'inactive header-menu-link'
                        }
                        >
                          Registration
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink to="/contact" 
                         className={({ isActive }) =>
                         isActive
                           ? 'active header-menu-link'
                           : 'inactive header-menu-link'
                       }
                        >
                          Contact Us
                        </NavLink>
                    </li>
                </ul>
              </nav>
              <div className="responsive-navigation visible-sm visible-xs">
					        <a href="#nogo" className="menu-toggle-btn" onClick={clickMobileMenu}>
					            <i className="fa fa-bars"></i>
					        </a>
					    </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
