import React from "react";
import { mount } from "enzyme";
import * as redux from "react-redux";
import * as router from "next/router";
import Drugstores from ".";
import drugstore from "../../mock/drugstore";
import prescription from "../../mock/prescription";

import { find } from "../../actions/drugstores";

jest.mock("../../actions/drugstores");

const store = {
  drugstores: { data: drugstore.data },
  prescription
};
const query = {
  lat: 1,
  lon: 2
};
describe("<Drugstores />", () => {
  beforeEach(() => {
    jest.spyOn(redux, "useSelector").mockImplementation(f => f(store));
    jest.spyOn(redux, "useDispatch").mockImplementation(() => _ => _);
    jest.spyOn(router, "useRouter").mockImplementation(() => ({ query }));
  });

  it("renders a <Drugstores> page", () => {
    const renderedComponent = mount(<Drugstores />);
    expect(renderedComponent.exists()).toBe(true);
    expect(find).toHaveBeenCalledWith(query);
  });
});
