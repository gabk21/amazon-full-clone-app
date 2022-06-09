import { SearchOutlined, ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue();

  return (

    <div className='header'>
      <Link to='/'>
        <img className='header-logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='amazon-logo'/>
      </Link>

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

            <Link to='/checkout'>
              <div className='header-option-basket'>
                <ShoppingBasket />
                <span className='header-option-line-2 header-basket-count'>
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
    </div>
  )
}

export default Header