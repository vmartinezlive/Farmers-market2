import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';




function Footer(){
  const whiteTest = {
    color: 'white',
    border: '1px solid blue'
  };
  return (
    <div className="maindiv">
      <style jsx>{`
        .maindiv {
          width:100%;
        }
        .links {
          display: flex;
          flex-direction: row;
          color: white;
          align-items: center;
          margin-top: 10px;
          width: 100%;
        }
        .navbar {
          width: 90%;
        }
        h2 {
          color: white;
          font-family: 'Allerta', sans-serif;
          font-size: .90rem;
          // border: 1px solid white;
          // margin-right: 200px;
        }

      `}</style>

      <div className="links">
        <div className="navbar">
          <NavBar/>
        </div>
        <div className="form">
          <Link to="/newlocation"><h2>#ADMIN</h2></Link>
        </div>
      </div>

    </div>
  );
}

export default Footer;
