import React, { ReactNode } from "react";
import CardTitle from "./CardTitle";

export interface CardProps {
  title?: string;
  size?: "fit" | "small" | "medium" | "large";
  children?: ReactNode;
}

export const Card = function ({ title, size = "fit", children }: CardProps) {
  const className = handleClassName(size);

  return (
    <div className={className}>
      <CardTitle title={title}></CardTitle>
      {children}
    </div>
  );
};

export default Card;

function handleClassName(size: string) {
  let className = `bg-white-dark drop-shadow py-6 px-6`;

  switch (size) {
    case "fit":
      className += " w-fit";
      break;

    case "small":
      className += " w-1/2";
      break;

    case "medium":
      className += " w-2/3";
      break;

    case "large":
      className += " w-full";
      break;
  }

  return className;
}
