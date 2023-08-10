import React, { useState } from "react";

import classes from "./WeatherDetails.module.css";

let timeInfo;
let datetoDisplay;
let timetoDisplay;

function formatTime(timeString) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
}

const WeatherDetails = (props) => {
  console.log("Time and date is" + props.timeData);
  timeInfo = props.timeData.split("T");
  console.log("TimeInfo is" + timeInfo[0]);
  console.log("TimeInfo is" + timeInfo[1]);
  timetoDisplay = formatTime(timeInfo[1]);

  console.log(formatTime(timetoDisplay));

  datetoDisplay = timeInfo[0];

  return (
    <div>
      <div className="CardComponet">
        <label className={classes.timeDetails}>
          <label className={classes.timeDetails}>
            <strong>{props.cityData}</strong>
          </label>
          <span>CURRENT WEATHER</span>
          <label className={classes.timeDetails}>{timetoDisplay}</label>
          <span className={classes.tempdetail}>
            <strong> {props.tempData} </strong> &#176;
          </span>
          C
        </label>

        {/* <label className={classes.dateDetails}>Date :{datetoDisplay}</label> */}
        {/* <button onClick={props.getTime}>getTimeInfo</button> */}
      </div>
    </div>
  );
};
export default WeatherDetails;
