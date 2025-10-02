import React from 'react';

const Link = ({route}) => {
  return (
    <ul className='  bg-amber-50 md:bg-blue-900'>
        <li className='px-4 lg:mr-10 font-bold  text-amber-600  hover:bg-amber-100 md:hover:text-white md:hover:bg-blue-900'>
        <a href={route.path}>{route.name}</a>
      </li>
    </ul>

  );
};

export default Link;