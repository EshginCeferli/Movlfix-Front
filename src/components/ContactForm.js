import React from 'react'
import { useTranslation } from "react-i18next";


function ContactForm() {

  const { t } = useTranslation();

  return (
    <div> <div className="contact-form-wrap">
    <div className="widget-title mb-5">
      <h5 className="title">{t(`contact form`)}</h5>
    </div>
    <div className="contact-form">
    <form action="#">
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder= {t(`your name *`)} />
              </div>
              <div className="col-md-6">
                <input type="email" placeholder= {t(`your email`)} />
              </div>
            </div>
            <input type="text" placeholder= {t(`subject`)} />
            <textarea
              name="message"
              placeholder= {t(`your message...`)}
              defaultValue={""}
            />
            <button className="btn"> {t(`send a message`)}</button>
          </form>
    </div>
  </div></div>
  )
}

export default ContactForm