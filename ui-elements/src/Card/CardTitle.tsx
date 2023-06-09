import React from "react";

export interface CardTitleProps {
  title?: string;
}

const CardTitle = function ({ title }: CardTitleProps) {
  if (!title) return <></>;

  return (
    <div>
      <p className={"text-black pb-4 font-bold text-xl text-center"}>{title}</p>
    </div>
  );
};

export default CardTitle;
