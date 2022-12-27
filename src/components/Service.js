import React from "react";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();

  return (
    <div>
      <>
        {/* services-area */}
        <section
          className="services-area services-bg"
          //   data-background="img/bg/services_bg.jpg"
          style={{ backgroundImage: "url(/images/bg/services_bg.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img-wrap">
                  <img src="images/images/services_img.jpg" alt="" />
                  <a
                    href="images/images/services_img.jpg"
                    className="download-btn"
                    download=""
                  >
                    {t(`download`)} <img src="/fonts/download.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-content-wrap">
                  <div className="section-title title-style-two mb-2">
                    <span className="sub-title">{t(`our services`)}</span>
                    <h2 className="title">
                      {t(`Download Your Shows Watch Offline.`)}
                    </h2>
                  </div>
                  <p>{t(`upcoming movies`)}</p>
                  <div className="services-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-light fa-tv"></i>
                        </div>
                        <div className="content">
                          <h5> {t(`Enjoy on Your TV.`)}</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-light fa-video"></i>
                          {/* <i clasName="fas fa-regular fa-video"></i>
                        <i className="fasfa-light fa-tv-retro"></i> */}
                        </div>
                        <div className="content">
                          <h5> {t(`watch everywhere`)}</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services-area-end */}
      </>
    </div>
  );
}

export default Service;
