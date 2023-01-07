import swith from '../../assets/images/switch.svg';
import Block from '../block/block';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

function Widget() {

        const [ fromCurrency, setFromCurrency ] = useState('USD');
        const [ toCurrency, setToCurrency ] = useState('UAH');
        const [ fromPrice, setFromPrice ] = useState(1);
        const [ toPrice, setToPrice ] = useState(1);

        const rates = useRef({});

        useEffect(() => {
            axios.get("https://api.exchangerate.host/latest")
            .then(({data}) => {
                data = data.rates;
                rates.current = data;
                console.log(data);
                onChangeFromPrice(1);
            });      
        }, []);

        const onChangeFromPrice = (value) => {
            const price = value / rates.current[fromCurrency];
            const result = price * rates.current[toCurrency];
            setFromPrice(value);
            setToPrice(result.toFixed(2));
        }

        const onChangeToPrice = (value) => {
            const result = (rates.current[fromCurrency] / rates.current[toCurrency]) * value;
            setToPrice(value);
            setFromPrice(result.toFixed(2));
        }

        useEffect(() => {
            onChangeFromPrice(fromPrice);   
        }, [fromCurrency]);

        useEffect(() => {
            // onChangeFromPrice(fromPrice);
            onChangeToPrice(toPrice);
            onChangeFromPrice(fromPrice);  
        }, [toCurrency]);

        function handleSubmit() {
            setToCurrency(fromCurrency);
            setFromCurrency(toCurrency);
        };

    return  (
        <div className='widget__wrapper'>
            <Block 
                title={'У меня есть'}
                value={fromPrice}
                currency={fromCurrency} 
                onChangeCurrency={setFromCurrency} 
                onChangeValue={onChangeFromPrice}
                placeholder={''} 
            />
            <div className="widget__middle" onClick={handleSubmit}>
                <hr></hr>
                <div className="swith">
                    <img className="swith-img" src={swith}></img>
                </div>
                <hr></hr>
            </div>
            <Block 
                title={'Хочу приобрести'}
                value={toPrice} 
                currency={toCurrency} 
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToPrice}
            />
            <div className="widget__bottom-footer">
                    <button className="main-btn">Обменять сейчас</button>
                    <span>Войдите в личный кабинет для возможности провести обмен</span>
            </div>
        </div>
    )
}

export default Widget;