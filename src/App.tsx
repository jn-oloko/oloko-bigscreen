import React, { Suspense } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiProvider from './components/ApiProvider';
const App: React.FC<{}> = function App() {
  return (
    <ApiProvider>
      <BrowserRouter basename='/oloko-bigscreen'>
        <Routes>
          {routes.map((item, i) => {
            return (<Route key={i} path={item.path} element={
              <Suspense fallback={<div>
                路由加载中...
              </div>}>
                <item.element></item.element>
              </Suspense>
            }>
            </Route>)
          })}
        </Routes>
      </BrowserRouter>
    </ApiProvider>

  );
}

export default App;
