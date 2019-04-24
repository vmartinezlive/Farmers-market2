import React from 'react';
import veggies from '../assets/images/veggies.jpg';
// import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
// import { withRouter } from 'react-router-dom';
import Moment from 'moment';
import PropTypes from 'prop-types';

function NewLocationForm(props){
  let _nuLocation = null;
  let _nuDay = null;
  let _nuHours = null;

  function handleNewFormSubmission(event){
    event.preventDefault();

    props.onNewLocationCreation({location: _nuLocation.value, day: _nuDay.value, hours: _nuHours.value, id: v4(), timeOpen: new Moment()});
    _nuLocation.value = ' ';
    _nuDay.value = ' ';
    _nuHours.value = ' ';
    location.hash = '/';
  }


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
      <form onSubmit={handleNewFormSubmission}>
        <div className="parent">
          <div className="form">
            <h3>New Location:</h3>
            <input type="text" id="nuLocation" ref={(input) => { _nuLocation = input;}}/>
            <h3>New Day:</h3>
            <input type="text" id="nuDay" ref={(input) => { _nuDay = input;}}/>
            <h3>New Hours:</h3>
            <input type="text" id="nuHours" ref={(input) => { _nuHours = input;}}/>
            <br/>
            <br/>
            <button type="submit" id="submit">Submit</button>
          </div>
          <div >
            <img className="img" src={veggies}/>
          </div>
        </div>
      </form>
    </div>
  );
}
NewLocationForm.propTypes = {
  onNewLocationCreation: PropTypes.func
};

export default NewLocationForm;
