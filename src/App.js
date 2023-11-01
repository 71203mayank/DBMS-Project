import './App.css';
// import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SearchTrain from './Components/SearchTrain/SearchTrain';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Footer/> */}
      <SearchTrain/>
    </div>
  );
}

export default App;
