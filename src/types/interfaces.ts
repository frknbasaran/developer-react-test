import { DataSource } from "./enums";

export interface HeatmapProps {
  tableHeaders: Array<string>;
  tableData: Array<Array<string | number>>;
}

export interface SourceState {
  dataSource: DataSource;
  data: {
    tableHeaders: string[];
    tableData: any[];
  };
}
