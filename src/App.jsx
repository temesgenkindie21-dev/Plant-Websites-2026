import React from "react";
import "remixicon/fonts/remixicon.css";
import "@fontsource/open-sans";
import Header from "./Components/Header/Header";
import Home from "./Components/Section/Home";
import Service from "./Components/Section/Service";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Service />
    </>
  );
}
export default App;
