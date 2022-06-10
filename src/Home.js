import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home-container">
        <img className='home-image'
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

         <div className="home-row">
           <Product
           id='123123123'
           title='The lean startup'
           price={29.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={5} />

           <Product
           id='223123123123'
           title='The lean startdown'
           price={239.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />

           <Product
           id='3123123123'
           title='The lean side'
           price={209.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />
         </div>

         <div className="home-row">
           <Product
           id='49182391'
           title='The lean upworl'
           price={29.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={5} />

           <Product
           id='912637'
           title='just a title'
           price={239.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />

           <Product
           id='871253128'
           title='The'
           price={129.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />
         </div>

      </div>
    </div>
  )
}

export default Home