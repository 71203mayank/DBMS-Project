import './App.css';
import BookTrain from './Pages/BookTrain/BookTrain';
import Home from './Pages/Home/Home';
import SearchTrain from './Pages/SearchTrain/SearchTrain';
import UserPage from './Pages/UserPage/UserPage';

import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPage/>}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home/>}/>
            <Route path='search' element={<SearchTrain/>}/>
            <Route path='book' element={<BookTrain/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
