import styled from "styled-components";
import { AppRoutes } from "./routes";
import { MovieContextProvider } from "./store/MovieContext";
import { Reset } from "styled-reset";

const App = () => {
  return (
    <Wrapper>
      <MovieContextProvider>
        <Reset />
        <AppRoutes />
      </MovieContextProvider>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: #2f2e41;
  font-family: "Open Sans", sans-serif;
  padding: 0% 14%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 0;
  }
`;
