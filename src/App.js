
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import './App.css';

import MainPage from './MainPage/MainPage';
import LoadingPage from './LoadingPage/LoadingPage';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path='/' element={<LoadingPage />} />
          
          <Route path='/main' element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </Provider>
  );
}


export default App;
