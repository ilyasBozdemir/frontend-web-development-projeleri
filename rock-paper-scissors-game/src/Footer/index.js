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
          <a href="https://github.com/ilyasBozdemir" target="_blank">
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
