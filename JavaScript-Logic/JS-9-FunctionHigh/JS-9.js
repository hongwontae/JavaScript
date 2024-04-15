function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  ask("질문 있으신가요?", () => console.log('OK를 선택하셨습니다.'), result => console.log(result));