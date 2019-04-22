import React from 'react';
import veggies from '../assets/images/veggies.jpg';

function NewTicketForm(){

  return(
    <div>
      <style jsx>{`
      .parent {
        display: flex;
        justify-content: space-around;
        width: 100%;
        font-family: Allerta;
      }
      .img {
        width: 40vw;
        height: 60vh;
        margin-right: 5vw;
      }
      .form {
        // display: none;
        border: 1px dotted #FCFD46;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 50px;
      }
      input {
        width: 30em;
      }
      button {
        background-color: #FCFD46;

      }
      `}</style>

      <div className="parent">
        <div className="form">
          <h3>New Location:</h3>
          <input type="text" id="NuLocation" ></input>
          <h3>New Day:</h3>
          <input type="text" id="NuDay" ></input>
          <h3>New Hours:</h3>
          <input type="text" id="NuHours" ></input>
          <br/>
          <br/>
          <button type="submit" id="submit">Button</button>
        </div>
        <div >
          <img className="img" src={veggies}/>
        </div>
      </div>
    </div>
  );
}

export default NewTicketForm;
