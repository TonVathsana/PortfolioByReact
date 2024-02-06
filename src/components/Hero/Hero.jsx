import React from "react";
import styles from "./Hero.module.css";
import { FaFilePdf} from "react-icons/fa6";
import img from "../../assets/S__8167426-removebg-preview.png";
import resume from "../../assets/IMG_3490.png";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
 const handleDownload = () => {
   // Assuming 'img' is the image file
   const link = document.createElement("a");
   link.href = resume;
   link.download = "Resume_Vathsana.png";
   link.click();
 };
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it's me</p>
            <h3 className={styles.text_2}>Vathsana Duangdala</h3>
            <p className={styles.text_3}>
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front-end Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                  "Graphic Design",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              Hello everyone, my name is Vathsana Duangdala.Call me "ton". I'm a
              funny person. I chose to study computer science, because I wanted
              to learn new things all the time, and I think this era is the era
              of technology, I'm a optimist and I like working in a team.{" "}
              <br></br>Inspirationl quote for me " NEVER TRY NEVER FAIL"
            </p>
            <div className={styles.hero_button}>
              <a href="#">
                <FaFilePdf />
              </a>
              <a href="#" onClick={handleDownload}>
                Dowload My Resume
              </a>
            </div>
          </div>
          <Tilt scale={1.2} transittionspeed={2500} titleReverse={true}>
            <img src={img} alt="img" className={styles.hero_img} />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
