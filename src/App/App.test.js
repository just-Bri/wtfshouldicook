import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App renders", () => {
  it("exists", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsMatchingElement(<section className="App"></section>)
    );
  });
});
