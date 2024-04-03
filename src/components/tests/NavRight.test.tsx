import React from "react";
import { render } from "@testing-library/react";
import { NavRight } from "../NavRight";

describe("NavRight", () => {
  it("should render the navbar right section which includes buttons", () => {
    const { getByText } = render(<NavRight />);
    expect(getByText("Versions")).toBeInTheDocument();
    expect(getByText("Regions")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();

    // first button should be contained
    expect(getByText("Versions")).toHaveClass("MuiButton-contained");
    expect(getByText("Regions")).toHaveClass("MuiButton-text");
    expect(getByText("Products")).toHaveClass("MuiButton-text");
  });
});
