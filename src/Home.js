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
           id='1'
           title='The lean startup'
           price={29.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={5} />

           <Product
           id='2'
           title='The lean startup'
           price={239.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />

           <Product
           id='3'
           title='The lean startup'
           price={209.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />
         </div>

         <div className="home-row">
           <Product
           id='4'
           title='The lean startup'
           price={29.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={5} />

           <Product
           id='5'
           title='The lean startup'
           price={239.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />

           <Product
           id='6'
           title='The lean startup'
           price={129.99}
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
           rating={4} />
         </div>

      </div>
    </div>
  )
}

export default Home