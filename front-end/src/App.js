import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
