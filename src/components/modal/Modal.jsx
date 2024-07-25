import React, { useState } from "react";
import FocusTrap from "focus-trap-react";
import styles from "./styles/modal.module.css";
import { Link } from "react-router-dom";

const LoginModal = (props) => {
  const handleClick = (item) => {
    if (item.name == "whatsapp") {
      window.open("https://wa.me/5492215937719", "_blank");
    } else if (item.name == "instagram") {
      window.open("https://www.instagram.com/influencia.redes", "_blank");
    }
  };

  const socialList = [
    {
      name: "instagram",
      icon: "fab fa-instagram",
      link: "#",
    },

    {
      name: "whatsapp",
      icon: "fab fa-whatsapp",
      link: "#",
    },
  ];

  return (
    <FocusTrap>
      <div className={styles.overlayWrapper}>
        <div className={styles.wrapper}>
          <button
            className={styles.close}
            onClick={() => {
              props.setShowModal(!props.showModal);
            }}
          >
            <svg
              aria-label="Cerrar"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <g fill="#2A2A3C" fillRule="nonzero">
                  <g>
                    <g>
                      <path
                        d="M17.4 6.6c-.331-.331-.869-.331-1.2 0L12 10.8 7.8 6.6c-.331-.331-.869-.331-1.2 0-.331.331-.331.869 0 1.2l4.2 4.2-4.2 4.2c-.331.331-.331.869 0 1.2.331.331.869.331 1.2 0l4.2-4.2 4.2 4.2c.331.331.869.331 1.2 0 .331-.331.331-.869 0-1.2L13.2 12l4.2-4.2c.331-.331.331-.869 0-1.2z"
                        transform="translate(-320 -96) translate(0 80) translate(320 16)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52343.039471304735!2d-57.99437007973288!3d-34.92050124731596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1720550850410!5m2!1ses!2sar"
              width="300"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.contactContainer}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              ipsa ad, excepturi quaerat vel ratione temporibus eaque, hic
              obcaecati repellendus illo sapiente molestias accusamus ducimus
              harum voluptatem. Nostrum, hic ipsa.
            </h5>
            <ul className={styles.socialListContainer}>
              {socialList.map((item, index) => (
                <li key={index}>
                  <a href="" onClick={() => handleClick(item)}>
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};

export default LoginModal;
