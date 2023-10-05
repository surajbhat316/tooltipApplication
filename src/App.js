import { useState } from "react";
import "./App.css";
import TooltipComponent from "./TooltipComponent";
function App() {

  const [tooltipPosition, setTooltipPosition] = useState("tooltip_text");

  function handleLeftTooltip(){
    setTooltipPosition("tooltip_text left");
  }

  function handleTopTooltip(){
    setTooltipPosition("tooltip_text top");
  }

  function handleRightTooltip(){
    setTooltipPosition("tooltip_text right");
  }

  function handleBottomTooltip(){
    setTooltipPosition("tooltip_text bottom");
  }
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TooltipComponent tooltipPosition={tooltipPosition}
                          handleLeftTooltip={handleLeftTooltip}
                          handleTopTooltip={handleTopTooltip}
                          handleRightTooltip={handleRightTooltip}
                          handleBottomTooltip={handleBottomTooltip} />
      </div>
    </div>
  );
}

export default App;
