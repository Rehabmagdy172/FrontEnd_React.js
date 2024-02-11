import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Authors from './components/Authors/Authors';
import Categories from './components/Categories/Categories';
import Book from './components/Books/Book';
import BookAdd from './components/Books/BookAdd';
import DisplayImage from './components/Books/UploadImage';
import DetailsCopies from './components/Books/DetailsCopies';


function App() {
  return (
    <div className="App">
      {/* <DisplayImage/> */}
      {/* <Dashboard/> */}
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='authors' element={<Authors/>} />
        <Route path='categories' element={<Categories/>} />
        <Route path='book' element={<Book/>} />
        <Route path='bookadd' element={<BookAdd/>} />
        <Route path='detailscopies' element={<DetailsCopies/>} />
      </Routes>
    </div>
  );
}

export default App;
