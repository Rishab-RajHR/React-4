import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleLogut = () => {
      localStorage.removeItem('login');
      navigate('/login')
  }
  return (
    <>
       <h2>Home</h2> 
       <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home