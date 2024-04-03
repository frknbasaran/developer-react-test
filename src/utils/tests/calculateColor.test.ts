import { calculateColor } from "../calculateColor";

describe("calculateColor", () => {
  it("returns correct color when value is at minimum", () => {
    expect(calculateColor(0)).toEqual("#ffffff"); // default minColor
  });

  it("returns correct color when value is at maximum", () => {
    expect(calculateColor(100)).toEqual("#ff0000"); // default maxColor
  });

  it("returns correct color when value is in between", () => {
    expect(calculateColor(50)).toEqual("#ff7f7f");
  });

  it("returns correct color when custom minColor and maxColor are provided", () => {
    expect(calculateColor(50, 0, 1000, "#000000", "#ffffff")).toEqual(
      "#0c0c0c"
    );
  });

  it("returns correct color when value is below minimum", () => {
    expect(calculateColor(-50)).toEqual("#ffffff"); // default minColor
  });

  it("returns correct color when value is above maximum", () => {
    expect(calculateColor(150)).toEqual("#ff0000"); // default maxColor
  });
});
