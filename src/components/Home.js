import React from 'react'
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61Q6BYGdNxL._SX3000_.jpg" alt="Cyber deals" />

                <div className="home__row">
                    <Product 
                        id="12345678" 
                        title='The Lean Startup: How Constant Innovation Creates Radically Sucessful Businesses Paperback' 
                        price={29.99} 
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg" 
                        rating={5}/>
                    <Product 
                        id="12345683" 
                        title='The Courage to be Disliked: The Japanese phenomenon that shows you how to free yourself, change your life and achieve real happiness Paperback' 
                        price={18.75} 
                        image="https://m.media-amazon.com/images/I/91wIj1NrlZL._AC_UL640_QL65_.jpg" 
                        rating={4}/>
                </div>

                <div className="home__row">
                    <Product 
                        id="12345679" 
                        title="Atomic Habits the life-changing million-copy #1 bestseller Paperback" 
                        price={22.00} 
                        image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UL640_QL65_.jpg" 
                        rating={4}/>
                    <Product 
                        id="12345680" 
                        title="It Ends With Us: The emotional #1 Sunday Times bestseller" 
                        price={9.00} 
                        image="https://m.media-amazon.com/images/I/817vqET828L._AC_UL640_QL65_.jpg" 
                        rating={4}/>
                    <Product 
                        id="12345681" 
                        title="Verity: The thriller that will capture your heart and blow your mind Paperback" 
                        price={12.00} 
                        image="https://m.media-amazon.com/images/I/71jte84ADvL._AC_UL640_QL65_.jpg" 
                        rating={4}/>
                </div>

                 <div className="home__row">
                    <Product 
                        id="12345682" 
                        title="House of Sky and Breath Paperback" 
                        price={16.00} 
                        image="https://m.media-amazon.com/images/I/91ijLPMcwLL._AC_UL640_QL65_.jpg" 
                        rating={5}/>
                </div>
            </div>
        </div>
    )
}
