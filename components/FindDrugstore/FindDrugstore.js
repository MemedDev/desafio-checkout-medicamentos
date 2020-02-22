import React from "react";
import Link from "next/link";
import querystring from "querystring";

import style from "./FindDrugstore.scss";

const coord = {
  lat: -23.5648304,
  lon: -46.6436604
};
const FindDrugstore = () => (
  <Link href={`/drugstores?${querystring.stringify(coord)}`}>
    <div className={style.find}>
      <b>Encontrar Farmácias</b>
      <br />
      <span>Serviço oferecido por Memed</span>
    </div>
  </Link>
);
export default FindDrugstore;
