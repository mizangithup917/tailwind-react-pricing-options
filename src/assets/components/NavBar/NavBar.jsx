
import React from 'react';
import Link from './Link';

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
  return (

    <div className=' bg-blue-900'>
      <nav className='flex justify-between mx-15 items-center'>
      <h3 className='text-2xl font-bold text-white'>Mizan-Nav</h3>
      <ul className='flex'>
                {
          navLinks.map(route => <Link key={route.id} route={route}></Link>)
        }

      </ul>

      <button className='text-white font-bold py-3 px-6 rounded-sm  bg-amber-400'>Sing in</button>

   
    </nav>
    </div>
    

  );
};

export default NavBar;