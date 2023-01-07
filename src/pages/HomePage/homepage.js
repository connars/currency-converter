import './homepage.css';
import Widget from '../../components/widget/widget';

function Homepage() {

    return (
        <>
         <div className='homepage__wrapper'>
            <div className='container'> 
                <div className='hero'>
                    <div className='hero__left'>
                        <h1>Конвертер валют</h1>
                        <p>Купить, отправить, получить и обменять <br/> валюту в несколько кликов.</p>
                    </div>
                    <div className='hero__right'>
                        <Widget />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Homepage;