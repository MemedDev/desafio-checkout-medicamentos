import React from "react";
import { mount } from "enzyme";
import * as redux from "react-redux";
import Drugstores from "./";
import drugstores from "../../mock/drugstores";

const store = {
  drugstores: { data: drugstores.data }
};
describe("<Drugstores />", () => {
  beforeEach(() => {
    jest.spyOn(redux, "useSelector").mockImplementation(f => f(store));
    jest.spyOn(redux, "useDispatch").mockImplementation(e => () => e);
  });

  it("renders a <Drugstores> page", () => {
    const renderedComponent = mount(<Drugstores />);
    expect(renderedComponent.exists()).toBe(true);
  });
});
