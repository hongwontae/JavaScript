
const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [ firstName, lastName, ...otherInformation ] = nameData;
console.log(firstName, lastName, otherInformation);

const [name1,name2] = nameData;
console.log(name1,name2)