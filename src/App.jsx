import React from "react";
import "remixicon/fonts/remixicon.css";
import "@fontsource/open-sans";
import Header from "./Components/Header/Header";
import Home from "./Components/Section/Home";
import Service from "./Components/Section/Service";
import About from "./Components/Section/About";
import Popular from "./Components/Section/Popular";
import Review from "./Components/Section/Review";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Service />
      <About />
      <Popular />
      <Review />
      <Footer />
    </>
  );
}
export default App;
