
import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const NavBar = () => {

  const [open, setOpen] = useState(false);

  const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)

  return (
      <nav className='bg-blue-900 w-full py-3 flex justify-between  items-center'>
        <span className='flex text-white ml-5 ' onClick={() =>setOpen(!open)}>
              {
                open ?
                <X className='  md:hidden'></X> :
                <Menu className='md:hidden'></Menu>
              }

              <ul className={`md:hidden absolute duration-1000
                ${open ? 'top-10' : '-top-40'}`}>
                {links}
              </ul>
              <h3 className='text-2xl font-bold text-white'>Mizan-Nav</h3>                  
        </span>
      <ul className='md:flex hidden '> 
        {
          links
        }
      </ul>
      <button className='text-white mr-10 font-bold py-2 px-6 rounded-sm  bg-amber-400'>Sing in</button> 
    </nav>
  );
};

export default NavBar;