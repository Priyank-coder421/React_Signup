import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

export const Businessinfo = () => {
  return (
    <div class="form-container">
   <form>
   <h2>Business details</h2><br></br>
    <div className="input-group">
       <label>Business Name*</label>
         <input type="text" required></input>
    </div>

    <div className="input-group">
     <label>Business Type*</label>
      <input type="text" required></input>
    </div>

    <div className="input-group">
    <label>Business emailId*</label>
      <input type="email" required></input>
    </div>

    <div className="input-group">
       <h2>Business Address*</h2>
       <label>Address line 1</label>
      <input type="text" required></input>
      <label>Address line 2</label>
      <input type="text" required></input>
      <label>City</label>
      <input type="text" required></input>
      <label>Pincode</label>
      <input type="text" required></input>
         
    </div>
    <div className="input-group">
     <label>details regarding the services you offer(optional)</label>
      <input type="text"></input>
    </div>
   
    <div class="submit-group">
   <Link to="/Bank" ><button className="submit" >Next</button></Link>
         
      </div>
    </form>
        
    </div>
  )
}
