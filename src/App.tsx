import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Urls} from "./config";


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = () =>{
        navigate("/authorized");
    }

    const register = () =>{
         window.open(Urls.registerPage, '_blank');
    }

  return (
    <div className="App container">
         <h1 className="text-center text-3xl font-bold text-cyan-500">HomePage</h1>

{/*<div className="flex items-center">*/}
{/*            <a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="/courses">Courses</a>*/}
{/*            <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="/community">*/}
{/*              Community*/}
{/*            </a>*/}
{/*          </div>*/}
{/*        <br/>*/}
{/*        <br/>*/}
{/*        <div className="text-center">*/}
{/*        <button className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-2 px-4 rounded transition duration-200" type='button' onClick={login}>*/}
{/*              Login*/}
{/*        </button>*/}
{/*        <br/>*/}
{/*        <br/>*/}
{/*        <button className="text bg-green-500 hover:bg-green-700 text-lg text-white font-bold py-2 px-4 rounded transition duration-200" type='button' onClick={register}>*/}
{/*              Register*/}
{/*        </button>*/}
{/*        </div>*/}

    </div>
  );
}

export default App;
