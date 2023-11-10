const company = {
    curEmployee : 0,
    employees : ['Max','Manu','Anna'],
    next(){
        if(this.curEmployee >= this.employees.length){
            return {value : this.curEmployee, done : true}
        }
        const returnValue = {
            value : this.employees[this.curEmployee],
            done : false
        }
        this.curEmployee++;
        return returnValue;
    }
};

console.log(company);

console.log(company.next());
console.log(company.next());
console.log(company.next());

