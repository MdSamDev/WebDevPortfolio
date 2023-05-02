import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [userName, setUserName] = useState(" ");

  const handleSubmit = () => {

  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage =  (e) => {
    setMessage(e.target.value)
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit} action ='mailto:yykhan91@gmail.com'>
      <h2>Send Me A Message</h2>
      <section className="user-contact--section">
        <div className="user-contact-secion row-first">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            value={userName}
            placeholder = 'Your Name'
            onChange={handleUserName}
          />

          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your Email Address"
            onChange={handleEmail}
          />
        </div>
      </section>
      <section className="user-info--section row-first">
       <label htmlFor="message">Your Message:</label>
        <textarea className="msg-area" 
        placeholder="Your Message"
        value={message}
        id= 'message'
        onChange={handleMessage}
        />
      </section>
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Contact;
