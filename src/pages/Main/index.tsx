import styled from "styled-components";

const Main = () => {
  // over loading example2 : 라이브러리 만들때 많이 사용
  type Config = {
    path: string;
    state: object;
  };

  type Push = {
    (path: string): void;
    (config: Config): void;
  };

  const push: Push = (config) => {
    if (typeof config === "string") console.log(config);
    else {
      console.log(config.path);
    }
  };

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
