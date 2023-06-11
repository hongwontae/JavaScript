const movies = [
    {
        title : 'Amadeus',
        score : 99
    },
    {
        title : 'stand by me',
        score : 85
    },
    {
        title : 'Parasite',
        score : 95
    },
    {
        title : 'Alien',
        score : 90
    }
]

movies.forEach(function(movie){
    console.log(movie)
})

movies.forEach(function(movie1){
    console.log(`${movie1.title} - ${movie1.score}/100`)
})

//const all = movies.forEach(function(movie1){
//   console.log(`${movie1.title} - ${movie1.score}/100`)
//}) 이 형태는 불가능하다. 값 할당 x