const SingletonClass = (function() {
  let instance;

  function init(){ // 싱글톤 객체를 리턴할 비공개 함수
    return {
      publictMethod: function() {
        return 'public method';
      },
      publicProp: 'public variable',
    };
  }

  // closure 사용
  return {
    getInstance: function() {
      if (instance) {
        return instance; // 있으면 그냥 반환
      }
      instance = init();
      return instance; // 없으면 객체 생성 후 반환 (이해를 위해 명시적으로 나눔)
    }
  };
})();

const a = SingletonClass.getInstance();
console.log(a.publicProp, 'a'); 

const b = SingletonClass.getInstance();
console.log(a === b)