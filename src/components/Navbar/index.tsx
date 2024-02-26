// components/Navbar/index.js

import React, {useContext} from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import {AuthContext, IAuthContext} from "react-oauth2-code-pkce";
import {Paths, Urls} from "../../config";
import {useAuth} from "../../AuthWrapper";

const Navbar = (props:any) => {
		    const { isLoggedIn, loginGlobal, logoutGlobal } = useAuth();

	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to={Paths.homePath} >
						Home
					</NavLink>
					<NavLink to={Paths.coursePath} >
						Courses
					</NavLink>
					<NavLink to={Paths.communityPath} >
						Community
					</NavLink>
					{/*<NavLink to="/signup" >*/}
					{/*	Community*/}
					{/*</NavLink>*/}
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{isLoggedIn ? (
					<NavBtn>
					<NavBtnLink to={Paths.logoutPath}>
						Logout
					</NavBtnLink>
				</NavBtn>
				): (
					<NavBtn>
					<NavBtnLink to={Paths.loginPath}>
						Login
					</NavBtnLink>
				</NavBtn>
				)}
				{/*<NavBtn>*/}
				{/*	<NavBtnLink to="/authorized">*/}
				{/*		Login*/}
				{/*	</NavBtnLink>*/}
				{/*</NavBtn>*/}
			</Nav>
		</>
	);
};

export default Navbar;
