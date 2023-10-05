import React from 'react'

export default function TooltipComponent(props) {
    const {tooltipPosition,handleLeftTooltip,handleTopTooltip,handleRightTooltip,handleBottomTooltip} = props;
  return (
    <div>
        <div id="first" className="hover_text">
          hover me
          <div
            id="leftTooltip"
            style={{position: "absolute", width: "30%", height: "50%", backgroundColor: "white", top:"50%", left: "0px", transform: "translateY(-50%)"}}
            onMouseEnter={handleLeftTooltip} 
          ></div>
          <div
            id="topTooltip"
            style={{position: "absolute", width: "50%", height: "30%", backgroundColor: "white" ,top: "0%",left: "50%", transform: "translateX(-50%)"}}
            onMouseEnter={handleTopTooltip}
          ></div>
          <div
            id="rightTooltip"
            style={{position: "absolute", width: "30%", height: "50%", backgroundColor: "white", top: "50%",right: "0px", transform: "translateY(-50%)"}}
            onMouseEnter={handleRightTooltip}
          ></div>
          <div
            id="bottomTooltip"
            style={{position: "absolute", width: "50%", height: "30%", backgroundColor: "white", bottom: "0%",left: "50%", transform: "translateX(-50%)"}}
            onMouseEnter={handleBottomTooltip}
          ></div>
          {/* <!-- <span class="tooltip-text" id="top">I'm a tooltip!</span> --> */}
          <span id="tooltip_text" className={tooltipPosition}>
            I'm a tooltip!
          </span>
        </div>

    </div>
  )
}
