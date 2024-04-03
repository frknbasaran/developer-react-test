import React from "react";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import { SourceProvider } from "./providers/SourceProvider";

function App() {
  return (
    <SourceProvider>
      <Nav />
      <Content />
    </SourceProvider>
  );
}

export default App;
