import React from 'react';
const routes = [
    {
      path: '/',
      element:React.lazy(() => import('../page/LargeScreen1')),
    },
    {
      path: '/LargeScreen2',
      element:React.lazy(() => import('../page/LargeScreen2')), 
    }
]
export default routes
