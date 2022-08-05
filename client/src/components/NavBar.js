import React, { useContext } from 'react'
import { Context } from '../index.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, BASKET_ROUTE,SHOP_ROUTE, ADMIN_ROUTE } from '../utils/consts.js';
import {Button, Container} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../http/userAPI.js';


const NavBar = observer( () => {
    const { user } = useContext(Context);
    const history = useNavigate() 

    const logOutButton = () =>{
        logOut().then((data)=>{
            user.setUser({})
            user.setIsAuth(false)
          })
        
    }
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>OLLRI</NavLink>
        {user.isAuth? 
            <Nav className='ms-auto' style={{color:'white'}}>
                <Button 
                    variant='outline-light' 
                    onClick={()=>history(ADMIN_ROUTE)} 
                    >AdminControlUnit</Button>
                <Button 
                    variant='outline-light' 
                    className='ms-3' 
                    onClick={()=>logOutButton()}
                    >SignOut</Button>
            </Nav>
            :
            <Nav className='ms-auto' style={{color:'white'}}>
                <Button variant='outline-light' onClick={()=>history(LOGIN_ROUTE)}>LogIn/SignIn</Button>
            </Nav>
        }</Container>            
        </Navbar>
    );
})
//<Button variant='outline-light' onClick = {()=>history(BASKET_ROUTE)}>Busket</Button>
export default NavBar;