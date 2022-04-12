// import components
import Categories from '../components/categories/Categories';
import EasyCarusel from '../components/easyCarusel/EasyCarusel';
import Products from '../components/products/Products';
import Hero from './../components/hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <EasyCarusel/>
      <Categories/>
      <Products/>
    </>
  )
}

export default Home