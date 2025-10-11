import { ButtonProps } from "@/interfaces";
import React from "react";

export const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <button>
            {title}
        </button>
    );
}

export default Button;