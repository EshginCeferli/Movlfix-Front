import React from 'react'
import { useTranslation } from "react-i18next";


function ContactInfo() {

  const { t } = useTranslation();

  return (
    <div> <div className="widget-title mb-5">
    <h5 className="title">{t(`information`)}</h5>
  </div>
  <div className="contact-info-wrap">
    <p>
      <span>{t(`find solution`)} :</span>{t(`to common problems, or get help
      from a support agent industry's standard`)}  .
    </p>
    <div className="contact-info-list">
      <ul>
        <li>
          <div className="icon">
            <i className="fas fa-map-marker-alt" />
          </div>
          <p>
            <span>{t(`address`)} :</span> W38 Park Road New York
          </p>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-phone-alt" />
          </div>
          <p>
            <span>{t(`phone`)} :</span> (09) 123 854 365
          </p>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-envelope" />
          </div>
          <p>
            <span>{t(`email`)} :</span>{" "}
            <a
              href="https://themebeyond.com/cdn-cgi/l/email-protection"
              className="__cf_email__"
              data-cfemail="0d7e787d7d627f794d60627b6b6175236e6260"
            >
              [email&nbsp;protected]
            </a>
          </p>
        </li>
      </ul>
    </div>
  </div></div>
  )
}

export default ContactInfo