import styled from "styled-components";

const Main = () => {
  // optioner
  // type Name = string;
  // type Age = number;
  // type Player = { readonly name: Name; age?: Age };

  // const playerMaker = (name: string): Player => ({ name });
  // const nico = playerMaker("nico");
  // nico.name = "hello"; //  읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

  // array
  // const numbers: readonly number[] = [1, 2, 3];
  // numbers.push(1); // 'readonly number[]' 형식에 'push' 속성이 없습니다.

  // string
  // const names: readonly string[] = ["1", "2"];
  // names.push(); // 'readonly string[]' 형식에 'push' 속성이 없습니다.

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
