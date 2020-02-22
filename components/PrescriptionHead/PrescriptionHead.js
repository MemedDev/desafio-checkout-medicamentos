import React from "react";
import PropTypes from "prop-types";
import style from "./PrescriptionHead.scss";

const PrescriptionHead = ({ date }) => (
  <div className={style.head}>
    <h1 className={style.title}>Dr. Memed</h1>
    <span>Prescrição criada em {date}</span>
  </div>
);

PrescriptionHead.propTypes = {
  date: PropTypes.string
};
export default PrescriptionHead;
