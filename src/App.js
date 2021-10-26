
import ContainerForm from "./components/ContainerForm";
import Login from "./components/form/Login";
import Header from "./components/Header";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

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
      </Switch>
    </BrowserRouter >
  );
}

export default App;
