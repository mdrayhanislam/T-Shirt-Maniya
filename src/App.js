import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Order from './Component/Order/Order';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        path: "/",
        loader: () => fetch('tshirts.json'),
        element: < Home></Home>,
      },
      {
        path: "/about",
        element: < About></About>,
      },
      {
        path: "/order",
        element: < Order></Order>,
      },
    ],
  },
]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
