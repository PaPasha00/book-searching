import './App.css';
import Header from './components/Header/Header';
import Screen from './components/Screen/Screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import store from './redux/redux-store';
import OneBook from './components/OneBookPage/OneBookPage';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Screen />} />
            <Route path='/OneBook/*' element={<OneBook />} />

          </Routes>
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
