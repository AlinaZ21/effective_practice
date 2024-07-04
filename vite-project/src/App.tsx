import * as React from "react";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Characters } from "./pages/characters";
import { Comics } from "./pages/comics";
import { Home } from "./pages/home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/comics',
    element: <Comics/>,
  },
  {
    path: '/characters',
    element: <Characters/>,
  }
]);

function App() {

  return (
  <> 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

   </>
  )
}

export default App;
