/**
 * Generate a color based on a value between two colors
 * @param value - The value to generate the color for
 * @param min - The minimum value of the data
 * @param max - The maximum value of the data
 * @param minColor - The color to use for the minimum value
 * @param maxColor - The color to use for the maximum value
 * @returns The color as a hex string
 */
export function calculateColor(
  value: number,
  min: number = 0,
  max: number = 100,
  minColor: string = "#ffffff",
  maxColor: string = "#ff0000"
): string {
  if (value <= min) return minColor;
  if (value >= max) return maxColor;
  // Normalize value between 0 and 1
  const normalizedValue = (value - min) / (max - min);

  // Convert normalized value to hex color using interpolation between minColor and maxColor
  const hex = (
    normalizedValue: number,
    color1: string,
    color2: string
  ): string => {
    const [r1, g1, b1] = color1.match(/\w{2}/g)!.map((x) => parseInt(x, 16));
    const [r2, g2, b2] = color2.match(/\w{2}/g)!.map((x) => parseInt(x, 16));
    const r = Math.floor(r1 + normalizedValue * (r2 - r1));
    const g = Math.floor(g1 + normalizedValue * (g2 - g1));
    const b = Math.floor(b1 + normalizedValue * (b2 - b1));
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  return hex(normalizedValue, minColor, maxColor);
}
