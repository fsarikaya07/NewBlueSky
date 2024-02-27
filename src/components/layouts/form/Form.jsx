import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ToastComponent from "../toastComponent/ToastComponent";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdrm1n8",
        "template_mc91pa9",
        form.current,
        "SnhIAoux4ygkXsY6u"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowAlert(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {showAlert && (
        <ToastComponent showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
      <form ref={form} onSubmit={sendEmail} className="form-info">
        <div className="one-half v3">
          <p className="input-info">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required="required"
            />
          </p>
          <p className="input-info">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required="required"
            />
          </p>

          <p className="input-info">
            <button type="submit" value="Send" className="submit">
              Send Message
            </button>
          </p>
        </div>
        <div className="one-half v4">
          <p className="input-info">
            <textarea
              id="message-contact"
              name="message"
              placeholder="Message"
              required="required"
            ></textarea>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
