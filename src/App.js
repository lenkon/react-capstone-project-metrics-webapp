import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ShowCategories from './routes/ShowCategories/ShowCategories';
import NavBar from './components/Navbar/NavBar';
import ShowDetails from './routes/ShowDetails/ShowDetails';
import Home from './routes/Home/Home';
import { getCategory } from './redux/show/categories';
import { getAllCategories } from './redux/show/allCategory';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  dispatch(getCategory());
  dispatch(getAllCategories());

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailPage/:categoryId" element={<ShowCategories />} />
          <Route path="/tv/:showId" element={<ShowDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
