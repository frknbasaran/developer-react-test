import { calculateColor } from "./calculateColor";

/**
 * A helper function to get the background color for the heatmap cell
 * @param value - The value of the cell
 * @param isMeta - A flag to check if the cell is a meta cell
 * @param min - The minimum value for the heatmap
 * @param max - The maximum value for the heatmap
 * @param minColor - The minimum color for the heatmap
 * @param maxColor - The maximum color for the heatmap
 * @returns The background color for the cell
 */
export const getBackgroundColor = function (
  value: number | string,
  isMeta: boolean = false,
  min: number = 0,
  max: number = 0,
  minColor: string = "#FFFFFF",
  maxColor: string = "#7cb5ec"
) {
  if (!isMeta) {
    return calculateColor(
      parseFloat(value as string),
      min,
      max,
      minColor,
      maxColor
    );
  }

  return minColor;
};
