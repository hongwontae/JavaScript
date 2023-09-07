
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