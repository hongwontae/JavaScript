let person = {
    /* 데이터 프로퍼티 */
    firstName: "John",
    lastName: "Doe",
    
    /* 접근자 프로퍼티 */
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
      let names = name.split(" ");
      this.firstName = names[0];
      this.lastName = names[1];
    }
  };
  
  console.log(person.firstName); // "Jane" 출력
  console.log(person.lastName); // "Doe" 출력
  
  console.log(person.fullName); // "John Doe" 출력 
  person.fullName = "Jane Doe"; // Setter 호출


