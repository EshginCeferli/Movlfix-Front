import React from 'react'
import { useTranslation } from "react-i18next";

function ContactBanner() {

  const { t } = useTranslation();

  return (
    <div><section
      className="breadcrumb-area breadcrumb-bg"
      style={{ backgroundImage: "url(/images/bg/breadcrumb_bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">{t(`Contact Us`)}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">{t(`home`)}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  {t(`contact`)}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactBanner