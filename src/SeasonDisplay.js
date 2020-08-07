import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "It's Summer and I am dying",
    iconType: "sun"
  },
  winter: {
    text: "Brrrrrrr. It's cold",
    iconType: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconType } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconType} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconType} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
