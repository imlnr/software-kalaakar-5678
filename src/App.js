import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Allroutes/MainRoute';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {/* <Home /> */}
          <MainRoute/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
