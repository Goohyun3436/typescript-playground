import styled from "styled-components";

const Main = () => {
  // Generics Recap : generic type 여러개 넘기기
  type SuperPrint = <T, M>(a: T[], b: M) => T;

  const superPrint: SuperPrint = (arr) => arr[0];

  const d = superPrint([1, 2, false], "");
  // const superPrint: <number | boolean, string>(a: (number | boolean)[], b: string) => number | boolean

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
