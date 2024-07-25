import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/TopSeller.module.css";
import Ranking from "../../ranking/Ranking";
import { useTranslation } from "react-i18next";

const TopSeller = (props) => {
  const [t, i18n] = useTranslation("global");

  const data = props.data;
  // const [visible, setVisible] = useState(6);

  // const showMoreItems = () => {
  //   setVisible((prevValue) => prevValue + 3);
  // };
  return (
    <div id="ourCommunity">
      <section className="tf-section top-seller">
        <div className={`row ${styles.container}`}>
          <div className="col-md-12">
            <div className="fab fa-youtube-animation item-w-icons"></div>

            <h1 className={styles.carouselTitle}>
              <span className={styles.title}>{t("topProfiles.title")}</span>
            </h1>
          </div>

          {data.map((item, index) => (
            <TopSellerItem key={index} item={item} />
          ))}
        </div>
        {/* {visible < data.length && (
          <div className="col-md-12 wrap-inner load-more text-center">
            <Link
              to="#"
              id="load-more"
              className="sc-button loadmore fl-button pri-3"
              onClick={showMoreItems}
            >
              <span>Ver más</span>
            </Link>
          </div>
        )} */}
      </section>
      <section className="tf-section top-seller">
        <Ranking />
      </section>
    </div>
  );
};

const TopSellerItem = (props) => (
  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div id="card-area">
      <div className={styles.wrapperCard}>
        <div className={styles.boxArea}>
          <div className={styles.boxCard}>
            <img src={props.item.img} />
            <div className={styles.overlayInfo}>
              <h3>{props.item.name}</h3>
              <div className={styles.mediaContainer}>
                {props.item.socialMedia.map((item, index) => (
                  <Link to={item.link}>
                    <div className={styles.rosterSocialMedia}>
                      <i className={item.icon} style={{ margin: "5px" }}></i>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="sc-author-box"> */}

    {/* <div className="author-avatar">
        <Link to="/authors-02">
          <div className={styles.avatarProfile}>
            <img
              src={props.item.img}
              alt="Axies"
              className={styles.mainRosterAvatar}
            />
          </div>
        </Link>
      </div> */}

    {/* <div className="author-infor">
        <h5 className="style2">
          <Link to="/authors-02">{props.item.name}</Link>
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "auto",
          }}
        > */}
    {/* {props.item.socialMedia.map((item, index) => (
            <Link to={item.link}>
              <div className={styles.rosterSocialMedia}>
                <i className={item.icon} style={{ margin: "5px" }}></i>
              </div>
            </Link>
          ))} */}
    {/* </div>
      </div> */}
    {/* </div> */}
  </div>
);

export default TopSeller;
