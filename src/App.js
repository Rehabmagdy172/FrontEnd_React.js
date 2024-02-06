import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
