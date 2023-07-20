import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/booking', element: <Booking /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
