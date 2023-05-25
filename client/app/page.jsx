import Product from '@components/product';
import '@styles/globals.css';
import '@styles/home_page.css';

const Home = () => {
  return (
    <section className='main-page-section'>
      <div className='title-bar'>
        <span className='title-bar-text'>
          Bestsellers
        </span>
      </div>
      <div className='product-section'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </section>
  )

}

export default Home