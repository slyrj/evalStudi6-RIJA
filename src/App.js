import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Prestation from './pages/Prestation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Mention from './pages/Mention';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/galerie" component={Galerie} />
          <Route path="/prestations" component={Prestation} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentions-legales" component={Mention} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
