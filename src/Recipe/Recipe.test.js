import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";

import Recipe from "./Recipe";

Enzyme.configure({ adapter: new Adapter() });

describe("Recipe renders", () => {
  it("exists", () => {
    const wrapper = shallow(
      <Recipe match={{ params: { id: 1 }, isExact: true, path: "", url: "" }} />
    );
    expect(
      wrapper.containsMatchingElement(
        <section className="specific-container"></section>
      )
    );
  });
});
