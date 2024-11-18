import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/main/MainPage';
import NotFound from './pages/error/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
