import './header.css';
import axios from 'axios';
import { useState, useEffect, useRef } from "react";

function Header() {
    const rates = useRef({});

    const [ eur, setEur ] = useState();
    const [ usd, setUsd ] = useState();
    const [ pln, setPln ] = useState();
            
    useEffect(() => {
        axios.get("https://api.exchangerate.host/latest")
        .then(({data}) => {
            data = data.rates;
            rates.current = data;

            let usdValue = (data.UAH / data.USD).toFixed(2);
            let plnValue = (data.UAH / data.PLN).toFixed(2);

            setEur(data.UAH.toFixed(2));
            setUsd(usdValue);
            setPln(plnValue);
        });      
    }, []);

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
                                    <p>EUR<span className="eur">{eur}</span></p>
                                    <p>USD<span className="usd">{usd}</span></p>
                                    <p>PLN<span className="pln">{pln}</span></p>
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