import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();




  return (
    <div>
      <footer>
        <div className="footer-top-wrap">
          <div className="container">
            <div className="footer-menu-wrap">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="images/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="footer-menu">
                    <nav>
                      <ul className="navigation">
                        <li>
                          <Link to={"/"} >{t(`home`)}</Link>
                        </li>
                        <li>
                          <Link to={"/movie"}>{t(`movie`)}</Link>
                        </li>

                        <li>
                          <Link to={"/pricing"}>{t(`pricing`)}</Link>
                        </li>
                      </ul>
                      <div className="footer-search">
                        <form action="#">
                          <input
                            type="text"
                            placeholder="Find Favorite Movie"
                          />
                          <button>
                            <i className="fas fa-search" />
                          </button>
                        </form>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-quick-link-wrap">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="quick-link-list">
                    <ul>
                      <li>
                        <Link to={"/about"} >{t(`about`)}</Link>
                      </li>
                      <li>
                        <Link to={"/terms"} >{t(`terms of use`)}</Link>
                      </li>
                      <li>
                        <Link to={"/privacy"} >{t(`privacy`)}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>
                    Copyright © 2022. {t(`all rights reserved by`)}
                    <a href="index.html"> Movflx</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="payment-method-img text-center text-md-right">
                  <img src="images/images/card_img.png" alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
