import Admin from './pages/Admin.js';
import Basket from './pages/Basket.js';
import Auth from './pages/Auth.js';
import DevicePage from './pages/DevicePage.js';
import Shop from './pages/Shop.js';
import {ADMIN_ROUTE, BASKET_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,DEVICE_ROUTE,SHOP_ROUTE} from './utils/consts';


export const authRoutes= [
  {
    path:ADMIN_ROUTE,
    Element:Admin
  },
  {
    path:BASKET_ROUTE,
    Element:Basket
  }
]

export const publicRoutes=[
  {
    path:LOGIN_ROUTE,
    Element:Auth
  },
  {
    path:REGISTRATION_ROUTE,
    Element:Auth
  },
  {
    path:DEVICE_ROUTE + '/:id',
    Element:DevicePage
  },
  {
    path:SHOP_ROUTE,
    Element:Shop
  }
]
