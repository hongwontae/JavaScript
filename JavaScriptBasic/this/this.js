const test = {
    name : 'test1',
    foo : {
      bar : ()=> {
        // 상위 스코프(전역)의 this인 window
        console.log(this)
      },
    },
    hello: function() {
      /**
       * 자바스크립트에서의 함수는 선언되는 동시에lexical)
       * 자신만의 Scope(범위)를 가집니다.
       */
      // 해당 스코프(지역)의 this는 test
      console.log(this)
      const foo = {
        bar: () => {
          // 상위 스코프(지역)의 this인 test
          console.log(this)
        }
      }
      foo.bar()
    }
  }
  test.foo.bar()
  test.hello()