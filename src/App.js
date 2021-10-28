import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
