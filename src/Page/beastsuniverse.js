import React from 'react';
import NavbarBesitary from '../components/navbar';
import homestyle from '../style/home.module.css';
import BeastByUniverse from '../Bdd/BeastByUniverse';


function BeastsByUniverse() {
  return (
    <>
    <div className={homestyle['Background']}>
      <React.StrictMode>
        <div>
          <NavbarBesitary />
        </div>
        <div className={homestyle['Card']}>
          <BeastByUniverse />
        </div>
      </React.StrictMode>
    </div>
    </>
  );
}

export default BeastsByUniverse;