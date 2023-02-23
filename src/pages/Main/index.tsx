import styled from "styled-components";

const Main = () => {
  // over loading example3 : 파라미터 여러개일 때
  type Add = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number; // c 는 선택적 인자이므로
  };

  // error example
  // '(a: number, b: number, c: number) => number' 형식은 'Add' 형식에 할당할 수 없습니다.
  const add: Add = (a, b, c) => {
    return a + b;
  };

  // c의 타입을 선택적으로 지정해줘야 함
  // 수정 후
  const add1: Add = (a, b, c?: number) => {
    return a + b;
  };

  // 파라미터를 선택적으로 넘겨도 문제 없음을 알 수 있다.
  add1(1, 2);
  add1(1, 2, 3);

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
