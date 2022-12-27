import React from 'react'
import { useTranslation } from "react-i18next";

function Trial() {

  const { t } = useTranslation();

  return (
    <div><section
      className="newsletter-area newsletter-bg"
      style={{ backgroundImage: "url(/images/bg/newsletter_bg.jpg)" }}
    // data-background="img/bg/newsletter_bg.jpg"
    >
      <div className="container">
        <div className="newsletter-inner-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h4>{t(`trial start first 30 days`)}</h4>
                <p>{t(`enter your email to refresh or start your membership`)}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="#" className="newsletter-form">
                <input type="email" required="" placeholder={t(`enter your email`)} />
                <button className="btn">{t(`get started`)}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Trial