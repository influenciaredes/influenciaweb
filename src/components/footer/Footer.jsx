import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/footer.module.css";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerRight}>
        <div class="footer-icons" className={styles.contactIcons}>
          <a href="https://www.instagram.com/influencia.redes" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          {/* 
        <a href="">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
           
         */}
        </div>
      </div>
      <div className={styles.footerCenter}>
        <div className={styles.queryWidthContainer}>
          <i class="fas fa-map-marker-alt"></i>
          <p className={styles.infoFonts}>Buenos Aires, Argentina</p>
        </div>

        <div className={styles.queryWidthContainer}>
          <i class="fas fa-phone"></i>
          <p className={styles.infoFonts}>+5492215937719</p>
        </div>

        <div className={styles.queryWidthContainer}>
          <i class="fas fa-envelope"></i>
          <p className={styles.infoFonts}>influenciaredes24@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
