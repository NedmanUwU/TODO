import React from 'react'

const MainContent = () => {
  return (
    <div style={headerStyle}>
        <h2>WAssap</h2>
    </div>
  );
};

const headerStyle = {
    height: "100%",
    display: "flex",
    backgroundColor: "#66b888",
    textAlign: "center",
    color: "white",
    padding: "20px",
    width: "100%",
};

export default MainContent