
const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' }));

const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});

console.log(maxIndex);


const number = [{num:1},{num :2}]
console.log(number.indexOf({num:1})) // -1

const fifi = number.find((nums, idx, numbers) => {
  let a = nums.num === 2;
  return a;
})
console.log(fifi)


