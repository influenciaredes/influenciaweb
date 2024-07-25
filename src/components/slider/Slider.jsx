import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Modal from "../modal/Modal";
import styles from "./styles/slider.module.css";
import Icon from "../../assets/brands/logo-footer.png";
import { useTranslation } from "react-i18next";

const Slider = (props) => {
  const data = props.data;
  const [showModal, setShowModal] = useState(false);
  const [t, i18n] = useTranslation("global");

  const [text] = useTypewriter({
    words: [t("typeWritter.text1"), t("typeWritter.text2")],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="mainslider">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={item.class}>
            <SliderItem
              item={item}
              text={text}
              showModal={showModal}
              setShowModal={setShowModal}
              t={t}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};
const SliderItem = (props) => (
  <div className="flat-title-page" style={{ backgroundImage: `url(${""})` }}>
    <div className="shape item-w-16"></div>
    <i className="fab fa-instagram-animation item-w-icons-vertMain shape item-w-22"></i>
    <div className="shape item-w-32"></div>
    <div className="shape item-w-48"></div>

    <div className="shape style2 item-w-51"></div>
    <div className="shape style2 item-w-51 position2"></div>
    <div className="shape item-w-68"></div>
    <div className="overlay"></div>
    <div className="swiper-container mainslider home">
      <div className="swiper-wrapper">
        <div className={`swiper-slide ${styles.responsiveMarginLogo}`}>
          <i className="fab fa-twitter-animation item-w-icons "></i>

          <div className="slider-item">
            <div className="themesflat-container ">
              <div className="wrap-heading flat-slider flex">
                <div className={styles.brandContainer}>
                  <img srcset={Icon} className={styles.brandLogo} />
                  <div>
                    <h1 className="heading mb-style">
                      <span
                        className="tf-text s1"
                        style={{ paddingLeft: "10px" }}
                      >
                        {props.item.title_2}
                      </span>
                    </h1>

                    <p
                      className="sub-heading"
                      style={{ margin: "10px 0 20px 0" }}
                    >
                      <span style={{ color: "#e6ddd2" }}>{props.text}</span>
                      <span style={{ color: "#866d4b" }}>
                        <Cursor />
                      </span>
                    </p>
                  </div>

                  <div className="flat-bt-slider flex style2">
                    <Link
                      to=""
                      className={`sc-button header-slider style style-1 rocket fl-button pri-1 ${styles.contactButton}`}
                    >
                      <span
                        onClick={() => {
                          window.open("https://wa.me/5492215937719", "_blank");
                        }}
                      >
                        {props.t("slider.contact")}
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="image">
                  <img className="img-bg" src={props.item.imgbg} alt="axies" />
                  <img src={props.item.img} alt="axies" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Slider;
