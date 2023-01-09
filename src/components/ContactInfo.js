import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

function ContactInfo() {
  const { t } = useTranslation();

  const [contact, setContact] = useState([]);

  //Get Contact from Api
  async function getContact() {
    await axios
      .get(`https://localhost:7079/api/Contact/GetAll`)
      .then((response) => {
        setContact(response.data);
      });
  }

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      {" "}
      <div className="widget-title mb-5">
        <h5 className="title">{t(`information`)}</h5>
      </div>
      {contact?.map((cont, index) => {
        return (
          <div className="contact-info-wrap" key={index}>
            <p>
              <span>{t(`find solution`)} :</span>
              {t(`to common problems, or get help
      from a support agent industry's standard`)}{" "}
              .
            </p>
            <div className="contact-info-list">
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <p>
                    <span>{t(`address`)} :</span>
                    {cont.address}
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <p>
                    <span>{t(`phone`)} :</span> {cont.phone}
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
                    >
                      {cont.email}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;
