import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link } from 'react-router-dom'
import { Container,Row, Col, Form, FormGroup } from 'reactstrap'
import '../styles/login.css'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    }
    console.log(loginUser);
  }
  return (
    <Helmet title="Login">
      <CommonSection  title= 'Login Us' />

      <section>
        <Container>
          <Row>
            <Col lg = '8' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>

              <Form  className='auth__form'>
                <FormGroup className='form__group'>
                   <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required/>
                </FormGroup>
                <FormGroup className='form__group'>
                   <input type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)} required />
                </FormGroup>
                <button type = 'submit' className='auth__btn mt-5' onClick={handleSubmit }>Login</button>
                <p>Don't have an account ? <Link to='/signup'>Create an account</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login