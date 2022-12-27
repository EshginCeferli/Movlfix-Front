import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Flag from 'react-world-flags'
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import "../assets/css/bootstrap.min.css";

function Navbar() {
  const { t } = useTranslation();

  function changeLng(value) {
    document.cookie = `i18next=${value}`;
    window.location.reload(true);
  }

  return (
    <div>
      <>   
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
                        <NavLink to="/">
                          <img src="/images/logo/logo.png" alt="cam" />
                        </NavLink>
                      </div>
                      <div className="navbar-wrap main-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li className="active menu-item-has-children">
                            <NavLink to="/">{t(`home`)}</NavLink>
                            
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/movie">{t(`movie`)}</NavLink>
                          </li>
                          <li>
                            <NavLink to="/pricing">{t(`pricing`)}</NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/blog">{t(`blog`)}</NavLink>
                            {/* <a href="#">blog</a> */}
                          </li>
                          <li>
                            <NavLink to="/contact">{t(`contact`)}</NavLink>
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
                              <select                                
                                name=""
                                id=""
                                defaultValue={Cookies.get("i18next")}
                                onChange={(e) => changeLng(e.target.value)}
                              >
                                <option className="select-option" value="en">
                                Eng
                                </option>
                                <option className="select-option" value="az">
                                  Az
                                </option>
                              </select>
                            </form>
                          </li>
                          <li className="header-btn">
                            <a href="#" className="btn">
                            {t(`sign in`)}
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
