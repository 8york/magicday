import ButtonOne from "../../components/ButtonOne";
import React from "react";

export default function Oracle() {
  const options = ["dinner", "Kids", "chores"];

  return (
    <main>
      <h2>
        Ask oracle what to cook for dinner, activity with kids or which chores
        to do
      </h2>
      <div className="btn">
        {options.map((option) => (
          <ButtonOne key={option} option={option} />
        ))}
      </div>
    </main>
  );
}
