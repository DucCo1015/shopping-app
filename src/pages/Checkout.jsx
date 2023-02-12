import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout Us" />

      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="number" placeholder='Phone number' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Stress Address' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='City' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Postal Code' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Country' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQuantity} items</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>
                  <span>Shipping <br />Free shipping</span>
                  <span>$0</span>
                </h6>
                <h4>Total Cost : <span>${totalAmount}</span></h4>
                <button className='auth__btn mt-3 w-100'>Place and order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout