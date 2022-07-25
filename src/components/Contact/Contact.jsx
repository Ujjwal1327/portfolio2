import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";

import phone from "../../Image/phone.png";
import address from "../../Image/address.png";
import email from "../../Image/email.png";
import { useRef, useState } from "react";
export default function Contact() {
  const [done, setdone] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m9p4mla",
        "template_5106gfq",
        form.current,
        "s9NpNAWtLrTiGAM1A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(
            "Thanks for sending message, I will reply as soon as possible. kindly make sure your email."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={classes.contact}>
      <div className={classes.left}>
        <h2>Let's discuss this Project</h2>
        <div className={classes.container}>
          <div className={classes.box}>
            <img src={phone} alt="" />
            <p>+91 7677765550</p>
          </div>
          <div className={classes.box}>
            <img src={email} alt="" />
            <p>ujjwal.13du@gmail.com</p>
          </div>
          <div className={classes.box} style={{ width: "180px" }}>
            <img src={address} alt="" />
            <p>South lane, Bhadra ghat, Patna city,Bihar</p>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.text}>
          <p>
            <b> What is your query? </b>
            Hire me. I am always available for freelancing.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea
            name="user_message"
            placeholder="Message"
            rows="5"
          ></textarea>
          <button>Submit</button>
        </form>
        <div className={classes.done}>{done}</div>
      </div>
    </div>
  );
}
