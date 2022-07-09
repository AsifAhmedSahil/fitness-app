import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const from = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-undef
    emailjs
      .sendForm(
        "service_ssjolvh",
        "template_65nt41e",
        // eslint-disable-next-line no-undef
        form.current,
        "2nWMNlHGF7sNYecPy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={from}
          action=""
          className="email-container"
          onClick={sendEmail}
        >
          <input
            type="email"
            name="user-email"
            placeholder="Enter your Email Here"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
