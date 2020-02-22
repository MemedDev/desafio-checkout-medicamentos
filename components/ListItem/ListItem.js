import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import style from "./ListItem.scss";

const ListItem = ({ icon, children, className }) => {
  return (
    <div className={classNames(style["list-item"], className)}>
      {icon && <div className={style.icon}>{icon}</div>}
      <div>{children}</div>
    </div>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.any,
  className: PropTypes.string
};

export default ListItem;
