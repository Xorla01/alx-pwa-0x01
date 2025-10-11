import React from "react";
import Link from "next/link";
import Button from "../common/Button";

export const Header: React.FC =() => {
    return (
        <header>
            <div>
                <h2>Cine<span>Seek</span></h2>

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/movies">Movies</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>

            <div>
                <Button 
                    title="Sign in"        
                />
            </div>
            <div>
                <Button 
                    title="Sign in"        
                />
            </div>
        </header>
    );
}

export default Header;