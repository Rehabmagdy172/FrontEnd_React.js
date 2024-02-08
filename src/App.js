import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Authors from './components/Authors/Authors';
import Categories from './components/Categories/Categories';


function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='authors' element={<Authors/>} />
        <Route path='categories' element={<Categories/>} />
      </Routes>
    </div>
  );
}

export default App;
