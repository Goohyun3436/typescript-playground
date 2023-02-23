import styled from "styled-components";

const Main = () => {
  // polymorphism (다형성)
  // poly == many  morphos == form, structure

  // generic type은 인자에 어떤 type이 들어올지 모를 때 사용

  type SuperPrint = {
    (arr: number[]): void; // concrete type
    (arr: boolean[]): void; // concrete type
    (arr: string[]): void; // concrete type
    (arr: (number | boolean)[]): void; // generic type [해결(1)]
  };

  const superPrint: SuperPrint = (arr) => {
    arr.forEach((i) => console.log(i));
  };

  superPrint([1, 2, 3, 4]);
  superPrint([true, false, true]);
  superPrint(["a", "b", "c"]);

  // error code 1  >>  [해결(1)]
  superPrint([1, 2, false]);

  // error code 2  >>  [해결(2)]
  superPrint([1, 2, false, "a"]);

  // [해결(2)] : call signature에 generic type 을 받을 거라고 명시해주기
  type SuperPrint2 = {
    <TypePlaceholder>(arr: TypePlaceholder[]): void;
  };

  const superPrint2: SuperPrint2 = (arr) => {
    arr.forEach((i) => console.log(i));
  };

  superPrint2([1, 2, false, "a"]);
  // const superPrint2: <string | number | boolean>(arr: (string | number | boolean)[]) => void
  // 자동으로 타입 추론해주는 것을 알 수 있음

  // geceric type 을 명시해준 함수가 리턴하는 경우
  type SuperPrint3 = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  };

  const superPrint3: SuperPrint3 = (arr) => arr[0];

  const a = superPrint3([1, 2, 3, 4]); // const superPrint3: <number>(arr: number[]) => number
  const b = superPrint3([true, false, true]); // const superPrint3: <boolean>(arr: boolean[]) => boolean
  const c = superPrint3(["a", "b", "c"]); // const superPrint3: <string>(arr: string[]) => string
  const d = superPrint3([1, 2, false, "a"]); // const superPrint3: <string | number | boolean>(arr: (string | number | boolean)[]) => string | number | boolean

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
