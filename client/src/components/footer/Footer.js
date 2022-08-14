// Import Setvices
import { useLocalStorage } from '../../hook/useLocalStorage';
// Import Default
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  const [user] = useLocalStorage('auth', {});
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="footer-nav clearfix">
              <ul className="sf-menu"></ul>
              <ul className="footer-menu">
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
                    Portfolio
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
                        Create Product
                      </NavLink>
                    </li>
                    <li>
                      {' '}
                      <NavLink
                        to="/my-profile"
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
                      <NavLink
                        to="/logout"
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
                    <li>
                      <NavLink
                        to="/login"
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
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright-text">Copyright &copy; 2084 Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
