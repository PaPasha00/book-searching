import './App.css';
import Header from './components/Header/Header';
import Screen from './components/Screen/Screen';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import store from './redux/redux-store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className="App">
          <Header />
          <Screen />
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
