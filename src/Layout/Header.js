import React, { useState, useContext } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem,
  NavbarText,
  Collapse,
  Nav,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          SHIV's gitfire app
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <div style={{ float: "right" }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {context.user ? (
              <NavItem>
                <NavLink
                  onClick={() => {
                    context.setUser(null);
                  }}
                  className="text-white"
                >
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/signin" className="text-white">
                    Signin
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup" className="text-white">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
