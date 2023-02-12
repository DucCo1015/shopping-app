import React,{useRef, useEffect} from 'react'
import '../../styles/header.css'
import {Container, Row} from 'reactstrap'
import Logo from '../../assets/images/eco-logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'

const Header = () => {

  const nav__Links = [
    {
      path : 'home',
      display:'Home'
    },
    {
      path : 'shop',
      display:'Shop'
    },
    {
      path : 'cart',
      display:'Cart'
    },
  ];

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const navigateToCart = () =>{
     navigate('/cart');
  }

  const menuToggle = () =>{
   menuRef.current.classList.toggle('menu__active')
  }

  const stickyHeader = () =>{
    window.addEventListener("scroll", () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header');
      }
      else{
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }
  useEffect (() =>{
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
      <Row>
        {/*=========================== */}

        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={Logo} alt=""/>
            <h1 className="nav__wrapper-title">
              Shopping New
            </h1>
          </div>

         {/*=========================== */} 

          <div className="navigation" ref={menuRef} onClick={menuToggle }>
            <ul className="menu">
             {
              nav__Links.map((item, index) =>(
                <li className="nav__item" key = {index}>
                  <NavLink to = {item.path} className= {(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                </li>
              ))
             }
            </ul>
          </div>

           {/*=========================== */}

          <div className="nav__icons">
            <span className="fav__icon">
              <i class="ri-heart-line"></i>
              <p className="badge">1</p>
            </span>
            <span className='fav__icon' onClick={navigateToCart}>
              <i class="ri-shopping-cart-line"></i>
              <span className="badge">{totalQuantity}</span>
            </span>
            <img src={userIcon} alt="" />
            <div className='login__signup'>
              <h6><Link to = '/login'>Login</Link></h6>
              <h6><Link to = '/signup'>Sign Up</Link></h6>
            </div>
          </div>

           {/*=========================== */}

          <div className="mobile__menu" onClick={menuToggle}>
           <span> <i class="ri-menu-line"></i></span>
          </div>

        </div>
      </Row>
    </Container>
    </header>
  )
}

export default Header