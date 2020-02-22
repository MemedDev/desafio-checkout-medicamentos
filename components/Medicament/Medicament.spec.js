import React from "react";
import { mount } from "enzyme";
import Medicament from "./";
import STAMPS from "../../constant/STAMPS";

const props = {
  stamp: "yellow",
  name: "Medicament name",
  quantity: 4,
  value: "R$ 12.34"
};
describe("<Medicament />", () => {
  it("renders a <Medicament>", () => {
    const renderedComponent = mount(<Medicament {...props} />);
    expect(renderedComponent.find(".quantity").text()).toBe(
      `${props.quantity} unidades`
    );
    expect(renderedComponent.find(".name").text()).toBe(props.name);
    expect(renderedComponent.find(".value").text()).toBe(props.value);
  });
  it("renders a <Medicament> with only one unit", () => {
    const renderedComponent = mount(<Medicament {...props} quantity={1} />);
    expect(renderedComponent.find(".quantity").text()).toBe("1 unidade");
  });
  it("renders a <Medicament> without value", () => {
    const renderedComponent = mount(
      <Medicament {...props} value={undefined} />
    );
    expect(renderedComponent.find(".value").exists()).toBe(false);
  });
  it("renders a <Medicament> with default stamp", () => {
    const renderedComponent = mount(
      <Medicament {...props} stamp={undefined} />
    );
    expect(
      renderedComponent
        .find(".icon")
        .find("img")
        .prop("src")
    ).toBe(STAMPS["yellow"]);
  });
  it("renders a <Medicament> with all Stamps", () => {
    Object.entries(STAMPS).forEach(([stamp, img]) => {
      const renderedComponent = mount(<Medicament {...props} stamp={stamp} />);
      expect(
        renderedComponent
          .find(".icon")
          .find("img")
          .prop("src")
      ).toBe(img);
    });
  });
});
