import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Error404(props){

  return(
    <div>
      <style jsx>{`
      iframe{
        align-self: center;
        width: 100vw;
      }
      h1, h2{
        font-family: Allerta;
        text-align: center;
      }
      a{
        color: #FCFD46;

      }
      `}</style>
      <h1>You funked it all up, {props.location.pathname} does not exsist.</h1>
      <h2>Would you like to return <Link to='/'><a>home</a> </Link>instead?</h2>
      <div>
        <iframe src="https://giphy.com/embed/haZOqHKz9tTfW" width="440" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    </div>
  );
}
Error.propTypes = {
  location: PropTypes.object
};

export default Error404;
