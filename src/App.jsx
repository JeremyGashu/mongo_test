import EmployeePage from "./pages/EmployeePage";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import UserContextProvider from "./context/UserContextProvider";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <UserContextProvider>
      <Wrapper>
        <HomePage />
        <EmployeePage />
      </Wrapper>
    </UserContextProvider>
  );
}

export default App;
