import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { Slide } from 'react-awesome-reveal'

function Header() {
  return (
    <header className='bg-slate-800 text-white sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-4 lg:p-6'>
        <Slide duration={2000}><Logo/></Slide>
        <Nav/>
    </header>
  )
}

export default Header