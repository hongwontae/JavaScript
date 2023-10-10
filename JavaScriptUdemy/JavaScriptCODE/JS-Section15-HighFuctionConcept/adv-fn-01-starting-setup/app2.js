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

function getPrintFriendNames(person){ // myself
    const collectedNames = []; // empty arr

    if(!person.friends){ // myself.friends가 falsy라면 빈 배열을 반환한다.
        return [2];
    }

    for(const friend of person.friends){
        //console.log(friend); // 밑의 두개의 로직이 없다면 friend는 배열의 값을 묶어서 가져온다.
        collectedNames.push(friend.name); // 밑의 로직이 없다면 ['Manuel', 'Julia'];
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
//for-of는 값을 가져오는 것에 불과하다. person만 있다면 a의 객체 값 전부를 가져온다.

