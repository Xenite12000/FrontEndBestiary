import React from 'react';
import NavbarBesitary from '../components/navbar';
import Cardbeast from '../components/cardbeast';
import homestyle from '../style/home.module.css';


function Home() {
  return (
    <>
    <div className={homestyle['Background']}>
      <React.StrictMode>
        <div>
          <NavbarBesitary />
        </div>
        <div className={homestyle['Card']}>
          <Cardbeast />
        </div>
      </React.StrictMode>
    </div>
    </>
  );
}

export default Home;