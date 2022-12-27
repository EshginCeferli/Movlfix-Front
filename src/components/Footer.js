import React from "react";
import { useTranslation } from "react-i18next";

function Footer(props) {
  const { t } = useTranslation();

  let movies = props.movies
 
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
                          <a href="index.html">{t(`home`)}</a>
                        </li>
                        <li>
                          <a href="index.html">{t(`movie`)}</a>
                        </li>

                        <li>
                          <a href="pricing.html">{t(`pricing`)}</a>
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
                        <a href="#">{t(`about`)}</a>
                      </li>
                      <li>
                        <a href="#">{t(`terms of use`)}</a>
                      </li>
                      <li>
                        <a href="#">{t(`privacy`)}</a>
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
      {movies?.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })} 
    </div>
  );
}

export default Footer;
