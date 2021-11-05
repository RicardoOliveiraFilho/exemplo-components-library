import React from 'react';
import { StyledButton } from './styles';

export type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  label
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      style={backgroundColor ? { backgroundColor } : {}}
      mode={primary ? 'primary' : 'secondary'}
      size={size}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}