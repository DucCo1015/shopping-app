import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products.js'
import Helmet from '../components/Helmet/Helmet.js'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlices.js'
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [tab, setTab] = useState('desc');
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;
  const [rating, setRating] = useState(null);
  const relatedProduct = products.filter(item => item.category === category);
  const reviewsUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const submitHandel = (e) => {
    e.preventDefault();
    const reviewUserName = reviewsUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewUser = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    console.log(reviewUser);
    toast.success("review submitted");

  };

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      imgUrl,
      productName,
      price
    }));
    toast.success('product added successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Product Details">
      <CommonSection title='Product Details' />

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6' md='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-half-line"></i>
                    </span>
                  </div>
                  <p className='mt-3'>(<span>{avgRating}</span>)ratings</p>
                </div>
                <div className="d-flex-align-items-center gap-5">
                  <span className='product__price'>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>

                </div>
                <p>{shortDesc}</p>
                <button className='buy__btn text-white' onClick={addToCart}>Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items gap-5">
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}>
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>
                  Review({reviews.length})
                </h6>
              </div>

              {
                tab === 'desc' ?
                  (<div className='tab__content mt-5'>
                    <p>{description}</p>
                  </div>)
                  :
                  (<div className='product__review mt-5'>
                    <div className="review__wrapper">
                      <ul>
                        {
                          reviews?.map((item, index) => (
                            <li className='mb-4' key={index}>
                              <h6>Jhon Doe</h6>
                              <span>{item.rating}(average rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>

                      <div className="review__form">
                        <h4>Leave your experience</h4>
                        <form action="" onSubmit={submitHandel}>
                          <div className="form__group">
                            <input type="text" placeholder='Enter name' ref={reviewsUser} required/>
                          </div>
                          <div className="form__group d-flex align-items-center gap-5 rating__group">
                            <span onClick={() =>setRating(1)}>1
                              <i class="ri-star-fill"></i>
                            </span>
                            <span onClick={() =>setRating(2)}>2
                              <i class="ri-star-fill"></i>
                            </span>
                            <span onClick={() =>setRating(3)}>3
                              <i class="ri-star-fill"></i>
                            </span>
                            <span onClick={() =>setRating(4)}>4
                              <i class="ri-star-fill"></i>
                            </span>
                            <span onClick={() =>setRating(5)}>5
                              <i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <div className="form__group">
                            <textarea row={4} type="text" placeholder='Review Messenger ' ref={reviewMsg} required/>
                          </div>
                          <button type='submit' className='buy__btn text-white' >Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>)
              }
            </Col>
            <Col lg='12'>
              <h2 className='related__title mt-5'>You might also like</h2>
            </Col>

            <ProductsList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails