import React from 'react'
import { Route, Routes } from 'react-router'
import { routes } from '../router/routes'
const AppRouter = () => {
      return (
            <Routes>{
                  routes.map((route) =>
                        <Route element={route.component} path={route.path} exact={route.exact} key={route.path} />
                  )}
            </Routes>
      )
}

export default AppRouter