import styled from "styled-components";

const Main = () => {
  // unknown
  let a: unknown; // ts 의 보호를 받음 (type 채크를 먼저)

  if (typeof a === "number") {
    let b = a + 1;
  }

  let b = a.toUpperCase(); // 'a'은(는) 'unknown' 형식입니다.
  // type 체크 해주기
  if (typeof a === "string") {
    let b = a.toUpperCase();
  }

  // void
  function hello() {
    // (local function) hello(): void  >> 아무것도 리턴하지 않는 함수라는 것을 ts가 인식함
    console.log("아무것도 return 하지 않음");
  }

  // never
  function hello2(): never {
    // 함수가 절대 return 하지 않을 때 사용
    throw new Error("return 하지 않고 오류를 발생시키는 함수");
  }

  function hello3(name: string | number) {
    // type 이 두가지 이상일 때 사용
    if (typeof name === "string") {
      name; // >> (parameter) name: string
    } else if (typeof name === "number") {
      name; // >> (parameter) name: number
    } else {
      name; // >> (parameter) name: never
      // 이 스코프는 작동하지 않아야 함.
    }
  }

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
