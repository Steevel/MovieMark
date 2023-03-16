import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { MovieList } from './components';

//router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route index element={<MovieList />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
