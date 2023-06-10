import React, { ReactNode } from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "success" | "error";
  uppercase?: boolean;
  bold?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export const Button = function ({
  size = "medium",
  color = "primary",
  uppercase = false,
  bold = true,
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const className = handleClassName(size, color, uppercase, bold, disabled);

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

function handleClassName(
  size: string,
  color: string,
  uppercase?: boolean,
  bold?: boolean,
  disabled?: boolean
) {
  let className = `rounded cursor-pointer shadow-[2px_4px_1px_#cdcdcd] transition-colors duration-300`;

  switch (color) {
    case "primary":
      className += " bg-primary hover:bg-primary-dark text-white";
      break;

    case "success":
      className += " bg-success hover:bg-success-dark text-white";
      break;

    case "error":
      className += " bg-error hover:bg-error-dark text-white";
      break;
  }

  switch (size) {
    case "small":
      className += " text-sm py-1 px-2";
      break;

    case "medium":
      className += " text-base py-2 px-4";
      break;

    case "large":
      className += " text-lg py-4 px-8";
      break;
  }

  if (disabled) className += " opacity-50 cursor-not-allowed";
  else
    className += ` active:shadow-[2px_2px_1px_#9e9e9e] active:translate-y-0.5 `;

  if (uppercase) className += " uppercase";

  if (bold) className += " font-bold";

  return className;
}
