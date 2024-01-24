import React from 'react';
import NavbarBesitary from '../components/navbar';
import homestyle from '../style/home.module.css';
import Universe from '../Bdd/Universe';

function Universepage() {
  return (
    <>
    <div className={homestyle['Background']}>
      <React.StrictMode>
        <div>
          <NavbarBesitary />
        </div>
        <div className={homestyle['Card']}>
          <Universe />
        </div>
      </React.StrictMode>
    </div>
    </>
  );
}

export default Universepage;