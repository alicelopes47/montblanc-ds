import React from 'react';

// TODO: passar o estado de loading para o botão

interface ButtonProps {
  variant?: "primary" | "secondary";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant,
  label,
  disabled,
  ...props
}: ButtonProps) => {

  function getVariantBackground() {
    switch (variant) {
      case "primary":
        return 'bg-primary-light-active';
      case "secondary":
        return 'bg-primary-normal';
      default:
        return 'bg-primary-light-active';
    }
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`text-body-1 text-primary-darker border-regular border-primary-dark-active p-button rounded-md ${getVariantBackground()} disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-none`}
      {...props}
    >
      {label}
    </button>
  );
};
