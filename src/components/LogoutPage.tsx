import {useContext, useEffect} from "react";
import {AuthContext, IAuthContext} from "react-oauth2-code-pkce";
import {useAuth} from "../AuthWrapper";

const LogoutPage = () =>{
    	  // const { tokenData, token, logOut, idToken, error, login }: IAuthContext = useContext(AuthContext)
          const { isLoggedIn, logoutGlobal } = useAuth();

    useEffect(()=>{
        logoutGlobal();
    }, []);
    return (
        <>
            <h1 className="text-center text-3xl text-red-600">You have been LoggedOut!</h1>
        </>
    );
}

export default LogoutPage;