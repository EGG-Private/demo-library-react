import React from "react";

export const FancyButton: React.FC<{ label: string }> = ({ label }) => {
  return <button className="fancy">{label}</button>;
};
