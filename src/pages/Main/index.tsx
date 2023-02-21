import styled from "styled-components";

const Main = () => {
  // let a = "str";
  // a = 1;  // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

  // let b: boolean = "x";  // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.

  // 배열
  // let a: number[] = [1, 2, 3];
  // let b: string[] = ["il", "1"];
  // let c: boolean[] = [true, false];

  // optioner
  // const player: {
  //   name: string;
  //   age?: number;
  // } = {
  //   name: "nico",
  //   age: 1,
  // };
  // if(player.age < 10) {}  // 'player.age'은(는) 'undefined'일 수 있습니다.

  // many optioner
  // type Name = string;å
  // type Age = number;
  // type Player = { name: Name; age?: Age };

  // const playerNico: Player = {
  //   name: "nico",
  // };

  // const playerLynn: Player = {
  //   name: "nico",
  //   age: 1,
  // };

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
