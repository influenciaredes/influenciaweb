import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import flagEs from "../../assets/images/icon/espana.png";
import flagEU from "../../assets/images/icon/estados-unidos.png";
import flagPt from "../../assets/images/icon/portugal.png";
import styles from "./styles/header.module.css";
import Icon from "../../assets/brands/INFLUENCIA-LOGO-2.png";
import Logo from "../../assets/brands/logo-footer.png";
import Modal from "../modal/Modal";

const Header = () => {
  const userDataStorage = localStorage.getItem("userDataLang");
  const [showModal, setShowModal] = useState(false);
  const [language, setlanguage] = useState(
    userDataStorage == undefined ? "es" : userDataStorage
  );

  const [t, i18n] = useTranslation("global");
  const { pathname } = useLocation();

  const menus = [
    {
      id: 1,
      name: t("nav.inicio"),
      links: "#",
    },
    {
      id: 2,
      name: t("nav.aboutUs"),
      links: "#aboutUs",
    },

    {
      id: 3,
      name: t("nav.community"),
      links: "#ourCommunity",
    },

    {
      id: 4,
      name: t("nav.contact"),
      links: "#",
    },
  ];
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 400
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const btnSearch = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const searchBtn = () => {
    btnSearch.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleOnClick = (index) => {
    if (index === 3) {
      window.open("https://wa.me/5492215937719", "_blank");
    }
    setActiveIndex(index);

    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  return (
    <header id="header_main" className="header_1 js-header" ref={headerRef}>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <div className="main-logo">
                      <img
                        className="logo-dark"
                        id="logo_header"
                        src={Logo}
                        srcSet={`${Logo}`}
                      />
                      <img
                        className="logo-light"
                        id="logo_header"
                        src={Logo}
                        srcSet={`${Logo}`}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="mobile-button"
                  ref={btnToggle}
                  onClick={menuToggle}
                >
                  <span></span>
                </div>
                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleOnClick(index)}
                        className={`menu-item  ${
                          activeIndex === index ? "active" : ""
                        } `}
                      >
                        <HashLink
                          className={styles.headerOptions}
                          to={`${data.links}`}
                          scroll={(el) =>
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                        >
                          {data.name}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DarkMode />
      <div
        className="mode_switcher"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src=""
          alt=""
          srcset={flagEs}
          style={{
            maxWidth: "16px",
            margin: "2px",
            cursor: "pointer",
            border: "1px solid #dbc1a2",
            borderRadius: "50%",
          }}
          onClick={() => {
            i18n.changeLanguage("es");
            setlanguage("es");
            localStorage.setItem("userDataLang", "es");
          }}
          className={language === "en" ? styles.selectedLang : ""}
        />
        <img
          src=""
          alt=""
          srcset={flagEU}
          style={{
            maxWidth: "16px",
            margin: "2px",
            cursor: "pointer",
            border: "1px solid #dbc1a2",
            borderRadius: "50%",
          }}
          onClick={() => {
            i18n.changeLanguage("en");
            setlanguage("en");
            localStorage.setItem("userDataLang", "en");
          }}
          className={language === "es" ? styles.selectedLang : ""}
        />
        {/* <img
          src=""
          alt=""
          srcset={flagPt}
          style={{
            maxWidth: "16px",
            margin: "2px",
            cursor: "pointer",
          }}
          onClick={() => {
            i18n.changeLanguage("po");
            setlanguage("PO");
          }}
        /> */}
      </div>
    </header>
  );
};

export default Header;
