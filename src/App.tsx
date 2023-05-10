import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Config from './pages/Config';
import Sweepstake from './pages/Sweepstake';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Config />} />
          <Route path='/sorteio' element={<Sweepstake />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
