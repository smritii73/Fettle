import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assessts/bg-image.png'
import axios from "axios";
import Navbar from './Navbar';
import './Dashboard.css';
function Dashboard() {
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    
    useEffect(()=>{
      axios({
        url: "http://localhost:8000/verify",
        method: "GET",
      })
        .then(res=>{
            if(res.data.status){

            }
            else{
                navigate('/login')
            }
        })
    },[])

  return (
    <div>
      <Navbar/>
      <div className="home-container">
      <header>
        <h1>Welcome to Fettle</h1>
        <p>Your one-stop destination for managing your daily calorie intake and planning a healthy diet.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Calorie Calculator</h2>
          <p>Track your daily calorie intake with ease using our calorie calculator.</p>
        </div>
        <div className="feature">
          <h2>Diet Planner</h2>
          <p>Explore a variety of recipes tailored to your nutritional needs.</p>
        </div>
      </section>
      <footer>
        <p>Get started now to achieve your health goals!</p>
      </footer>
    </div>
    </div>
  )
}

export default Dashboard