let person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  Object.defineProperty(person, "fullName", {
    get: function() {
      return this.firstName + " " + this.lastName;
    },
    set: function(name) {
      let names = name.split(" ");
      this.firstName = names[0];
      this.lastName = names[1];
    }
  });
  
  console.log(person.fullName); // getter 'John Doe'
  
  person.fullName = "John Doe"; // setter 호출
  
  console.log(person.firstName); 'Jane'
  console.log(person.lastName); 'Doe'
  
  console.log(person.fullName); 'Jane Doe'