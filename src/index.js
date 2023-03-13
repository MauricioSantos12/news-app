import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IndividualNews from './components/IndividualNews/IndividualNews'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import "./assets/fonts/fonts.scss";
import { Provider } from 'react-redux'
import store from './redux/store'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/news/:id',
    element: <IndividualNews />
  }
]);

root.render(
  <Provider store={store()}>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
