import React from "react";
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";
import ContactBanner from "../../components/ContactBanner";
import Trial from "../../components/Trial"

function Contact() {
  return (
    <div>
      <ContactBanner />
      <section
        className="contact-area contact-bg"
        // data-background="img/bg/contact_bg.jpg"
        style={{ backgroundImage: "url(/images/bg/contact_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <ContactForm />
            </div>
            <div className="col-xl-4 col-lg-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4286744962415!2d49.851756815354676!3d40.37719087936969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1str!2s!4v1670009956495!5m2!1str!2s"
  width={1500}
  height={450}
  style={{ border: 10}}
  allowFullScreen=""
  loading="fast"
  referrerPolicy="no-referrer-when-downgrade"
/>
    
    <Trial/>
    </div>

  );
}

export default Contact;
