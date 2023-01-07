import './header.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Header() {

    useEffect(() => {
        let eur = document.querySelector('.eur');
        let usd = document.querySelector('.usd');
        let pln = document.querySelector('.pln');

        axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(({ data }) => {
                eur.textContent = data.find(cur => cur.cc == "EUR").rate;
                usd.textContent = data.find(cur => cur.cc == "USD").rate;
                pln.textContent = data.find(cur => cur.cc == "PLN").rate;
            });

    });





    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='header__wrapper'>
                        <div className='header__left'>
                            <span>ITOP1000</span>
                        </div>
                        <div className='header__middle'>
                            <div className='header__middle-text'>
                                {/* <h3>Актуальный курс валют к гривне на сегодня</h3> */}
                                <div className="rate">
                                    <p>EUR<span className="eur"></span></p>
                                    <p>USD<span className="usd"></span></p>
                                    <p>PLN<span className="pln"></span></p>
                                </div>
                            </div>
                        </div>
                        <div className='header__right'>
                            <button className='main-btn'>
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;