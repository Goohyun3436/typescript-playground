import styled from "styled-components";

const Main = () => {
  ["nico", 12, false];

  // type 으로 표현
  const player: [string, number, boolean] = ["nico", 1, true];

  player[0] = 1; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

  // any type
  const a: any[] = [1, 2, 3];
  const b: any = true;

  console.log(a + b); // 1,2,3true  (type >> objecttrue)

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
