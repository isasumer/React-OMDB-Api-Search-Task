import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 521px;
  height: 80px;
`;
const H1 = styled.h1`
  height: 48px;
  font-weight: 500;
  font-size: 32px;
`;

const P = styled.p``;
const Header = () => {
  return (
    <Wrapper>
      <H1>OMDb API</H1>
      <P> The Open Movie Database 🍿</P>
    </Wrapper>
  );
};

export default Header;
