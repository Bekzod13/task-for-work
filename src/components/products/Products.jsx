import { useContext } from "react";
import { Context } from './../../context/context';
import './products.css';
import { useCart } from 'react-use-cart';

// import icons
import {HiPlus} from 'react-icons/hi';
import {RiPercentFill, RiHeart3Line, RiHeart3Fill} from 'react-icons/ri';

const Products = () => {

    const products = useContext(Context).data.products;

    const {addItem} = useCart();

  return (
    <>
        <h2 className="products-header">Fresh Fruit</h2>  
        <div className="products">
            {
                products.map(item=>(
                    <div className="product" key={item.id}>
                        <div className="pro-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <p className="pro-name">
                            {item.title}
                        </p>
                        <div className="pro-price-buy">
                            <div className="pro-price">
                                ${item.price}
                            </div>
                            <div className="pro-buy"  onClick={() => addItem(item)} >
                                <HiPlus/>
                            </div>
                        </div>
                        <div className="pro-actions">
                            <div className="pro-discount">
                                <RiPercentFill/>
                            </div>
                            <div className="pro-like">
                                {
                                    item.liked ? <RiHeart3Fill/>:
                                    <RiHeart3Line/>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div> 
    </>
  )
}

export default Products