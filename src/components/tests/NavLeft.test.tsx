import React from "react";
import { render } from "@testing-library/react";

import { NavLeft } from "../NavLeft";

describe("NavLeft", () => {
  it("should render the title", () => {
    const { getByText } = render(<NavLeft />);
    expect(getByText("Developer Assessment")).toBeInTheDocument();
  });
});
