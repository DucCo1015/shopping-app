import React,{useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet.js'
import CommonSection from '../components/UI/CommonSection'
import '../styles/shop.css'
import products from '../assets/data/products.js'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  const handelItem = (e) =>{
     const searchItem = e.target.value;

     const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchItem.toLowerCase()));
     
     setProductsData(searchedProducts);
  }

  const handelFilter = (e) =>{
    const filterValue = e.target.value;

    if(filterValue === 'sofa'){
      const filterProducts = products.filter ((item) => item.category === 'sofa')

      setProductsData(filterProducts);
    };

    if(filterValue === 'mobile'){
      const filterProducts = products.filter ((item) => item.category === 'mobile')

      setProductsData(filterProducts);
    };

    if(filterValue === 'chair'){
      const filterProducts = products.filter ((item) => item.category === 'chair')

      setProductsData(filterProducts);
    };

    if(filterValue === 'watch'){
      const filterProducts = products.filter ((item) => item.category === 'watch')

      setProductsData(filterProducts);
    };

    if(filterValue === 'wireless'){
      const filterProducts = products.filter ((item) => item.category === 'wireless')

      setProductsData(filterProducts);
    };

  }
  return (
   <Helmet title="Shop">
     <CommonSection title="Shop Us"/>

     <section>
      <Container>
        <Row>
          <Col lg = '3' md = '6'>
            <div className="filter__widget">
              <select onChange ={handelFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless </option>
              </select>
            </div>
          </Col>
          <Col lg = '3' md = '6' className='text-end'>
          <div className="filter__widget">
              <select>
                <option>Filter By Category</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg = '6' md = '12'>
            <div className="search__box">
              <input type="text" placeholder='Search....' onChange = {handelItem} />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
     </section>

     <section>
      <Container>
        <Row>
           {
              productsData.length === 0 ?(
                <h1 className='text-center'>No products are found!</h1>
              ) : (<ProductsList data = {productsData} />)
           }
        </Row>
      </Container>
     </section>
   </Helmet>
  )
}

export default Shop