import React from "react";

export default function Answer({ answer }) {
  return (
    <div>
      <p>{answer || "place a question"}</p>
    </div>
  );
}
