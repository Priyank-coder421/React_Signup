import React from 'react'
import './style.css';
import { Link } from "react-router-dom";

const Signup = () => {
   

  return (
   
    <div class="form-container">
      <form>
        <h2>Create your account!</h2><br></br>
     
        <div className="input-group">
        <label>Username*</label>
        <input type="text" placeholder="Enter your username" required/>
        </div>
        
        <div className="input-group">
        <label>Email*</label>
        <input type="email" placeholder="Enter your email" required/>
        </div>

        <div className="input-group">
        <label>Password*</label>
        <input type="password" placeholder="Enter your password" required/>
        </div>

        <div className="input-group">
        <label>Confirm Password*</label>
        <input type="password" required/> 
        </div>

        <div class="submit-group">
          <Link to="/Personal"><button className="submit">Signup</button></Link>
      </div>
      
      </form> 
    </div>
  
  );
}


export default Signup;