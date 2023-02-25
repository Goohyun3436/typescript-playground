import styled from "styled-components";

const Main = () => {
  // Classes

  // in js
  // class Player {
  //   constructor(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  // }

  // in ts
  abstract class User {
    constructor(
      private firstName: string,
      private lastName: string,
      public nickName: string,
      protected proName: string // 자식 클래스에서 사용하고 싶을 때
    ) {}

    abstract getNickName(): void; // 추상 함수

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  // class 속성 상속
  class Player extends User {
    getNickName() {
      console.log(this.nickName);
    }
  }

  const nico = new Player("nico", "las", "니꼬", "p");

  // error: private
  // 'firstName' 속성은 private이며 'Player' 클래스 내에서만 액세스할 수 있습니다.
  // (js 에서는 가능함)
  // private 는 변수, 메소드에 모두 적용 가능
  nico.firstName;

  // error: 추상 클래스로 인스턴트 만들기
  // 상속만 가능하고 새로운 인스턴트 만들기는 불가능
  const nico1 = new User("nico", "las", "니꼬");

  return <MainBlock></MainBlock>;
};

const MainBlock = styled.div``;

export default Main;
