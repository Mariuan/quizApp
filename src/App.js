import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;