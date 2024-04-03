import React from "react";
import { Box } from "@mui/material";
import { HotColumn, HotColumnProps, HotTable } from "@handsontable/react";
import { HeatmapProps } from "../../../types/interfaces";
import {
  calculateHandsontableOptions,
  getBackgroundColor,
} from "../../../utils";

/**
 * A renderer component for the Handsontable
 * @param props - The props for the renderer component
 * @returns The rendered component
 */
const Column = (props: HotColumnProps & { min: number; max: number }) => {
  const isMetaCell = props.col === 0 || props.row === 0;
  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(
          props.value,
          isMetaCell,
          props.min,
          props.max,
          styles.heatmapMinColor,
          styles.heatmapMaxColor
        ),
        ...styles.heatmapCell,
      }}
    >
      {props.value}
    </div>
  );
};

export const HandsontableWidget = (props: HeatmapProps) => {
  const { tableHeaders } = props;
  const { min, max, data } = calculateHandsontableOptions(props);

  return (
    <Box>
      <HotTable
        stretchH="all"
        data={data}
        height="auto"
        licenseKey="non-commercial-and-evaluation"
      >
        {
          // create the columns for the heatmap
          tableHeaders.map((header, index) => (
            <HotColumn key={index}>
              <Column hot-renderer min={min} max={max} />
            </HotColumn>
          ))
        }
      </HotTable>
    </Box>
  );
};

export const styles = {
  // TODO: we could also use the theme here with provider
  heatmapMinColor: "#FFFFFF",
  heatmapMaxColor: "#7cb5ec",
  heatmapCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
