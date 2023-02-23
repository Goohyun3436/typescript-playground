import styled from "styled-components";

const Main = () => {
  //function
  function add(a: number, b: number): number {
    return a + b;
  }

  // alow func
  const alowAdd = (a: number, b: number): number => a + b;

  // call signature of func
  type Add = (a: number, b: number) => number;
  const addCS: Add = (a, b) => a + b;

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
