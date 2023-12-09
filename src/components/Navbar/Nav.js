import { NavLink } from "react-router-dom";
import React, { useState } from 'react'

import { RxCross2 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";

import { Fade, Slide } from "react-awesome-reveal";



const NavLinks = () => {
    return <>
    <Fade cascade>
     <NavLink to="/">Home</NavLink>
     <NavLink to="/">About Me</NavLink>
    </Fade>
    </>
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return <>
        <nav className="w-1/6 lg:text-lg md:text-md flex justify-end">
            <div className="hidden w-full md:flex justify-between">
                <NavLinks />
            </div>
            <div className="md:hidden">
                <Slide direction="right"><button onClick={toggleNavbar}>
                    {isOpen? <Slide direction="right"><RxCross2 /></Slide> : <Fade direction="up"><CiMenuBurger /></Fade> }
                </button></Slide>
            </div>
        </nav>
        {isOpen && (
            <div className="flex basis-full flex-col items-center space-y-5 py-5">
                <NavLinks/>
            </div>
        )}
    </>
}

export default Nav