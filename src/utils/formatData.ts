import { HeatmapType } from "../types/enums";

/**
 * Formats data for Heatmap chart
 * @param data - Data to be formatted
 * @param type - Type of Heatmap chart
 * @returns Formatted data
 */
export function formatData(
  data: Array<Array<string | number>>,
  type: HeatmapType
) {
  let seriesData: any[] = [];

  if (type === HeatmapType.HIGHCHARTS) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 1; j < data[i].length; j++) {
        const value = data[i][j] as number;
        seriesData.push([j - 1, i, value]); // Directly populate seriesData
      }
    }
  } else if (type === HeatmapType.HANDSONTABLE) {
    seriesData = data;
  }

  return seriesData;
}
