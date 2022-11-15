import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/page404'>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
