import React, { CSSProperties, ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
  className = "",
}) => {
  // Correctly apply the className prop to the button element
  return (
    <div className={`flex space-x-4 flex-1 ${className}`}>
      <button
        type="button"
        onClick={onClick}
        style={style}
        className={`py-2 px-4 text-center w-32 bg-primary rounded-[30px] flex-1 font-bogue md:min-w-max w-[278px] focus:bg-yellow ${className}`}
      >
        <span className="block text-black w-32 spx-[37px]  text-[22px] font-bogue">
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;
