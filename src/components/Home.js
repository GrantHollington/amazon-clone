import React from 'react'
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61Q6BYGdNxL._SX3000_.jpg" alt="Cyber deals" />

                <div className="home__row">
                    <Product id="12345678" title='The lean startup' price={29.99} image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg" rating={5}/>
                    <Product id="12345683"/>
                </div>

                <div className="home__row">
                    <Product id="12345679" title="Atomic Habits" price={22.00} image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UL640_QL65_.jpg" rating={4}/>
                    <Product id="12345680"/>
                    <Product id="12345681"/>
                </div>

                 <div className="home__row">
                    <Product id="12345682" />
                </div>
            </div>
        </div>
    )
}
