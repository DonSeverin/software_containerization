import React from 'react';

const Header = () => {
    return (
        <header className="bg-black py-4 flex pl-4" >         
            <a href="/" className="text-white text-4xl font-bold hover:text-green-300 " style={{ fontFamily: "'Montserrat', sans-serif" }}>&lt;Kublog /&gt;</a>
        </header>
    );
};

export default Header;
