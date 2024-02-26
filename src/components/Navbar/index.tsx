// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = (props:any) => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/" >
						Home
					</NavLink>
					<NavLink to="/courses" >
						Courses
					</NavLink>
					<NavLink to="/community" >
						Community
					</NavLink>
					{/*<NavLink to="/signup" >*/}
					{/*	Community*/}
					{/*</NavLink>*/}
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/authorized">
						Login
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
