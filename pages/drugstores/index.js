import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { find } from "../../actions/drugstores";

const Page = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(({ drugstores }) => drugstores);

  useEffect(() => {
    dispatch(find());
  }, []);
  return (
    <div>
      {data.map(({ id, attributes: { nome } }) => (
        <div key={id}>
          {id}:{nome}
        </div>
      ))}
    </div>
  );
};

export default Page;
