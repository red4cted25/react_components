import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import './css/variables.css';
import './css/tailwind.css';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilePage from './ProfileCardPage';
import FooterPage from './FooterPage';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/profile-card', element: <ProfilePage /> },
  { path: '/footer', element: <FooterPage /> }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
