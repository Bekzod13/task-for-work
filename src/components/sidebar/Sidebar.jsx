import './side.css';
import { Link } from 'react-router-dom';

// import icons
import {
  BsList, 
  BsBellFill, 
  BsPlusCircleFill
} from 'react-icons/bs';
import {
  RiSettings3Fill, 
  RiSendPlaneFill, 
  RiStore2Fill, 
  RiFileList2Line, 
  RiBookmark3Fill, 
  RiHeart3Line,
  RiEyeLine,
  RiWallet3Line,
  RiUser6Line,
  RiArrowRightSLine,
  RiLogoutCircleRLine
} from 'react-icons/ri';
import {
  MdOutlineHeadsetMic
} from 'react-icons/md';

// import images
import userImg from '../../images/user.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="side-header">
        <div className="side-bar-icon">
          <BsList/>
        </div>
        <p>GMarket</p>
      </div>
      <div className="side-main">
        <div className="side-user-details">
          <div className="side-user-top">
            <span>
              <RiSettings3Fill/>
            </span>
            <div className="side-user-img">
              <img src={userImg} alt="" />
            </div>
            <span>
              <BsBellFill/>
            </span>
          </div>
          <div className="side-user-name">
            <p>Roberto Cavanali</p>
            <p className="side-user-number">
            (+99893) 100-00-00
            </p>
          </div>
          <div className="side-user-wallet">
            <div className="side-user-wallet-title">
              <p>Wallet balance</p>
              <div className='side-wallet-balance'>$425,97</div>
            </div>
            <div className='side-user-wallet-icon'>
              <BsPlusCircleFill/>
            </div>
          </div>
          <div className="side-user-send-btn">
            <span>
              <RiSendPlaneFill/>
            </span>
            Share wallet
          </div>
        </div>
        <div className="side-links">
          <div className="side-links-top">
            <Link to='/' className="side-link side-link-active">
              <div className="side-link-icon">
                <RiStore2Fill/>
              </div>
              <div className="side-link-text">
                Stores
              </div>
            </Link>
            <Link to='/' className="side-link">
              <div className="side-link-icon">
                <RiFileList2Line/>
              </div>
              <div className="side-link-text">
                Order History
              </div>
            </Link>
            <Link to='/' className="side-link">
              <div className="side-link-icon">
                <RiBookmark3Fill/>
              </div>
              <div className="side-link-text">
                Saved stores
              </div>
            </Link>
            <Link to='/' className="side-link">
              <div className="side-link-icon">
                <RiHeart3Line/>
              </div>
              <div className="side-link-text">
              Liked products
              </div>
            </Link>
            <Link to='/' className="side-link">
              <div className="side-link-icon">
                <RiEyeLine/>
              </div>
              <div className="side-link-text">
                Viwed Products
              </div>
            </Link>
            <Link to='/' className="side-link">
              <div className="side-link-icon">
                <RiWallet3Line/>
              </div>
              <div className="side-link-text">
                Stores
              </div>
            </Link>
            <Link to='/' className="side-link">
              <div className="side-link-icon">
                <RiUser6Line/>
              </div>
              <div className="side-link-text">
                Profil setting
              </div>
            </Link>
          </div>
        </div>
        <div className="side-links-bottom">
        <Link to='/' className='side-link-bottom'>
              <div className="side-link-bottom-icon">
                <MdOutlineHeadsetMic/>
              </div>
              <div className="side-link-bottom-text">
                <span>Help center</span>
                <span><RiArrowRightSLine/></span>
              </div>
          </Link>
          <Link to='/' className='side-link-bottom'>
              <div className="side-link-bottom-icon">
                <RiLogoutCircleRLine/>
              </div>
              <div className="side-link-bottom-text">
                <span>Logout</span>
                <span><RiArrowRightSLine/></span>
              </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
