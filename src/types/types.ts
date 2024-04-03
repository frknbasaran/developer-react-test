import { DataSource, SourceActionType } from "./enums";

export type SourceAction = {
  type: SourceActionType;
  payload: {
    dataSource: DataSource;
    data: {
      tableHeaders: string[];
      tableData: any[];
    };
  };
};
