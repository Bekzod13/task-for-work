import './cart.css';
import { useCart } from 'react-use-cart';
import { Context } from '../../context/context';
import { useContext } from 'react';

// import icons
import {FaTrash} from 'react-icons/fa';
import {IoTrashBinSharp} from 'react-icons/io5';
import {RiCloseFill} from 'react-icons/ri';

const Cart = () => {

    const {
        items,
        cartTotal,
        removeItem,
        emptyCart
      } = useCart();

      const toggle = useContext(Context);

  return (
      <>
    <div className={toggle.toggle ? "bg-div bg-div-active" : "bg-div"} onClick={()=>toggle.setToggle(false)} ></div>
    <div className={toggle.toggle ? "cart-main cart-main-active" : "cart-main"}>
      <h1 className='cart-header'>Cart Items</h1>
      <h2 className='cart-total'>${cartTotal}</h2>
      <div className="cart-products">
          {
              items.length === 0 ? <h2 className='cart-header'>
                  Your cart is empty.
              </h2>:
              items.map(item=>(
                  <div className="cart-product" key={item.id}>
                      <div>
                        <div className="cart-pro-title">
                            {item.title}
                        </div>
                        <div className="cart-pro-price">
                            {item.price} x {item.quantity}
                        </div>
                      </div>
                      <div className="cart-pro-delete" onClick={() => removeItem(item.id)}>
                          <FaTrash/>
                      </div>
                  </div>
              ))
          }
      </div>
      <div className="cart-clear" onClick={() => emptyCart()}>
          <IoTrashBinSharp/> Clear
      </div>
      <div className="cart-close" onClick={()=>toggle.setToggle(false)}>
        <RiCloseFill/>
      </div>
    </div>
      </>
  )
}

export default Cart
