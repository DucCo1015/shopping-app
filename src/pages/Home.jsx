import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Services from '../services/Services.jsx'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products.js'
import countImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock.jsx'

const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProduct, setTrendingProduct] = useState([]);
  const [saleProduct, setSaleProduct] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProduct = products.filter((item) => item.category === 'chair');
    const filteredSaleProduct = products.filter((item) => item.category === 'sofa');
    const filteredMobileProduct = products.filter((item) => item.category === 'mobile');
    const filteredWirelessProduct = products.filter((item) => item.category === 'wireless');
    const filteredPopularProduct = products.filter((item) => item.category === 'watch');
    setTrendingProduct(filteredTrendingProduct);
    setSaleProduct(filteredSaleProduct);
    setMobileProducts(filteredMobileProduct);
    setWirelessProducts(filteredWirelessProduct);
    setPopularProducts(filteredPopularProduct);

  }, [])


  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make your interior more Minimalistic & Model</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eos ipsa? Dignissimos facilis iure error rem repellendus, harum voluptates necessitatibus molestiae repellat est, consequuntur quisquam</p>

                <button className='buy__btn'>
                  <Link to='shop'>Shop Now</Link>
                </button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__product">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">
                Trending Products
              </h2>
            </Col>
            <ProductsList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className='best__sale'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">
                Best Sale
              </h2>
            </Col>
            <ProductsList data={saleProduct} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>

              <Clock />

              <button className='store__btn'>
                <Link to='/shop'>Visit Store</Link>
              </button>
            </Col>

            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={countImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">
                New Arrivals
              </h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section__title text-center mb-5">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home