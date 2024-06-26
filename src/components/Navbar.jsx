import {React, useState} from 'react'
import { Link } from "react-router-dom";
import { close, menu } from '../assets';
import acom from "../assets/nav-logo.png";
import { navLinks } from '../constants';
import "./Navbar.css";

const Navbar = () => {
const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
    <Link to="/">
    <div className='flex items-center justify-between'>
        <img src={acom} alt='A-team' className='w-[50px] h-[50px]' />
        <h1 className='text-white text-gradient font-poppins  ss:text-[20px] ml-3'>ACOMUnity</h1>
     </div>
    </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins
          font-normal
          hover:text-secondary
          cursor-pointer
          text-[16px]
          ${index === navLinks.length - 1 ? 'mr-10' : 'mr-10'}
          text-white
          mr-10
          `}
          >
            <Link to={`${nav.link}`}>
              {nav.title}
            </Link>
          </li>
        ))};
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px]
          object-contain'
          onClick={() => setToggle((prev => !prev))}
           />

           <div 
           className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient 
            absolute 
            top-20 
            right-0
            mx-4 
            my-2 
            min-w-[140px]
            rounded-xl 
            sidebar`}
            >

        <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins
          font-normal
          cursor-pointer
          text-[16px]
          ${index === navLinks.length - 1 ? 'mr-10' : 'mb-4'}
          text-white
          mr-10
          `}
          >
            <a href={` #${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))};
      </ul>

      </div>
      </div>
    </nav>
  )
}

export default Navbar