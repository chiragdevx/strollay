import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
  className = "",
}) => {
  return (
    <div className={`flex space-x-4 flex-1 ${className}`}>
      <button
        type="button"
        title="Start buying"
        onClick={onClick}
        style={style}
        className={`py-2 px-4 text-center bg-primary rounded-[30px] flex-1 font-bogue md:min-w-max w-[278px] focus:bg-yellow ${className}`}
      >
        <span className="block text-white px-[37px] font-semibold text-[22px] font-bogue">
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;
