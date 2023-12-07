import Favorite from "../components/favorite";
import React from 'react';
import homestyle from '../style/home.module.css';
import NavbarBesitary from "../components/navbar";


function FavoriteList() {
  return (
    <>
    <div className={homestyle['Background']}>
        <NavbarBesitary />
        <div className={homestyle['Card']}>
            <Favorite />
        </div>
    </div>
    </>
  );
}

export default FavoriteList;