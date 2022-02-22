import React from "react";
import Chart from "./Chart";
import PopConfirm from "./PopConfirm";
import SideBarWithMenu from "./ProgressBar";

const AntDesign = () => {
  return (
    <div>
      <h1>
        <b>Chart</b>
      </h1>
      <Chart />
      <h1>
        <b>Progress Bar</b>
      </h1>
      <br />
      <SideBarWithMenu />
      <br />
      <h1>
        <b>Pop Confirm</b>
      </h1>
      <br />
      <PopConfirm />
      <br />
    </div>
  );
};

export default AntDesign;
