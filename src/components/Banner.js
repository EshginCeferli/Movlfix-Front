import React from "react";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div>
      <>
        {/* banner-area */}
        <section
          className="banner-area banner-bg"
          style={{ backgroundImage: "url(/images/banner/banner_bg01.jpg)" }}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <div className="banner-content">
                  <h6
                    className="sub-title wow fadeInUp"
                    data-wow-delay=".2s"
                    data-wow-duration="1.8s"
                  >
                    {t(`movflix`)}
                  </h6>
                  <h2
                    className="title wow fadeInUp"
                    data-wow-delay=".4s"
                    data-wow-duration="1.8s"
                  >
                     {t(`unlimited`)} <span> {t(`movie`)}</span>,  {t(`shows`)}, &amp;  {t(`more`)}.
                  </h2>
                  <div
                    className="banner-meta wow fadeInUp"
                    data-wow-delay=".6s"
                    data-wow-duration="1.8s"
                  >
                    <ul>
                      <li className="quality">
                        <span>Pg 18</span>
                        <span>hd</span>
                      </li>
                      <li className="category">
                        <a href="#">Romance,</a>
                        <a href="#">Drama</a>
                      </li>
                      <li className="release-time">
                        <span>
                          <i className="far fa-calendar-alt" /> 2021
                        </span>
                        <span>
                          <i className="far fa-clock" /> 128  {t(`min`)}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    className="banner-btn btn popup-video wow fadeInUp"
                    data-wow-delay=".8s"
                    data-wow-duration="1.8s"
                  >
                    <i className="fas fa-play" />  {t(`watch now`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-area-end */}
      </>
    </div>
  );
}

export default Banner;
