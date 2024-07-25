import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/socialMediaImpact.module.css";
import InteractiveMap from "../interactiveMap/InteractiveMap";
import { useTranslation } from "react-i18next";

const SocialMediaImpact = () => {
  const [t, i18n] = useTranslation("global");

  const socialList = [
    {
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      icon: "icon-fl-tik-tok-2",
      link: "#",
    },
    {
      icon: "fa-brands fa-x-twitter",
      link: "#",
    },
    {
      icon: "fab fa-facebook",
      link: "#",
    },
    {
      icon: "fab fa-youtube",
      link: "#",
    },
    {
      icon: "fab fa-twitch",
      link: "#",
    },
  ];

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
    <>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className="shape item-w-22"></div>

          <div>
            <h4 style={{ textAlign: "center", padding: "10px" }}>
              {t("socialMediaImpact.text1")}{" "}
              <span className={styles.title}>
                {" "}
                {t("socialMediaImpact.amount")}{" "}
              </span>{" "}
              {t("socialMediaImpact.text2")}
              <span className={styles.title}>
                {" "}
                {t("socialMediaImpact.text3")}{" "}
              </span>
              {t("socialMediaImpact.text4")}
            </h4>

            <div className="widget-social style-1">
              <ul className={styles.socialListContainer}>
                {socialList.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>
                      <i className={item.icon}></i>
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 style={{ textAlign: "center", padding: "10px" }}>
                {t("socialMediaImpact.text5")} <br></br>
                <span className={styles.title}>
                  <span> {t("socialMediaImpact.text6")}</span>
                </span>
              </h4>

              <div className="shape style2 item-w-51"></div>
            </div>
          </div>
        </div>

        <InteractiveMap />

        {isVisible && (
          <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>
        )}
      </div>
    </>
  );
};

export default SocialMediaImpact;
