import React from "react";
import styles from "./Skills.module.css";
import { FaVuejs, FaReact, FaCss3, FaHtml5, FaSquareJs } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import Tilt from "react-parallax-tilt";


function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill</h3>
      <ul className={styles.skills_list}>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <SiAdobephotoshop />
          </li>
        </Tilt>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <SiAdobeillustrator />
          </li>
        </Tilt>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <FaVuejs />
          </li>
        </Tilt>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <FaReact />
          </li>
        </Tilt>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <FaCss3 />
          </li>
        </Tilt>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <FaHtml5 />
          </li>
        </Tilt>
        <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
          <li>
            <FaSquareJs />
          </li>
        </Tilt>
      </ul>
    </div>
  );
}

export default Skills;
