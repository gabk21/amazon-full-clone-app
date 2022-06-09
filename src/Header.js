import { SearchOutlined, ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import './Header.css';

function Header() {

  return (

    <div className='header'>
      <img className='header-logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo'/>

          <div className='header-search'>
            <input className='header-search-input'
              type='text'/>
            <SearchOutlined className='search-icon'/>

          </div>
          <div className='header-nav'>
            <div className="header-option">
              <span className='header-option-line-1'>Hello Guest</span>
              <span className='header-option-line-2'>Sign In</span>
            </div>
            <div className="header-option">
              <span className='header-option-line-1'>Returns</span>
              <span className='header-option-line-2'>& Orders</span>
            </div>
            <div className="header-option">
              <span className='header-option-line-1'>Your</span>
              <span className='header-option-line-2'>Prime</span>
            </div>
            <div className="header-option">
              <span className='header-option-line-1'>Hello Guest</span>
              <span className='header-option-line-2'>Sign In</span>
            </div>

            <div className='header-option-basket'>
              <ShoppingBasket />
              <span className='header-option-line-2 header-basket-count'>
                0
              </span>

            </div>
          </div>
    </div>
  )
}

export default Header