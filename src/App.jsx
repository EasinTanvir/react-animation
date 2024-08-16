import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroBanner />
      <Highlights />
    </main>
  );
};

export default App;
