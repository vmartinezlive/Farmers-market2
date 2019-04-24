import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  var grid={
    listStyleType:'none',
    padding:'0'
  };

  if(props.selection.length>10){
      grid.display='grid',
      grid.gridTemplateColumns= '1fr 1fr'
    }

  if(props.selection.length > 20){
      grid.display='grid',
      grid.gridTemplateColumns= '1fr 1fr 1fr',
      grid.gridGap= '10px'
    }


  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
          font-family: Allerta;
          max-width: 100vw;
          overflow:hidden;
          border: 1px dotted gold;
        }
        h3{
          // text-align:center;
          color: #f61c6c;
          text-transform: uppercase;
          font-size: 125%;
        }

        .divStyles {
          display: flex;
          flex-flow: row wrap;
          // text-align:center;
          width: 100%;
          justify-content: center;
          // margin: 10px 35px 0 0;
          border: none;
        }
        ul {
          text-align: left;



        }

        `}
      </style>
      <h3>{props.month}</h3>
      <div className='divStyles'>
        <ul style={grid} >
          {
            props.selection.map((produce,i)=>{
              return <p key={i}>{produce}</p>;
            })
          }
        </ul>
      </div>

    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export  default Produce;
