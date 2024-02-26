import React from "react";
import NavSection from "./components/Navsection/NavSection";
import { StyledEngineProvider } from "@mui/material";
import BodySection from "./components/BodySection/BodySection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <NavSection />
        <BodySection />
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
