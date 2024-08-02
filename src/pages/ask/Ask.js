import React from "react";
import ButtonOne from "../../components/ButtonOne";

export default function Ask() {
  const options = ["cat", "human"];
  return (
    <div className="btn">
      {options.map((option) => (
        <ButtonOne key={option} option={option} />
      ))}
      /
    </div>
  );
}
