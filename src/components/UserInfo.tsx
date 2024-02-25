import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext, IAuthContext} from "react-oauth2-code-pkce";
const UserInfo = () =>{
  const { tokenData, token, logOut, idToken, error }: IAuthContext = useContext(AuthContext)
    const navigate = useNavigate();
    const login = () =>{
        navigate("/login");
    }
    return(
        <>
            {token ? (
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
            <p>Welcome, John Doe!</p>

            <p>Use this token to authenticate yourself</p>
            <pre
              style={{
                width: '400px',
                margin: '10px',
                padding: '5px',
                border: 'black 2px solid',
                wordBreak: 'break-all',
                whiteSpace: 'break-spaces',
              }}
            >
              {token}
            </pre>
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

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' style={{ width: '100px' }} onClick={login}>
              Login
            </button>
          </div>
        </div>
      )}
        </>
    );
}

export default UserInfo;