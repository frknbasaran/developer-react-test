import { createContext, Dispatch, useContext } from "react";
import { DataSource, SourceActionType } from "../types/enums";
import { SourceAction } from "../types/types";

export const SourceContext = createContext({
  dataSource: DataSource.VERSIONS,
  data: {
    tableHeaders: [""],
    tableData: [[]],
  },
});
export const SourceDispatchContext = createContext<Dispatch<SourceAction>>(
  () => ({
    type: SourceActionType.SET_SOURCE,
    payload: {
      dataSource: DataSource.VERSIONS,
      data: {
        tableHeaders: [],
        tableData: [],
      },
    },
  })
);

export const useSource = () => useContext(SourceContext);
export const useSourceDispatch = () => useContext(SourceDispatchContext);
