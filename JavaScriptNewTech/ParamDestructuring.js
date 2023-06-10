const user = {
    email : 'harvey@gmail.com',
    password : 'sCotl123',
    firstName : 'hong',
    lastName : 'won tae',
    born : 1998,
    died : 2018,
    bio : 'he is string and he is fast than all world people',
    city : 'San Francisco',
    state : 'Republic of Korea'
}

function fullname (client){
    return `${client.firstName} ${client.lastName}`
}


function fullName1({firstName, lastName}){
    return `${firstName} ${lastName}`
} // 매개변수로 객체의 이름을 넣으면 firstName, lastName이 출력된다.

const movies = [
    {
        title: 'asd',
        score : 100
    },
    {
        title: 'asd',
        score : 90
    },
    {
        title: 'asd',
        score : 80
    },
    {
        title: 'asd',
        score : 70
    }
]
//movies.filter( (movie) => movie.score>=70)
movies.filter( ({score}) => score>=70)


