import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import Icon from './Icon';



function Footer(){
  const whiteTest = {
    color: 'white',
    border: '1px solid blue'
  };
  return (
    <div>
      <style jsx>{`
        .links {
          display: flex;
          flex-direction: row;
          color: white;
          align-items: center;
          margin-top: 10px;
        }
        h2 {
          position: relative;
          color: white;
          bottom: -17px;
          font-family: 'Allerta', sans-serif;
          font-size: .90rem;
        }
        h3 {
          padding-top: 20px;
        }
        h2:hover{
          color: #42e8de;
        }

      `}</style>

      <div className="links">
        <Links/>
        <Link to="/newlocation"><h2>#Form</h2></Link>
        <h3><Icon/></h3>
      </div>

    </div>
  );
}

export default Footer;
