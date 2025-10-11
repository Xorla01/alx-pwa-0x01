import { ComponentsProps } from "@/interfaces";
import Header from "./Header";
import React from "react";

export const Layout: React.FC<ComponentsProps> = ({ children }) => {
    return (
        <>
       <Header />
       <main className="min-h-screen">{children}</main>
        <Footer />
       </>
    );
}