import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      offset={-100}
      className='block py-2 px-4 text-white hover:cursor-pointer'
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
