import React from "react";
import { Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import { HeatmapProps } from "../../../types/interfaces";
import { calculateHighchartsOptions } from "../../../utils";

HighchartsHeatmap(Highcharts);

export const HighchartsWidget = (props: HeatmapProps) => {
  const options = calculateHighchartsOptions(props);

  return (
    <Box>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};
