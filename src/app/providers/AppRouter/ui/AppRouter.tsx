import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../../../../shared/routeConfig/routeConfig'
import { PageLoader } from '../../../../widgets/PageLoader'

const AppRouter = () => {
  return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig)
                  .map(route =>

                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                            <div className="page-wrapper">
                                {route.element}
                            </div>

                        }>
                        </Route>)
                }
            </Routes>
        </Suspense>
  )
}

export default AppRouter
