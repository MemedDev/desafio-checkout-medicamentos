import React from "react";
import { mount } from "enzyme";
import PrescriptionHead from ".";

describe("<PrescriptionHead />", () => {
  it("renders a <PrescriptionHead>", () => {
    const renderedComponent = mount(<PrescriptionHead />);
    expect(renderedComponent.exists()).toBe(true);
  });
});
