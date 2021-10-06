import Header from "./components/Header";
import Search from "./components/Search";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background: #e0e0e0;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};

export default App;
