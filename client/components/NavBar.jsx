import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import {
  Navbar, Nav, FormControl, Button, Form,
} from 'react-bootstrap';

const homeButtonDefault = {
  color: '#69BE28',
};

const homeButtonHovered = {
  color: '#69BE28',
  textDecoration: 'none',
  fontSize: '1.6rem',
};

const navItemDefault = {
  color: 'white',
};

const navItemHovered = {
  color: 'white',
  textDecoration: 'none',
  textShadow: '0px 0px 50px black',
  fontSize: '1.6rem',
};

const NavBar = ({ sections }) => {
  const [homeHovered, toggleHomeHover] = useState(false);

  const navItems = {};

  // sections.forEach((section) => { navItems[section] = true; });
  const [navHovered, toggleNavHover] = useState(navItems);

  const toggleNavItemHoverOn = (e) => {
    const navItem = e.target.getAttribute('value');
    toggleNavHover({ [navItem]: true });
  };

  const toggleNavItemHoverOff = (e) => {
    const navItem = e.target.getAttribute('value');
    toggleNavHover({ [navItem]: false });
  };

  return (
    <>
      <Navbar className="header-nav" variant="dark">
        <Navbar.Brand
          onMouseEnter={() => toggleHomeHover(true)}
          onMouseLeave={() => toggleHomeHover(false)}
        >
          <Link
            style={homeHovered ? homeButtonHovered : homeButtonDefault}
            to="/"
          >
            HOME
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          {sections.map((section) => (
            <Nav.Link
              value={section}
              onMouseEnter={(event) => toggleNavItemHoverOn(event)}
              onMouseLeave={(event) => toggleNavItemHoverOff(event)}

            >
              <Link
                to={section}
                style={navHovered[section] ? navItemHovered : navItemDefault}
              >
                {section.toUpperCase()}
              </Link>
            </Nav.Link>
          ))}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">SEARCH</Button>
        </Form>
      </Navbar>
    </>
  );
};

NavBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBar;
