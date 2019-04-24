import React from 'react';
import bridge from '../assets/images/bridge.jpg';
function Img(){


  return(
    <div>
      <style jsx> {`
          // width: 100vw;
          // height: 100vh;
          display: block;
          width: 100vw;
          height: 50vh;
			`}
      </style>
      <img src={bridge} alt="bridge"></img>

    </div>
  );
}

export default Img;
