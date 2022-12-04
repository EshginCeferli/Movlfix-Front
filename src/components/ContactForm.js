import React from 'react'

function ContactForm() {
  return (
    <div> <div className="contact-form-wrap">
    <div className="widget-title mb-5">
      <h5 className="title">Contact Form</h5>
    </div>
    <div className="contact-form">
      <form action="#">
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="You Name *" />
          </div>
          <div className="col-md-6">
            <input type="email" placeholder="You  Email *" />
          </div>
        </div>
        <input type="text" placeholder="Subject *" />
        <textarea
          name="message"
          placeholder="Type Your Message..."
          defaultValue={""}
        />
        <button className="btn">Send Message</button>
      </form>
    </div>
  </div></div>
  )
}

export default ContactForm