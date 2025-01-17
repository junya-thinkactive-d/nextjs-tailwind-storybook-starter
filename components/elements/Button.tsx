import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  // primary = false,
  // size = 'medium',
  // backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className="rounded-md bg-blue-500 px-4 py-2 text-white" {...props}>
      {label}
    </button>
  );
};
