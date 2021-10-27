
import ContainerForm from "./components/ContainerForm";
import Login from "./components/form/Login";
import Header from "./components/Header";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Signup from "./components/form/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/login'>
          <ContainerForm titles='LOGIN TO YOUR ACCOUNT' >
            <Login />
          </ContainerForm>
        </Route>
        <Route path='/signup'>
          <ContainerForm titles='CREATE AN ACCOUNT' subtitles='We always keep your name and email address private.' >
            <Signup />
          </ContainerForm>
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
