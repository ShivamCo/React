import React from "react";
import ReactDOM from "react-dom";

const cutomStyle = {
  fontSize: "20px",
  color: "red"
};

cutomStyle.color = "pink";

ReactDOM.render(
  <div>
    <h1 className="headStyle" contentEditable="true" spellCheck="false">
      Hello World!
    </h1>
    <h2 style={{ color: "green" }}>Food</h2>
    <h3 style={cutomStyle}> New Line </h3>
    <div>
      <img
        className="imageSize"
        src="https://lh3.googleusercontent.com/W2AB-tHGC8r1iPNdqa3z4ltF7A5pMKHjVBOARZB54gw8FKlQl9Uyi4ojorB5Crz-fmA7Qoy4xiXAsY7ILUcT2UJomPrG-MfDYdIYdP2a_w=w1000-rw"
        alt="pizza"
      />
      <img
        className="imageSize"
        src="https://b.zmtcdn.com/data/pictures/chains/5/18836835/35398759caa146492dbb51026d95cc1f.jpg?fit=around|750:500&crop=750:500;*,*"
        alt="burger"
      />
      <img
        className="imageSize"
        src="https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/0c595738-1dd9-45b7-b6eb-01c6aba21665_Go-Biz_20220907_125240.jpeg"
        alt="pazta"
      />
    </div>
  </div>,
  document.getElementById("root")
);
