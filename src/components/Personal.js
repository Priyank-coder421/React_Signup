import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
export const Personal= () => {
  return (
  <div class="form-container">
 <form>
 <h2>Personal details</h2><br></br>
    <div className="input-group">
       <label>Name*</label>
          <input type="text" required ></input>
      </div>

    <div className="input-group">
      <label>Phone*</label>
      <input type="text" required></input>
    </div>

    <div className="input-group">
      <label>Address*</label>
      <label>Address line 1</label>
      <input type="text" required></input>
      <label>Address line 2</label>
      <input type="text" required></input>
      <label>City</label>
      <input type="text" required></input>
      <label>Pincode</label>
      <input type="text" required></input> 
    </div>
         
    <div class="submit-group">
    <Link to="/Businessinfo" ><button className="submit">Next</button></Link>
      </div>
      
    </form>
    </div>
   
  )
}
export default Personal;