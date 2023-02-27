import { useEffect, useState } from "react";
import styled from "styled-components";

const Dictionary = () => {
  const [wordValue, setWordValue] = useState("");
  const [defValue, setDefValue] = useState("");

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

  // 사전 생성
  const dict = new Dict();

  const addWord = () => {
    const newWord = new Word(wordValue, defValue);
    dict.add(newWord);
    console.log(dict);
  };

  return (
    <DictionaryBlock>
      <div className="dictionary-content">
        <section className="input-container">
          <input
            type="text"
            placeholder="단어를 입력하세요."
            value={wordValue}
            onChange={(e) => setWordValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="단어의 뜻을 입력하세요."
            value={defValue}
            onChange={(e) => setDefValue(e.target.value)}
          />
          <button onClick={addWord}>추가</button>
        </section>
        <section className="view-container"></section>
      </div>
    </DictionaryBlock>
  );
};

const DictionaryBlock = styled.div``;

export default Dictionary;
