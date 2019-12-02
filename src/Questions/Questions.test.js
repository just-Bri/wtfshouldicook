import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";

import QuestionComplex from "./QuestionComplex";
import QuestionCuisine from "./QuestionCuisine";
import QuestionOpening from "./QuestionOpening";

Enzyme.configure({ adapter: new Adapter() });

describe("Questions render", () => {
  it("Complex", () => {
    const wrapper = shallow(<QuestionComplex />);
    expect(
      wrapper.containsMatchingElement(
        <section className="complex-options-container"></section>
      )
    );
  });
  it("Cuisine", () => {
    const wrapper = shallow(<QuestionCuisine />);
    expect(
      wrapper.containsMatchingElement(
        <section className="cuisine-options-container"></section>
      )
    );
  });
  it("Opening", () => {
    const wrapper = shallow(<QuestionOpening />);
    expect(
      wrapper.containsMatchingElement(
        <section className="opening-question"></section>
      )
    );
  });
});
