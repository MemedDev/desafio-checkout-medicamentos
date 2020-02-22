import React from "react";
import PropTypes from "prop-types";
import Medicament from "../components/Medicament";
import Info from "../components/Info";
import FindDrugstore from "../components/FindDrugstore";
import PrescriptionHead from "../components/PrescriptionHead";

const prescription = {
  date: new Date().toLocaleString("pt-br", { dateStyle: "short" }),
  medicaments: [
    { name: "Ácido zoledrônico 4mg", quantity: 1 },
    { name: "Água para injeção 1mL", quantity: 1 },
    { name: "Betaserc 16mg", quantity: 1 }
  ]
};

const Page = ({ className }) => {
  return (
    <>
      <PrescriptionHead date={prescription.date}></PrescriptionHead>
      <div className={className}>
        {prescription.medicaments.map((props, key) => (
          <Medicament {...props} key={key} />
        ))}
        <Info />
      </div>
      <FindDrugstore></FindDrugstore>
    </>
  );
};

Page.propTypes = {
  className: PropTypes.string
};

export default Page;
