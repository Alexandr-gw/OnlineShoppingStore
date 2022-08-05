import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '../index.js';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from '../utils/consts.js';


const AppRouter = () =>{
  const {user} = useContext(Context)

  return(
    <Routes>
     { user.isAuth && authRoutes.map(({path,Element}) =>
        <Route key = {path} path={path} element = {<Element/>} exac />
      )}
   {publicRoutes.map(({path,Element}) =>
      <Route key = {path} path={path} element = {<Element/>} exact />
    )}
  <Route path="*" element={<Navigate to={SHOP_ROUTE} replace/>} />
    </Routes>
  );
};

export default AppRouter;
