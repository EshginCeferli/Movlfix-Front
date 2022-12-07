import React from "react";
import { Link} from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import "../assets/css/bootstrap.min.css";

function Navbar() {
  return (
    <div>
      <>
      <ScrollTop/>
        {/* header-area */}
        <header>
          <div id="sticky-header" className="menu-area transparent-header">
            <div className="container custom-container">
              <div className="row">
                <div className="col-12">
                  <div className="mobile-nav-toggler">
                    <i className="fas fa-bars" />
                  </div>
                  <div className="menu-wrap">
                    <nav className="menu-nav show">
                      <div className="logo">
                        <Link to="/">
                        <img src="/images/logo/logo.png" alt="cam" />
                        </Link>
                          
                        
                      </div>
                      <div className="navbar-wrap main-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li className="active menu-item-has-children">
                            <Link to="/">Home</Link>
                            <ul className="submenu">
                              <li className="active">
                                <a href="index.html">Home One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Two</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/movie">Movie</Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/movie">Movie</Link>
                              </li>
                              <li>
                                <a href="movie-details.html">Movie Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="tv-show.html">tv show</a>
                          </li>
                          <li>
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/blog">Blog</Link>
                            {/* <a href="#">blog</a> */}
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">Our Blog</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="header-action d-none d-md-block">
                        <ul>
                          <li className="header-search">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#search-modal"
                            >
                              <i className="fas fa-search" />
                            </a>
                          </li>
                          <li className="header-lang">
                            <form action="#">
                              <div className="icon">
                                <i className="fas fa-sharp fa-solid fa-globe"></i>
                              </div>
                              <select id="lang-dropdown">
                                <option value="">En</option>
                                <option value="">Au</option>
                                <option value="">AR</option>
                                <option value="">TU</option>
                              </select>
                            </form>
                          </li>
                          <li className="header-btn">
                            <a href="#" className="btn">
                              Sign In
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu  */}
                  <div className="mobile-menu">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <nav className="menu-box">
                      <div className="nav-logo">
                        <a href="index.html">
                          <img src="img/logo/logo.png" alt="" title="" />
                        </a>
                      </div>
                      <div className="menu-outer">
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                      </div>
                      <div className="social-links">
                        <ul className="clearfix">
                          <li>
                            <a href="#">
                              <span className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-pinterest-p" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="menu-backdrop" />
                  {/* End Mobile Menu */}
                  {/* Modal Search */}
                  <div
                    className="modal fade"
                    id="search-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <form>
                          <input type="text" placeholder="Search here..." />
                          <button>
                            <i className="fas fa-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Modal Search-end */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-area-end */}
      </>
 
    </div>
  );
}

export default Navbar;
