import React from 'react'
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61Q6BYGdNxL._SX3000_.jpg" alt="Cyber deals" />

                <div className="home__row">
                    <Product title='The lean startup' price={29.99} image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg" rating={5}/>
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                 <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}
