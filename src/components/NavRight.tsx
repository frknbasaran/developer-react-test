import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSource, useSourceDispatch } from "../contexts/SourceContext";
import { DataSource, SourceActionType } from "../types/enums";

const Buttons = [
  {
    dataSource: DataSource.VERSIONS,
    label: "Versions",
  },
  {
    dataSource: DataSource.PRODUCTS,
    label: "Products",
  },
  {
    dataSource: DataSource.REGIONS,
    label: "Regions",
  },
];

export function NavRight() {
  const dispatch = useSourceDispatch();
  const { dataSource } = useSource();

  const onSourceChange = React.useCallback(
    (payload: DataSource) => {
      return () => {
        dispatch({
          type: SourceActionType.SET_SOURCE,
          payload: {
            dataSource: payload,
            data: require(`../dataSources/${payload}.json`),
          },
        });
      };
    },
    [dispatch]
  );

  const buttonVariant = React.useMemo(() => {
    return {
      [DataSource.VERSIONS]:
        dataSource === DataSource.VERSIONS ? "contained" : "text",
      [DataSource.PRODUCTS]:
        dataSource === DataSource.PRODUCTS ? "contained" : "text",
      [DataSource.REGIONS]:
        dataSource === DataSource.REGIONS ? "contained" : "text",
    } as const;
  }, [dataSource]);

  return (
    <Box>
      <Typography component="span" sx={style.NavRight}>
        Data Source:
      </Typography>
      {Buttons.map(({ dataSource, label }) => (
        <Button
          color="secondary"
          onClick={onSourceChange(dataSource)}
          variant={buttonVariant[dataSource]}
          size="small"
          key={dataSource}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}

const style = {
  NavRight: { marginRight: 3 },
};
