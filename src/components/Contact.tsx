import React from 'react'
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
 const form = useRef<HTMLFormElement | null>(null);
    
      const sendEmail = async (
        e: React.FormEvent<HTMLFormElement>
      ) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_do0u29m",
            "template_avyjyxd",
            form.current!,
            "WIiMsWlNxsiDV3_Zz"
          )
          .then(
            () => {
              alert("Message sent successfully ✅");
            },
            (error) => {
              alert("Failed to send message ❌");
              console.log(error.text);
            }
          );
      };
  return (
    <section className="contact" id="contact">
          <div className="contact-left">
            <h2>Get In Touch</h2>

            <p>
              I’m currently open to new opportunities and collaborations.
            </p>

            <div className="contact-info">
              <p>Email: ishikarana1201@gmail.com</p>
              <p>Phone: +91 9898020624</p>
              <p>Location: Bharuch, Gujarat, India</p>
            </div>
          </div>

          <div className="contact-right">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-right"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit" className="primary-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
  )
}

export default Contact