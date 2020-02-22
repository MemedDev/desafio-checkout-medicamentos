import React from "react";
import { mount, shallow } from "enzyme";
import ListItem from "./";

const icon = <div> image </div>;
describe("<ListItem />", () => {
  it("renders a <ListItem>", () => {
    const renderedComponent = mount(<ListItem icon={icon}></ListItem>);
    const wrapper = shallow(icon);
    expect(wrapper.equals(renderedComponent.find(".icon").children()));
  });
  it("renders a <ListItem> without icon", () => {
    const renderedComponent = mount(<ListItem />);
    expect(renderedComponent.find(".icon").exists()).toBe(false);
  });
});
