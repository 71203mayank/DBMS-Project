import './App.css';
import BookTrain from './Pages/BookTrain/BookTrain';
import Home from './Pages/Home/Home';
import SearchTrain from './Pages/SearchTrain/SearchTrain';
import History from './Pages/History/History';
import UserPage from './Pages/UserPage/UserPage';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import AdminPage from './Pages/AdminPage/AdminPage';
// import UserCard from './Components/UserCard/UserCard';
import UserList from './Pages/UserList/UserList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='user' element={<UserPage/>}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home/>}/>
            <Route path='search' element={<SearchTrain/>}/>
            <Route path='history' element={<History/>} />
            <Route path='book' render ={(props)=><BookTrain {...props}/>} element={<BookTrain/>}/>
          </Route>
          <Route path='admin' element={<AdminPage/>}>
            <Route index element={<UserList/>}/>
            <Route path='users' element={<UserList/>}/>
            <Route path='history' element={<History/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
