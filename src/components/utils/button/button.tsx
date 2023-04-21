import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick,...rest }) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
}
