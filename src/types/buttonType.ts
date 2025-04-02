import React from "react";

// Interface for button component
interface ButtonProps {
  bg_color?: string;
  text_color?: string;
  cb?: () => void;
  children?: React.ReactNode;
}

export default ButtonProps;
