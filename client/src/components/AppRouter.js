import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from '../utils/consts.js';
import Context from '../index.js'

const AppRouter = () =>{
  const {user}=useContext(Context);

  console.log(user)
  return(
    <Routes>
     { ifAuth && authRoutes.map(({path,Element}) =>
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
