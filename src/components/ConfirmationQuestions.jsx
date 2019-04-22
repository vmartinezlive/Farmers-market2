import React from 'react';
import NewLocationForm from "./NewLocationForm";

function ConfirmationQuestions(){

  return(
    <div>
      <style jsx>{`
        * {
          font-family: Allerta;
          text-align: center;
        }
        button {
          background-color: #FCFD46;

        }
        `}</style>
      <h2>Are you sure you want to add a new location?</h2>
      <button  onClick={NewLocationForm}>Yes </button>
      <br/>
      <br/>
      <NewLocationForm/>
    </div>
  );
}

export default ConfirmationQuestions;
