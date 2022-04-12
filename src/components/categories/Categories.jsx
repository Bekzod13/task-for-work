import {useContext} from 'react';
import { Context } from '../../context/context';
import './cate.css';

// import icons
import { HiAdjustments} from 'react-icons/hi';
import {RiArrowDownSLine} from 'react-icons/ri';

const Categories = () => {

    const categories = useContext(Context).data.categories;

  return (
    <div className='categories'>
        <div className="category category-icon">
            <HiAdjustments/>
        </div>
        {
            categories.map(item=>(
                <div className={item.active ? "category category-active" : "category" }>
                    {item.text}
                </div>
            ))
        }
        <div className="category category-more">
            More <span>
                <RiArrowDownSLine/>
            </span>
        </div>
    </div>
  )
}

export default Categories