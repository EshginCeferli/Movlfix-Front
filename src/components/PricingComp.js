import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";


function PricingComp() {
  const { t } = useTranslation();
  const url = "https://localhost:7079";

  const [pricings, setPricings] = useState([]);

  //Get Pricings from Api
  async function GetPricings() {
    await axios.get(`${url}/api/Pricing/GetAll`).then((res) => {
      setPricings(res.data);
    });
  }

  useEffect(() => {
    GetPricings();
  }, []);

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
            {pricings.map((price, i) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-8" key={i}>
                  <div className="pricing-box-item mb-30">
                    <div className="pricing-top">
                      <h6>{price.name}</h6>
                      <div className="price">
                        <h3>${price.price}</h3>
                        <span> {t(`monthly`)}</span>
                      </div>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li className="quality">
                          <i className="fas fa-check" /> {t(`video quality`)}
                          <span> {t(`${price.quality}`)}</span>
                        </li>
                        <li>
                          <i className="fas fa-check" /> {t(`resolution`)}
                          <span>{price.resolution}</span>
                        </li>
                        <li>
                          <i className="fas fa-check" /> {t(`cancel anytime`)}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingComp;
