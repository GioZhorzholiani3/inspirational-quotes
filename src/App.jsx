import { useState } from "react";

import "./App.css";

import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-stone-700">
        <Quotes />
      </div>
    </>
  );
}

export default App;
