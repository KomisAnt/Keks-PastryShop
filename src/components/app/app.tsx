import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../../pages/index-page/index-page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
