import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Single from './Components/Single/Single';
import OurClasses from './Components/OurClasses/OurClasses';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/classes'>
            <OurClasses></OurClasses>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
