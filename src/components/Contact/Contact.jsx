import React from "react";
import Styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className={Styles.contact_wrapper}>
      <div className={Styles.contact_con}>
        <div className={Styles.contact_info}>
          <h3>Get un touch</h3>
          <p className={Styles.contact_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, nam reiciendis. Obcaecati, animi. Possimus, placeat
            debitis aliquam dolores quasi explicabo ab nesciunt alias vero
            adipisci doloremque dolorum pariatur veniam voluptate?
          </p>
          <p className={Styles.contact_address}>
            123 Main Street
            <br />
            Bangkok, Thailand
          </p>
          <p>
            <FaPhone /> (020) 9552 6046
          </p>
          <p>
            <FaEnvelope /> Tonvathsana106@gmail.com
          </p>
        </div>
        <div className={Styles.contact_form}>
          <form action="">
            <div className={Styles.input_group}>
              <div>
                <label htmlFor="first name"> First Name</label>
                <input type="text" placeholder="eg. jhone" />
              </div>{" "}
              <div>
                <label htmlFor="Last name"> Last Name</label>
                <input type="text" placeholder="eg. Doe" />
              </div>
            </div>
            <label htmlFor="email address"> Email Address</label>
            <input type="email" placeholder="eg. johnde@gmail.com" />
            <label htmlFor="message">Your message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type Here"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
