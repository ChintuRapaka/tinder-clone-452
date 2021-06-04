import "./App.css";
import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
