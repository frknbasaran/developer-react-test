import { PropsWithChildren, useReducer } from "react";
import { SourceReducer } from "../reducers/SourceReducer";
import { DataSource } from "../types/enums";
import {
  SourceContext,
  SourceDispatchContext,
} from "../contexts/SourceContext";
import initialData from "../dataSources/versions.json";

export function SourceProvider({ children }: PropsWithChildren) {
  const [source, dispatch] = useReducer(SourceReducer, {
    dataSource: DataSource.VERSIONS,
    data: initialData,
  });

  return (
    <SourceContext.Provider value={source}>
      <SourceDispatchContext.Provider value={dispatch}>
        {children}
      </SourceDispatchContext.Provider>
    </SourceContext.Provider>
  );
}
