import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jx1u96f',
      'template_bxvwp2l',
      form.current,
      '6gr4uOMy7m8Ps9C2p'
    )
    .then((result) => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message.");
    });

    e.target.reset(); // optional: clears form
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className = "contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}