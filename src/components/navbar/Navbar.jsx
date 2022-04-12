import './nav.css';

// import icons
import { 
  RiArrowLeftLine, 
  RiArrowDownSLine, 
  RiSearch2Line,
  RiTimerFlashFill 
} from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import { HiAdjustments} from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-close-sidebar">
        <RiArrowLeftLine/>
      </div>
      <div className="nav-select-box">
        <div className="nav-select-view">
          <span>
            <TiLocation/>
          </span>
          <div className='nav-select-details'>
            <span>2972 Westheimer Rd. Santa Ana</span>
            <span className="nav-angle">
              <RiArrowDownSLine/>
            </span>
          </div>
        </div>
        <div className="nav-select-options">
          <div className="nav-select-option">
            2972 Westheimer Rd. Santa Ana
          </div>
          <div className="nav-select-option">
            2972 Westheimer Rd. Santa Ana
          </div>
          <div className="nav-select-option">
            2972 Westheimer Rd. Santa Ana
          </div>
          <div className="nav-select-option">
            2972 Westheimer Rd. Santa Ana
          </div>
        </div>
      </div>
      <div className="nav-search-box">
        <div className="nav-search-icon">
          <RiSearch2Line/>
        </div>
        <input type="text" className="nav-search-input" placeholder='Search products in Wallmart' />
        <div className="nav-search-list">
          <HiAdjustments/>
        </div>
      </div>
      <div className="nav-date-box">
        <div className="nav-time-line">
          <span className="nav-time-icon">
            <RiTimerFlashFill/>
          </span>
          By 09:00 - 23:00
        </div>
      </div>
      <div className="nav-cart-box">
        <div className="nav-cart-icon">
          <FiShoppingBag/>
        </div>
        <p className="nav-cart-count">
          $230.80
        </p>
      </div>
    </div>
  )
}

export default Navbar