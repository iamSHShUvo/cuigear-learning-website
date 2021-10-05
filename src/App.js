
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

          {/* Home Route */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>

          {/* About Route */}
          <Route path="/about">
            <About></About>
          </Route>

          {/* Services Route */}
           <Route path="/services">
            <Services></Services>
          </Route>
          {/* Contact Route */}
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          {/* 404 Route */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
     
      {/* <Home></Home> */}
    </div>
  );
}

export default App;

