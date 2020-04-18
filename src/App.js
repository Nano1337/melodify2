import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";


function App() {
  return (
      <BrowserRouter basename="/">
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            {/*<Route path="/MusicGenerator" component={MusicGenerator}/>*/}
            <Route path="/Research" component={Research} exact />
            {/*<Route path="/AboutUs" component={AboutUs} exact />*/}
            {/*<Route component={Error}/>*/}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
