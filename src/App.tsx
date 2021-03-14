import React from "react";
import { MoveProvider } from "./context/moveContext";

// importing components
import Nav from "./components/Nav/Nav";
import Scramble from "./components/Scramble/Scramble";

function App() {
  return (
    <MoveProvider>
      <Nav />
      <Scramble />
    </MoveProvider>
  );
}

export default App;
