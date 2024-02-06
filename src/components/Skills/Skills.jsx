import React from "react";
import styles from "./Skills.module.css";
import { FaVuejs, FaReact, FaCss3, FaHtml5, FaSquareJs } from "react-icons/fa6";

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
          <FaVuejs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaCss3 />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaSquareJs />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
