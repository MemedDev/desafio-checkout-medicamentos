import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import style from "./Header.scss";

const Header = ({ children }) => (
  <div className={style.header}>
    <div className={style.icon} onClick={() => Router.back()}>
      ◀
    </div>
    <div className={style.content}>{children}</div>
  </div>
);

Header.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Header;
