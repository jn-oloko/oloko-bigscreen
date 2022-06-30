import React, { Suspense } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiProvider from './components/ApiProvider';
import moment from "moment"
const App: React.FC<{}> = function App() {
  moment.updateLocale("zh-cn",{
    weekdays : [
      "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"
  ],
    meridiem : function (hour, minute, isLowercase) {
      if (hour < 9) {
          return "早上";
      } else if (hour < 11 && minute < 30) {
          return "上午";
      } else if (hour < 13 && minute < 30) {
          return "中午";
      } else if (hour < 18) {
          return "下午";
      } else {
          return "晚上";
      }
  }
  })
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
