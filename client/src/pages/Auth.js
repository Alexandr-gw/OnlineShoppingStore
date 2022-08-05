import React, { useContext, useState } from 'react';
import {Container, Form, Card, Button, Row} from 'react-bootstrap';
import { NavLink, useLocation,useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";
import { Context } from '../index.js';


const Auth = observer( () =>{
  const styles = {
    height: window.innerHeight-54
  };
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  
  const click= async()=>{
    try{
      let data;
      if(isLogin){
         data = await login(email,password)
      }else{
         data = await registration(email,password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      history(SHOP_ROUTE)
    }catch(e){
      alert(e.response.data.message)
    }
    
    
  }

  return(
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={styles}
   
    >
       
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin?'Authorisation':'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
                className='mt-2'
                placeholder='Enter e-mail'
                value ={email}
                onChange = {e=>setEmail(e.target.value)}
                />
                
          <Form.Control
                className='mt-2'
                placeholder='Enter password'
                value ={password}
                onChange = {e=>setPassword(e.target.value)}
                type='password'
                />

                <Row className='mt-4 d-flex justify-content-center align-self-center'>
                  <Button variant='outline-success' onClick={click}>{isLogin?'LogIn':'Registration'}</Button>
                  {isLogin?
                    <div className='mt-3 d-flex justify-content-center'>
                     Have no account?
                       <NavLink to={REGISTRATION_ROUTE}>Go to registration!</NavLink>
                    </div>
                    :
                    <div className='mt-3 d-flex justify-content-center'>
                     I have account!
                     <NavLink to={LOGIN_ROUTE}> LogIn!</NavLink>
                    </div>
                  }
                  
                </Row>
                
          
        </Form>
      </Card>   
    </Container>
  );
});

export default Auth;
