import React from "react";
import { Container, Grid } from "@mui/material";
import { HandsontableWidget, HighchartsWidget } from "./widgets";
import { useSource } from "../contexts/SourceContext";
import { ContentSection } from "./ContentSection";

export function Content() {
  const { dataSource, data } = useSource();
  const { tableHeaders, tableData } = data;

  return (
    <Container sx={style.Container} maxWidth="xl">
      <Grid container spacing={3}>
        <ContentSection title="Highcharts Heatmap">
          <HighchartsWidget tableHeaders={tableHeaders} tableData={tableData} />
        </ContentSection>
        <ContentSection title="Handsontable Heatmap">
          <HandsontableWidget
            key={dataSource}
            tableHeaders={tableHeaders}
            tableData={tableData}
          />
        </ContentSection>
      </Grid>
    </Container>
  );
}

const style = {
  Container: { paddingTop: 3 },
};
