import React from "react";
import Enzyme, { render, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";

import TopBar from "./TopBar";

Enzyme.configure({ adapter: new Adapter() });

describe("TopBar renders", () => {
  it("exists", () => {
    const component = mount(<TopBar />);
    expect(component.exists(".top-bar")).toEqual(true);
  });
});
