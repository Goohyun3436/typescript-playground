import styled from "styled-components";

const Main = () => {
  // Conclusions
  type SuperPrint = <T>(a: T[]) => T;
  const superPrint: SuperPrint = (arr) => arr[0];

  // 함수에 바로 geceric type 명시해주기
  function superPrint2<T>(a: T[]) {
    return a[0];
  }

  // 직접 type 명시
  const a = superPrint2<boolean>([1, 2]); // 'number' 형식은 'boolean' 형식에 할당할 수 없습니다.
  const d = superPrint2<boolean>([true, false]);

  // type 재사용
  type Player<E> = {
    name: string;
    extraInfo: E;
  };

  // example1
  type NicoExtra = {
    favFood: string;
  };

  type NicoPlayer = Player<NicoExtra>;

  const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
      favFood: "kimchi",
    },
  };

  // example2
  const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null,
  };

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
