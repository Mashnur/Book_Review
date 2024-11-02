import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErorPage from './components/ErorPage/ErorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import BookDetails from './components/BookDetails/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErorPage></ErorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/Listed",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/book/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch(`.//list.json`)
        
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
