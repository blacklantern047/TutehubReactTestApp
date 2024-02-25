import React from 'react';
import { useNavigate } from "react-router-dom";


const App = () => {
    const navigate = useNavigate();

    const login = () =>{
        navigate("/login");
    }

  return (
    <div className="App text-center">
      <h1 className="text-center text-3xl font-bold text-cyan-500">HomePage</h1>
        <br/>
        <br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' style={{ width: '100px' }} onClick={login}>
              Login
        </button>
    </div>
  );
}

export default App;
