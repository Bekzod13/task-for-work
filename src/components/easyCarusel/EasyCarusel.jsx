import {useContext} from 'react'
import { Context } from '../../context/context';
import './carusel.css';
import { Link } from 'react-router-dom';

const EasyCarusel = () => {

  const caruselProducts = useContext(Context).caruselProducts;

  return (
    <div className='carusel'>
      <div className="carusel-anime">

        {
          caruselProducts.map(item => (
            <div key={item.id} className='slide' style={{background: `${item.color}`}}>
              <h3 className="slide-header">
                {item.title}
              </h3>
              <p className="slide-description">
                {item.description}
              </p>
              {
                item.btnText === '' ? <div></div> : (
                  <Link to='/' className="slide-link" style={{color: `${item.color}`}}>
                    {item.btnText}
                  </Link>
                )
              }
              <img className='slide-img' src={item.img} alt={item.title} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EasyCarusel