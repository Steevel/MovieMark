import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { MovieList, MovieDetails, Error } from './components';

//router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route index element={<MovieList />} errorElement={<Error />} />
      <Route path="/movie/:id" element={<MovieDetails />} errorElement={<Error />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
