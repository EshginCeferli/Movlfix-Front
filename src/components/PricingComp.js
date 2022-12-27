import React from "react";
import { useTranslation } from "react-i18next";


function PricingComp() {

  const { t } = useTranslation();

  return (
    <section
      className="pricing-area pricing-bg"
      style={{ backgroundImage: "url(/images/bg/pricing_bg.jpg)" }}
      // data-background="img/bg/pricing_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-three text-center mb-70">
              <span className="sub-title"> {t(`our pricing plans`)}</span>
              <h2 className="title"> {t(`our pricing strategy`)}</h2>
            </div>
          </div>
        </div>
        <div className="pricing-box-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item mb-30">
                <div className="pricing-top">

                  <h6>Standart</h6>
                  <div className="price">
                    <h3>$7.99</h3>
                    <span> {t(`monthly`)}</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality">
                      <i className="fas fa-check" /> {t(`video quality`)}
                      <span> {t(`good`)}</span>
                    </li>
                    <li>
                      <i className="fas fa-check" />  {t(`resolution`)}
                      <span>720p</span>
                    </li>                  
                    <li>
                      <i className="fas fa-check" />  {t(`cancel anytime`)}
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="btn">
                  {t(`buy now`)}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item active mb-30">
                <div className="pricing-top">
                  <h6>Premium</h6>
                  <div className="price">
                    <h3>$9.99</h3>
                    <span> {t(`monthly`)}</span>
                  </div>
                </div>
                <div className="pricing-list">
                <ul>
                    <li className="quality">
                      <i className="fas fa-check" /> {t(`video quality`)}
                      <span> {t(`best`)}</span>
                    </li>
                    <li>
                      <i className="fas fa-check" />  {t(`resolution`)}
                      <span>1080p</span>
                    </li>                  
                    <li>
                      <i className="fas fa-check" />  {t(`cancel anytime`)}
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" className="btn">
                  {t(`Buy now`)}
                  </a>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingComp;
