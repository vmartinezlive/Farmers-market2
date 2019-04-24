import React from 'react';
import DisplaySchedule from './DisplaySchedule';
import Img from './Img';

function Body(props){
  return (
    <div>
      <style jsx>{`
        div{
          display:block;
          position:relative;
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
