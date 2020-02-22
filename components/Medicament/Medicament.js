import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem";
import style from "./Medicament.scss";
import STAMPS from "../../constant/STAMPS";

// https://www.flaticon.com/packs/medicaments-6

const Medicament = ({ stamp, name, quantity, value }) => {
  const _stamp = STAMPS[stamp] || STAMPS["yellow"];
  const _s = quantity > 1 ? "s" : "";
  return (
    <ListItem icon={<img src={_stamp} />}>
      <div className={style.quantity}>
        {quantity} unidade{_s}
      </div>
      <div className={style.name}>{name}</div>
      {value && <div className={style.value}>{value}</div>}
    </ListItem>
  );
};

Medicament.propTypes = {
  stamp: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  value: PropTypes.string
};

export default Medicament;
