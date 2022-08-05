import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import GlobalUserSearch from './pages/GlobalUserSearch';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ GlobalUserSearch } />
      <Route path="/:id" component={ User } />
    </BrowserRouter>
  );
}

export default App;
