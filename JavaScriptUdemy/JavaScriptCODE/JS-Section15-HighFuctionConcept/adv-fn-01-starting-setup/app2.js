// 재귀 Introduce

// function powerOf(x,n){
//     let result = 1;

//     for(let i=0; i<n; i++ ){
//         result*=x
//     }

//     return result;
// }

// console.log(powerOf(2,3));

function powerOf(x,n){

    // if(n===1){
    //     return x;
    // }
    // return x*powerOf(x, n-1);

    return n===1 ? x : x*powerOf(x,n-1); //2,2
}

console.log(powerOf(2,3));

const myself = {
    name: 'Max',
    friends: [
      {
        name: 'Manuel',
        friends: [
          {
            name: 'Chris',
            friends: [
              {
                name: 'Hari'
              },
              {
                name: 'Amilia'
              }
            ]
          }
        ]
      },
      {
        name: 'Julia'
      }
    ]
  };

function getPrintFriendNames(person){
    const collectedNames = [];

    if(!person.friends){
        return [];
    }

    for(const friend of person.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...getPrintFriendNames(friend));
    }
    return collectedNames;
}
console.log(getPrintFriendNames(myself));

// let a1 = {name : 'hwt', age : 40};
// for(const a2 in a1){
//     console.log(a2);
// }

// let a = {
//     name : 'Max',
//     firends : [
//         {name : 'chris'}
//     ]
// }
// function ff(person){
//     for(const friend of person.firends){
//         console.log(friend);
//     }
// }
// ff(a)
// for-of는 값을 가져오는 것에 불과하다. person만 있다면 a의 객체 값 전부를 가져온다.

