import React, { useContext } from "react";
import { MainContext } from "../Contexts/MainContext";
import styles from "./styles.module.css";
const Footer = () => {
  const { setShow } = useContext(MainContext);

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <span>Coded by </span>
          <a className={styles.link}
          href="https://github.com/ilyasBozdemir/frontend-web-development-projeleri/tree/main/rock-paper-scissors-game" 
          target="_blank">
            İlyas Bozdemir
            </a>
        </div>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Rules
        </button>
      </div>
    </div>
  );
};

export default Footer;
