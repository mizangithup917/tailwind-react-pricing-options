import React from 'react';

const Link = ({route}) => {
  return (
      <li className='mr-10 font-bold text-amber-600'>
        <a href={route.path}>{route.name}</a>
      </li>
  );
};

export default Link;