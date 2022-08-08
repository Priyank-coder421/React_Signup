import React from 'react'
import './style.css';
export const Bank = () => {
  return (
    <div class="form-container">
    <form>
    <h2>Bank details</h2><br></br>
     <div className="input-group">
        <label>Bank Name*</label>
          <input type="text" required></input>
     </div>

     <div className="input-group">
        <label>Account Name*</label>
          <input type="text" required></input>
     </div>
     
     <div className="input-group">
      <label>Account number*</label>
       <input type="number" required></input>
     </div>
 
     <div className="input-group">
        <label>Type of account*</label>
          <input type="text" required></input>
     </div>
 
     <div class="submit-group">
           <input type="submit" className="submit" value="Submit"></input>
       </div>
     </form>
         
     </div>
   
  )
}
