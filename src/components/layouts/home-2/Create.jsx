import React from "react";
import { Link } from "react-router-dom";
import prueba1 from "../../../assets/images/box-item/prueba1.svg";
import prueba2 from "../../../assets/images/box-item/prueba2.svg";
import prueba3 from "../../../assets/images/box-item/prueba3.svg";
import prueba4 from "../../../assets/images/box-item/prueba4.svg";
import prueba5 from "../../../assets/images/box-item/prueba5.svg";

import { useTranslation } from "react-i18next";

const Create = () => {
  const [t, i18n] = useTranslation("global");

  const data = [
    {
      title: t("create.experiencie.title"),
      description: t("create.experiencie.text"),
      icon: prueba5,
      colorbg: "icon-color5",
    },
    {
      title: t("create.community.title"),
      description: t("create.community.text"),
      icon: prueba2,
      colorbg: "icon-color5",
    },
    {
      title: t("create.results.title"),
      description: t("create.results.text"),
      icon: prueba3,
      colorbg: "icon-color5",
    },
    {
      title: t("create.values.title"),
      description: t("create.values.text"),
      icon: prueba4,
      colorbg: "icon-color5",
    },
  ];
  return (
    <section className="tf-box-icon create tf-section bg-home-3">
      <div
        className="themesflat-container"
        style={{ backgroundColor: "rgb(20, 20, 31)" }}
      >
        <div className="row">
          {data.map((item, index) => (
            <CreateItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CreateItem = (props) => (
  <div className="col-lg-3 col-md-6 col-12">
    <div className="sc-box-icon">
      <div className="image center">
        <div className={`icon-create ${props.item.colorbg}`}>
          <img src={props.item.icon} alt="" />
        </div>
      </div>
      <h3 className="heading">{props.item.title}</h3>
      <p className="content">{props.item.description}</p>
    </div>
  </div>
);

export default Create;
