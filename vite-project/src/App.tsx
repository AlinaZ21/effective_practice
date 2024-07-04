import * as React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Characters } from "./pages/characters";
import { Comics } from "./pages/comics";
import { CharacterDetails } from "./pages/character-details";
import { ComicsDetails } from "./pages/comics-details";
import { Home } from "./pages/home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/comics',
    element: <Comics/>
  },
  {
    path: '/characters',
    element: <Characters/>
  },
  {
    path: '/characters/:id',
    element: <CharacterDetails/>
  },
  {
    path: '/comics/:id',
    element: <ComicsDetails/>
  }
]);

function App() {

  return (
      <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>
  )
}

export default App;
