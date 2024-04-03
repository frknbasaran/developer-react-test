import { HeatmapProps } from "../components/widgets";
import { HeatmapType } from "../types/enums";
import { calculateEdges } from "./calculateEdges";
import { formatData } from "./formatData";

/**
 * A helper function to calculate the options for the Highcharts widget
 * @param tableData - The data for the table
 * @param tableHeaders - The headers for the table
 * @returns The options for the Highcharts widget
 */
export const calculateHighchartsOptions = (props: HeatmapProps) => {
  let min: number;
  let max: number;
  let data: number[][];

  try {
    const calculatedEdges = calculateEdges(props.tableData);
    min = calculatedEdges.min;
    max = calculatedEdges.max;

    data = [...formatData(props.tableData, HeatmapType.HIGHCHARTS)];
  } catch (error) {
    console.error("Error calculating Highcharts options", error);
    min = 0;
    max = 0;
    data = [];
  }

  return {
    chart: {
      type: "heatmap",
      plotBorderWidth: 1,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: props.tableHeaders.slice(1),
    },
    yAxis: {
      categories: props.tableData.map((x: Array<string | number>) => x[0]),
      title: undefined,
      reversed: true,
    },
    colorAxis: {
      min,
      max,
      minColor: "#FFFFFF",
      maxColor: "#7cb5ec",
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "top",
      y: 60,
    },
    tooltip: {
      format:
        "<b>{series.xAxis.categories.(point.x)}</b> has<br>" +
        "<b>{point.value}</b> value in<br>" +
        "<b>{series.yAxis.categories.(point.y)}</b>",
    },
    series: [
      {
        name: "Spend per department",
        borderWidth: 1,
        data,
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };
};
