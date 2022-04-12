import { Link } from 'react-router-dom';
import './hero.css'

// import images
import hero from '../../images/hero.png';

// import icons
import { 
    RiInformationLine, 
    RiTruckLine, 
    RiBookmark3Line,
    RiStore2Fill,
    RiRestaurantFill
} from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-main">
            <div className="hero-img">
                <img src={hero} alt="hero img" />
            </div>
            <div className="hero-details">
                <h3 className="hero-title">
                    Wallmart store
                </h3>

                <Link to='/' className='hero-link' >
                    <span className="hero-link-icon">
                        <RiInformationLine/>
                    </span>
                    <span className="hero-link-text">
                        Store info
                    </span>
                </Link>

                <Link to='/' className='hero-link' >
                    <span className="hero-link-icon">
                        <RiTruckLine/>
                    </span>
                    <span className="hero-link-text">
                        Store delivery time
                    </span>
                </Link>

                <Link to='/' className='hero-link' >
                    <span className="hero-link-icon">
                        <RiBookmark3Line/>
                    </span>
                    <span className="hero-link-text">
                        Saved
                    </span>
                </Link>
                <div className="hero-reting-star">
                    <span className="hero-star">
                        <TiStarFullOutline/>
                    </span>
                    4.5
                </div>
            </div>
        </div>
        <div className="hero-cart">
            <div className="hero-shop hero-shop-active">
                <div className="hero-shop-icon">
                    <RiStore2Fill/>
                </div>
                <p>Shop</p>
            </div>
            <div className="hero-shop">
                <div className="hero-shop-icon">
                    <RiRestaurantFill/>
                </div>
                <p>Recipes</p>
            </div>
        </div>
    </div>
  )
}

export default Hero