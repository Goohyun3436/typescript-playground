import styled from "styled-components";

const Main = () => {
  // optioner
  type Name = string;
  type Age = number;
  type Player = { name: Name; age?: Age };

  const playerMaker = (name: string): Player => ({ name });

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
