import React from "react";

export interface ComponentsProps {
    children: React.ReactNode;
}

export interface ButtonProps {
    title: string;
    action?: () => void;
}

export interface LogoProps {
    width: number | string;
    height: number | string;
}