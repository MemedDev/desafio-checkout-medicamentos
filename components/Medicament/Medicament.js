import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem";
import style from "./Medicament.scss";
import STAMPS from "../../constant/STAMPS";

// https://www.flaticon.com/packs/medicaments-6

const Medicament = ({ stamp, name, quantity, value }) => {
  const _stamp = STAMPS[stamp] || STAMPS["yellow"];
  const _s = quantity > 1 ? "s" : "";
  const _value =
    value &&
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  return (
    <ListItem icon={<img src={_stamp} />}>
      <div className={style.quantity}>
        {quantity} unidade{_s}
      </div>
      <strong className={style.name}>{name}</strong>
      {_value && <div className={style.value}>{_value}</div>}
    </ListItem>
  );
};

Medicament.propTypes = {
  stamp: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  value: PropTypes.number
};

export default Medicament;
