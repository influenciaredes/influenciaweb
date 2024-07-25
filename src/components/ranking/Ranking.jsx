import React, { useState } from "react";
import { Link } from "react-router-dom";
import { topSellerDataRanking } from "../../assets/fake-data/data-top-seller";
import CountUp from "react-countup";
import styles from "../layouts/home-3/styles/TopSeller.module.css";
import useIsMobile from "../../hooks/useIsMobile";
import { useTranslation } from "react-i18next";

const Ranking = () => {
  const [t, i18n] = useTranslation("global");

  const [data] = useState(topSellerDataRanking);
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };
  return (
    <div
      style={{
        width: "96%",
        margin: "auto",
        border: "1px solid #866d4b",
        borderRadius: "8px",
        padding: "0 8px",
      }}
    >
      <section className="tf-section tf-rank">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="table-ranking">
                <div className="flex th-title">
                  <div className="column" style={{ marginRight: "80px" }}>
                    <h3></h3>
                  </div>
                  <div className="column">
                    {isMobile ? (
                      <i class="fas fa-user-plus"></i>
                    ) : (
                      <h3 className={styles.rankingColumnNames}>
                        {" "}
                        {t("ranking.followers")}
                      </h3>
                    )}
                  </div>
                  <div className="column">
                    {isMobile ? (
                      <i class="fas fa-rocket"></i>
                    ) : (
                      <h3 className={styles.rankingColumnNames}>
                        {t("ranking.engagement")}
                      </h3>
                    )}
                  </div>

                  <div className="column">
                    {isMobile ? (
                      <i class="fas fa-heart"></i>
                    ) : (
                      <h3 className={styles.rankingColumnNames}>
                        {t("ranking.favorite")}
                      </h3>
                    )}
                  </div>
                </div>
                <div className={styles.firstViewRaking}>
                  <div className="fl-item2">
                    <div className="item flex">
                      <div className="infor-item flex column1">
                        <div className="media">
                          <img
                            style={{
                              width: "100%",
                              filter: "blur(0.7rem)",
                              borderRadius: "50%",
                              border: "2px solid #866d4b",
                            }}
                            src={data[0].img}
                            alt="Axies"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <CountUp
                          start={0}
                          end={data[0].followers}
                          duration={60}
                        />
                      </div>
                      <div className="column td2">
                        <CountUp
                          start={0}
                          decimals={2}
                          end={Number(data[0].engagement)}
                          duration={60}
                        />
                        <span>% </span>
                      </div>

                      <div className={isMobile ? "column td5" : "column2"}>
                        {data[0].socialMedia.map((icon) => {
                          if (icon.favorite)
                            return (
                              <div className={styles.favouriteIcon}>
                                <i className={icon.icon}></i>
                              </div>
                            );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gridRanking}>
                  {data.slice(1, visible).map((item, index) => (
                    <div key={index} className="fl-item2">
                      <div className="item flex">
                        <div className="infor-item flex column1">
                          <div className="media">
                            <img
                              style={{
                                width: "100%",
                                filter: "blur(0.7rem)",
                                borderRadius: "50%",
                                border: "2px solid #866d4b",
                              }}
                              src={item.img}
                              alt="Axies"
                            />
                          </div>
                        </div>
                        <div className="column">
                          <CountUp
                            start={0}
                            end={item.followers}
                            duration={60}
                          />
                        </div>

                        <div className="column td2">
                          <CountUp
                            start={0}
                            decimals={2}
                            end={Number(item.engagement)}
                            duration={60}
                          />
                          <span>% </span>
                        </div>

                        <div className="column td5">
                          {item.socialMedia.map((icon) => {
                            if (icon.favorite)
                              return (
                                <div className={styles.favouriteIcon}>
                                  <i className={icon.icon}></i>{" "}
                                </div>
                              );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {visible < data.length && (
                  <div className="col-md-12 wrap-inner load-more text-center">
                    <Link
                      to="#"
                      id="load-more"
                      className="sc-button loadmore fl-button pri-3"
                      onClick={showMoreItems}
                    >
                      <span> {t("ranking.button")}</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ranking;
