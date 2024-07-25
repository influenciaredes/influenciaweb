import React from "react";
import styles from "./styles/carousel.module.css";
import emiratesBrand from "../../assets/brands/emirates-cup.png";
import quilmes from "../../assets/brands/quilmes.png";
import primeVideo from "../../assets/brands/amazon-prime.png";
import bplay from "../../assets/brands/bplay.png";
import apple from "../../assets/brands/apple.png";
import nike from "../../assets/brands/nike.png";
import adidas from "../../assets/brands/adidas.png";
import win from "../../assets/brands/win.png";
import mostaza from "../../assets/brands/mostaza.png";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="flat-title-page"
      style={{ backgroundColor: "rgb(20, 20, 31)" }}
    >
      <div className="shape item-w-32"></div>
      <div className="shape style2 item-w-51 position2"></div>
      <div className="shape item-w-16"></div>

      <div style={{ backgroundColor: "  #14141f" }}>
        <h1 className={styles.carouselTitle}>
          <span className={styles.title}>{t("carrousel.title")}</span>
        </h1>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>
              <img className={styles.imgCarr} src={emiratesBrand} alt="" />
            </div>

            <div className={styles.slide}>
              <img className={styles.imgCarr} src={adidas} alt="" />
            </div>

            <div className={styles.slide}>
              <img className={styles.imgCarr} src={quilmes} alt="" />
            </div>
            <div className={styles.slide}>
              <img className={styles.imgCarr} src={primeVideo} alt="" />
            </div>
            <div className={styles.slide}>
              <img className={styles.imgCarr} src={nike} alt="" />
            </div>

            <div className={styles.slide}>
              <img className={styles.imgCarr} src={bplay} alt="" />
            </div>
            <div className={styles.slide}>
              <img className={styles.imgCarr} src={apple} alt="" />
            </div>
            <div className={styles.slide}>
              <img className={styles.imgCarr} src={win} alt="" />
            </div>
            <div className={styles.slide}>
              <img className={styles.imgCarr} src={mostaza} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
