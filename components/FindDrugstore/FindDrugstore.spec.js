import React from "react";
import { mount } from "enzyme";
import FindDrugstore from ".";

describe("<FindDrugstore />", () => {
  it("renders a <FindDrugstore>", () => {
    const renderedComponent = mount(<FindDrugstore />);
    expect(renderedComponent.exists()).toBe(true);
  });
});
