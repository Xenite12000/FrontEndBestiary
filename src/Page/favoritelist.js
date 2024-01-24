import React from 'react';
import homestyle from '../style/home.module.css';
import NavbarBesitary from "../components/navbar";
import BeastFavorite from "../Bdd/BeastFavorite";


function FavoriteList() {
  return (
    <>
    <div className={homestyle['Background']}>
        <NavbarBesitary />
        <div className={homestyle['Card']}>
            <BeastFavorite />
        </div>
    </div>
    </>
  );
}

export default FavoriteList;