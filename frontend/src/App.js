import { Routes, Route } from "react-router-dom";
import { Auth, Members } from "./components";
import RequiredAuth from "./routes/RequiredAuth";

import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;

`;

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Members />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Auth />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
