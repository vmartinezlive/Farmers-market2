import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {


  return(
    <div className="mainNav">
      <style jsx>{`
          .mainNav {
            display: flex;
            width : 100%;
            height : 75px;
            justify-content: flex-start;
          }

          .links {
            width: 65%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

					a {
            text-decoration: none;
            font-family: 'Allerta', sans-serif;
            color: #FFF;
            font-size: 1rem;
					}

          a:hover{
            color: #42e8de;
          }
          .icons {
            width: 10%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          i {
            padding-left: 25%;
          }
				`}</style>
        <div className="icons">
          <i className="fab fa-facebook-f fa-2x"></i>
          <i className="fab fa-instagram fa-2x"></i>
        </div>
      <div className="links">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <a>#Home</a>
        </Link>
        <a href="#">#Snack Fest</a>
        <Link to="/displayproduce" style={{ textDecoration: 'none' }}>
          <a>#Produce</a>
        </Link>
        <a href="#">#FAQ </a>
        <a href="#">#Apply</a>
        <a href="#">#Vendors </a>
        <a href="#">#Map</a>
      </div>
    </div>
  );
}
export default NavBar;
