import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/cart.css'
import { cartActions, CartActions } from '../redux/slices/cartSlices'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);


  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />

      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ?
                  (<h2 className='fs-4 text-center'>No item added to the cart</h2>) :
                  (
                    <table className='table bordered text-center'>
                      <thead>
                        <tr>
                          <td>Image</td>
                          <td>Title</td>
                          <td>Price</td>
                          <td>Qty</td>
                          <td>Delete</td>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          cartItems.map((item, index) => (
                            <Tr item={item} key={index} />
                          ))
                        }
                      </tbody>
                    </table>
                  )
              }
            </Col>
            <Col lg='3'>
              <div className='d-flex align-items-center justify-content-between'>
                <h6 className='total__title'>Subtotal:</h6>
                <span className='total__price'>${totalAmount}</span>
              </div>
              <p className='total__description'>taxes and shipping will calculate in checkout</p>
              <div>
                <button className='buy__btn text-white mb-3 w-100'>
                  <Link to='/shop'>Continue shopping</Link>
                </button>

                <button className='buy__btn text-white w-100'>
                  <Link to='/checkout'>Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {

  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td onClick={deleteItem}><i class="ri-delete-bin-line"></i></td>
    </tr>
  )
}

export default Cart