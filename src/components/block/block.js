import { useState, useEffect, useRef } from "react";


function Block({ title, value, currency, onChangeValue, onChangeCurrency, placeholder }) {

    const defaultCurrencies = ['UAH', 'USD', 'EUR', 'PLN'];

    return  (
        <div className="widget__top">
            <div className="widget__top-heading">
                <span>{title}</span>
                <ul className="currencies">
                    {defaultCurrencies.map((cur) => (
                    <li
                        onClick={() => onChangeCurrency(cur)}
                        className={currency === cur ? 'active' : ''}
                        key={cur}>
                        {cur}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="widget__top-sum">
            <input
                onChange={(e) => onChangeValue(e.target.value)}
                value={value}
                type="number"
                placeholder={placeholder}
                />
        </div>
    </div>

    )
}

export default Block;