import React from 'react';
const routes = [
    {
      path: '/1',
      element:React.lazy(() => import('../page/LargeScreen1')),
    },
    {
      path: '/2',
      element:React.lazy(() => import('../page/LargeScreen2')), 
    },
    {
      path: '/',
      element:React.lazy(() => import('../page/LargeScreen3')), 
    }
]
export default routes
