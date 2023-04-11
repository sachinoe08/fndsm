import React from 'react';
import { NavbarBrandProps } from 'react-bootstrap/esm/NavbarBrand';
import Navbar from 'react-bootstrap/Navbar';
import './logo.scss';

interface LogoProps extends NavbarBrandProps {
  logo?: string | React.ReactNode;
  eleType?: React.ElementType<any>;
}

export const Logo = ({ logo, eleType, ...props }: LogoProps) => {
  return (
    <Navbar.Brand as={eleType} {...props}>
      {logo}
    </Navbar.Brand>
  );
};
Logo.defaultProps = {
  logo: (
    <img
      src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
      alt="Zenni Optical"
    />
  ),
  href: '/',
  eleType: 'a',
  bsPrefix: 'zenni-logo',
};
