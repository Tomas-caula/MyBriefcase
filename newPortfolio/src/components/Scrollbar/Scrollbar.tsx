/** @format */

import Aboutme from "../../sections/Aboutme/Aboutme";
import Proyects from "../../sections/Proyects/Proyects";
import Skills from "../../sections/Skills/Skills";
import styles from "./Scrollbar.module.css";

export default function Scrollbar() {
  return (
    <div className={styles.container}>
      <div className={styles.conteinercontent}>
        <div className={styles.sections}>
          <Aboutme />
          <Proyects />
          <Skills />
        </div>
      </div>
    </div>
  );
}
