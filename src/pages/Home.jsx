// import components
import Categories from '../components/categories/Categories';
import EasyCarusel from '../components/easyCarusel/EasyCarusel';
import Products from '../components/products/Products';
import Hero from '../components/hero/Hero';
import Cart from '../components/cart/Cart';
import CalendarMe from '../components/calendar/CalendarMe';

const Home = () => {
  return (
    <>
      <Hero />
      <EasyCarusel/>
      <Categories/>
      <Products/>
      <Cart/>
      <CalendarMe/>
    </>
  )
}

export default Home