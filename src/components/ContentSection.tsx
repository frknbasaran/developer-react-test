import { Grid, Typography } from "@mui/material";

export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Grid item lg={12}>
      <Typography variant="h5" sx={style.ContentSection}>
        Highcharts Heatmap
      </Typography>
      {children}
    </Grid>
  );
}

const style = {
  ContentSection: {
    marginBottom: 1,
  },
};
