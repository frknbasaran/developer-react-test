import { DataSource, SourceActionType } from "../types/enums";
import { SourceState } from "../types/interfaces";

export function SourceReducer(
  state: SourceState,
  action: {
    type: SourceActionType;
    payload: {
      dataSource: DataSource;
      data: {
        tableHeaders: string[];
        tableData: any[];
      };
    };
  }
) {
  switch (action.type) {
    case SourceActionType.SET_SOURCE:
      return {
        ...state,
        dataSource: action.payload.dataSource,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
