import React from "react";
import styles from "./styles/aboutUs.module.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="flat-title-page"
      style={{ backgroundColor: "rgb(20, 20, 31)" }}
      id="aboutUs"
    >
      <i className="fab icon-fl-tik-tok-2-animation item-w-icons-vert shape item-w-22"></i>

      <div className="shape item-w-22"></div>
      <div className="shape item-w-48"></div>
      <div className="shape style2 item-w-51"></div>
      <div className={styles.container}>
        <h1 className={styles.carouselTitle}>
          <span className={styles.title}>{t("aboutUs.title")}</span>
        </h1>

        <p>{t("aboutUs.text")}</p>
      </div>
    </div>
  );
};

export default AboutUs;
