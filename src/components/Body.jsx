import React from 'react';
import DisplaySchedule from './DisplaySchedule';
import Img from './Img';

function Body(props){
  return (
    <div>
      <style jsx>{`
        div{
          // max-height:100%;
          display:block;
          position:relative;
          // border: 1px solid red;
          overflow: hidden;
        }
			`}

      </style>

      <Img/>
      <DisplaySchedule marketSchedule={props.marketSchedule}/>
    </div>
  );
}

export default Body;
