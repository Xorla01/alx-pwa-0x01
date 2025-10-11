import React from "react";
import Image from "next/image";
import { LogoProps } from "@/interfaces";

export const Footer: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <footer>
            <div>
                <Image src="#" alt="Logo" width={Number(width)} height={Number(height)}/>
            </div>
        </footer>
    )
}