import React from 'react';
import NavbarBesitary from '../components/navbar';
import homestyle from '../style/home.module.css';
import Product from '../Bdd/Product';


function Home() {
  return (
    <>
    <div className={homestyle['Background']}>
      <React.StrictMode>
        <div>
          <NavbarBesitary />
        </div>
        <div className={homestyle['Card']}>
          <Product />
        </div>
      </React.StrictMode>
    </div>
    </>
  );
}

export default Home;