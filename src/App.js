import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Allroutes/MainRoute';
import Login from './pages/Login';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Navbar/>
          {/* <Home /> */}
          <MainRoute/>
          {/* <Login/> */}
          <Footer/>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
