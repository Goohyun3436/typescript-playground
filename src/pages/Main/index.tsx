import styled from "styled-components";

const Main = () => {
  // make hashmap

  type Words = {
    [key: string]: string;
  };

  class Dict {
    private words: Words;
    constructor() {
      this.words = {};
    }

    // 메소드: 사전에 단어/뜻 추가
    add(word: Word) {
      // 사전에 해당 key 가 없다면
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }

    // 메소드: 뜻 return
    def(term: string) {
      return this.words[term];
    }
  }

  class Word {
    constructor(public term: string, public def: string) {}
  }

  const kimchi = new Word("kimchi", "한국의 음식");

  // 사전 생성
  const dict = new Dict();
  // 단어 추가
  dict.add(kimchi);
  // 뜻 출력
  console.log(dict.def("kimchi")); // >> 한국의 음식

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
