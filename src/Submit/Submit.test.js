import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";

import Submit from "./Submit";

Enzyme.configure({ adapter: new Adapter() });

describe("Submit renders", () => {
  it("exists", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/submit"]}>
        <Submit />
      </MemoryRouter>
    );
    expect(component.exists(".submit-form")).toEqual(true);
  });
});
