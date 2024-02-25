import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext, IAuthContext, TRefreshTokenExpiredEvent} from "react-oauth2-code-pkce";
import axios from "axios";
import {Urls} from "../config";
const UserInfo = () =>{
  const { tokenData, token, logOut, idToken, error, login }: IAuthContext = useContext(AuthContext)
    const [apiResponse, setApiResponse] = useState(null);
    useEffect(()=>{
        axios.get(Urls.countApi, {
            headers: {
                "Authorization": `Bearer ${token.toString()}`
            }
        }).then(res=>{
            setApiResponse(res.data);
        }).catch(()=>{
            setApiResponse(null);
            login();
        })
    }, [token]);

    if (error) {
    return (
      <>
        <div style={{ color: 'red' }}>An error occurred during authentication: {error}</div>
        <button type='button' onClick={() => logOut()}>
          Logout
        </button>
      </>
    )
  }
    return(
        <>
            {token && apiResponse? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            color: 'grey',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              padding: '10px',
              margin: '10px',
              border: '1px solid white',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>Welcome Back User!</p>
              <br/>
              <h1>API Response</h1>
              <br/>
              <pre>{JSON.stringify(apiResponse, null, 2) }</pre>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            color: 'grey',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              padding: '10px',
              margin: '10px',
              border: '1px solid white',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>Please login to continue</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' style={{ width: '100px' }} onClick={() =>login()}>
              Login
            </button>
          </div>
        </div>
      )}
        </>
    );
}

export default UserInfo;