const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
//   next() {
//     if (this.curEmployee >= this.employees.length) {
//       return { value: this.curEmployee, done: true };
//     }
//     const returnValue = {
//       value: this.employees[this.curEmployee],
//       done: false,
//     };
//     this.curEmployee++;
//     return returnValue;
//   },
  [Symbol.iterator] : function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length){
        yield this.employees[currentEmployee];
        currentEmployee++;
    }

  },
};

// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for(const a of company){
    console.log(a);
}