import { BrowserRouter, Route } from 'react-router-dom';
import GlobalUserSearch from './pages/GlobalUserSearch';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ GlobalUserSearch } />
    </BrowserRouter>
  );
}

export default App;
