import logo from './logo.svg';
import './App.css';
import cards from './cards/cards';
import { render } from 'react-dom';
import  home from './home';
import  leader from   './leader';
import  form from   './form';


import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={home} exact />
              <Route path="/form" component={form} />
              <Route path="/leader" component={leader} />
          </Switch>
      </main>
  )
}

export default App;
