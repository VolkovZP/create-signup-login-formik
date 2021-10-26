import ContainerForm from "./components/ContainerForm";
import Login from "./components/form/Login";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <ContainerForm titles='LOGIN TO YOUR ACCOUNT' >
        <Login />
      </ContainerForm>
    </>
  );
}

export default App;
