import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { find } from "../../actions/drugstores";
import Medicament from "../../components/Medicament";
import Info from "../../components/Info";
import ListItem from "../../components/listItem";
import Header from "../../components/Header";

const sumAll = (_sum, { value, quantity }) => _sum + value * quantity;

const Page = ({ className }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data } = useSelector(({ drugstores }) => drugstores);
  const prescription = useSelector(state => state.prescription);

  const { nome, distance, medicamentos } = data.attributes || {
    medicamentos: [],
    attributes: {}
  };

  const list = !medicamentos.length
    ? []
    : prescription.medicaments.map(medicament => ({
        ...medicament,
        value: medicamentos.find(m => medicament.name === m.nome).preco
      }));

  const sum = list.reduce(sumAll, 0);

  const _sum = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(sum);

  useEffect(() => {
    dispatch(find(router.query));
  }, []);
  return (
    <>
      <Header>
        <b>Encontrar a farmacia</b>
        <br />
        Serviço oferecido por Memed
      </Header>
      <div className={className} style={{ overflow: "scroll" }}>
        <ListItem icon={<>🇧🇷</>}>
          {nome} (à {distance}) <br />
          {_sum}
        </ListItem>
        {list.map((props, key) => (
          <Medicament {...props} key={key} />
        ))}
        <Info />
      </div>
    </>
  );
};

Page.propTypes = {
  className: PropTypes.string
};

export default Page;
