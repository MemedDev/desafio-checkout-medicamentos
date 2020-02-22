import React from "react";
import { mount } from "enzyme";
import Header from ".";

describe("<Header />", () => {
  it("renders a <Header>", () => {
    const renderedComponent = mount(<Header>x</Header>);
    expect(renderedComponent.exists()).toBe(true);
  });
});
