import React from "react";
import { mount } from "enzyme";
import Info from "./";

describe("<Info />", () => {
  it("renders a <Info>", () => {
    const renderedComponent = mount(<Info />);
    expect(renderedComponent.exists()).toBe(true);
  });
});
