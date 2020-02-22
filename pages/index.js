import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Medicament from "../components/Medicament";
import Info from "../components/Info";
import FindDrugstore from "../components/FindDrugstore";
import PrescriptionHead from "../components/PrescriptionHead";

const Page = ({ className }) => {
  const prescription = useSelector(state => state.prescription);
  return (
    <>
      <PrescriptionHead date={prescription.date}></PrescriptionHead>
      <div className={className}>
        {prescription.medicaments.map((props, key) => (
          <Medicament {...props} key={key} />
        ))}
        <Info />
      </div>
      <FindDrugstore />
    </>
  );
};

Page.propTypes = {
  className: PropTypes.string
};

export default Page;
