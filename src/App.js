import React, { useState } from "react";
import Routes from "./Routes";

function App() {
  const [displayText, setDisplayText] = useState("");

  const handleItemClick = (label) => {
    switch (label) {
      case "Reeco":
        setDisplayText("Reeco Text");
        break;
      case "Store":
        setDisplayText("Store Text");
        break;
      case "Orders":
        setDisplayText("Orders Text");
        break;
      case "Analytics":
        setDisplayText("Analytics Text");
        break;
      default:
        setDisplayText("");
        break;
    }
  };

  return <Routes />;
}

export default App;
