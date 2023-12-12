import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react' 

const TopLinks = () => {

  const navigate = useNavigate()
  const [auth, setAuth] = useState("")

  useEffect(() => {
    const user = localStorage.getItem('user');
    setAuth(user);
  }, []);
  // const user = JSON.parse(auth);
  
    const user = auth ? JSON.parse(auth) : null;
  
    const username = user ? "Hello, " + user.fname : "";
  

  const logout = () => {
    localStorage.clear()
    console.log("logout");
    navigate('/')
}

  return (
    <div className=''>
    
    <p>{username}</p>
      
    <div className="absolute top-2 right-4 space-x-4 text-sm">
      {
        auth ?
      <Link  onClick={logout} to={"/"} className="text-blue-600 hover:underline">
        Logout
      </Link>
      :
      <Link to="/sign-in" className="text-blue-600 hover:underline">
        Sign In
      </Link>
      }

      <span className="text-black">|</span>
      <a href="#subscribe" className="text-blue-600 hover:underline">
        Subscribe
      </a>

    </div>
    </div>
  );
};

export default TopLinks;
