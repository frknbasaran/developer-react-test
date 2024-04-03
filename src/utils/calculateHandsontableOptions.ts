import { HeatmapProps } from "../components/widgets";
import { HeatmapType } from "../types/enums";
import { calculateEdges } from "./calculateEdges";
import { formatData } from "./formatData";

/**
 * A helper function to calculate the options for the Handsontable widget
 * @param props - HeatmapProps object contains tableData and tableHeaders
 * @returns The options for the Handsontable widget
 */
export const calculateHandsontableOptions = (
  props: HeatmapProps
): { min: number; max: number; data: number[][] } => {
  try {
    const { min, max } = calculateEdges(props.tableData);
    const data = [
      props.tableHeaders,
      ...formatData(props.tableData, HeatmapType.HANDSONTABLE),
    ];

    return { min, max, data };
  } catch (error) {
    console.error("Error calculating Handsontable options", error);
    return { min: 0, max: 0, data: [] };
  }
};
