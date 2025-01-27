import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full">
            <div className="relative w-full h-80 sm:h-60">
                <Image
                    src="/images/Bread.jpg"
                    alt="Header Image"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    unoptimized
                />
            </div>
        </header>
    );
};

export default Header;
