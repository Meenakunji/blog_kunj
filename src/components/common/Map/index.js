import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-73.98963153934479%2C40.747508328895226%2C-73.98115754127495%2C40.75008520550933&layer=mapnik"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Simple Map"
      ></iframe>
      <a href="https://www.openstreetmap.org/?mlat=40.748817&mlon=-73.985428#map=16/40.7488/-73.9854">
        View Larger Map
      </a>
    </div>
  );
};

export default Map;
