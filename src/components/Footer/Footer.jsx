import React from 'react'
import '../../styles/footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'md ='6' className ='mb-4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>Shopping New</h1>
              </div>
            </div>
            <p className='footer__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat repudiandae at molestiae ut vel deleniti. Cupiditate cumque explicabo eaque.</p>
          </Col>
          <Col lg='3' md = '3' className ='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Category</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='#'>Mobile Phone</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='#'>Model Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='#'>Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>
          <Col lg='2' md ='3' className ='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links </h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='/contact'>Contact</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to ='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg = '3' md ='4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123 duong ABC, Binh Duong, Viet Nam</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+84 123456789</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>webcode123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg = '12'>
            <p className='footer__copyright'>Copyright  @ {years} developed by code. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer