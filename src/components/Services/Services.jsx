import React from "react";
import Styles from "./Service.module.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
  return (
    <div className={Styles.services_con}>
      <h3 className={Styles.services_title}>My Services</h3>
      <div className={Styles.services_list}>
        <div className={Styles.services_items}>
          <FaCode />
          <h4>Web Development</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            beatae at tempore incidunt non fugiat animi tempora! Facilis
            repellat in, cupiditate tenetur nulla numquam unde ipsum recusandae
            reiciendis ad fuga?
          </p>
        </div>
        <div className={Styles.services_items}>
          <FaPaintbrush />
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            beatae at tempore incidunt non fugiat animi tempora! Facilis
            repellat in, cupiditate tenetur nulla numquam unde ipsum recusandae
            reiciendis ad fuga?
          </p>
        </div>
        <div className={Styles.services_items}>
          <FaDesktop />
          <h4>Graphic Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            beatae at tempore incidunt non fugiat animi tempora! Facilis
            repellat in, cupiditate tenetur nulla numquam unde ipsum recusandae
            reiciendis ad fuga?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
