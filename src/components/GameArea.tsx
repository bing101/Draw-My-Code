import React from "react";
import "../css/GameArea.css";
import CodeArea from "./CodeArea";
import ImageArea from "./Console";

const GameArea: React.FC = () => {
  return (
    <div className="GameArea">
      <div className="container">
        <CodeArea />
        <ImageArea />
      </div>
    </div>
  );
};

export default GameArea;