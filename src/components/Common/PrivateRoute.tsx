import * as React from 'react';
// import {Navigate, RouteProps, Route} from 'react-router-dom'

// export interface PrivateRouteProps {}

// export function PrivateRoute(props: RouteProps) {
//     const isLoggedIn = Boolean(localStorage.getItem('access_token'));
//     if(!isLoggedIn) {
//         return <Navigate to="/login"/>
//     }
//     return <Route {...props}/>
// }

import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
