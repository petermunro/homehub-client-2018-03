import React from 'react';

const Accessory = ({accessory}) => (
  <div>
    <h3>{accessory.name}</h3>
    <p>{accessory.brightnessLevel}</p>
    <p>{accessory.manufacturer}</p>
    <p>{accessory.temperature}</p>
    <p>{accessory.__typename === "Door" && (accessory.isClosed ? "Closed" : "Open")}</p>
    <p>{accessory.__typename === "Door" && (accessory.isLocked ? "Locked" : "Unlocked")}</p>
    <p>{accessory.__typename === "Outlet" && (accessory.isOn ? "On" : "Off")}</p>
  </div>
);

export default Accessory;
