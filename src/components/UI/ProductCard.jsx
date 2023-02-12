import React from 'react'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlices'
import { toast } from 'react-toastify';

const ProductCard = ({item}) => {

  const dispatch = useDispatch();
  
  const addCart = () =>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));
    toast.success('product added successfully');
  }
  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className="product__item">
        <div className="product__img">
          <img src={item.imgUrl} alt="" />
        </div>
        <div className="p-3 product__info"> 
          <h3 className="product__name">
            <Link to = {`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
        </div>
        <span className='text-center d-block'>{item.category}</span>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <span><i class="ri-add-line" onClick={addCart}></i></span>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard