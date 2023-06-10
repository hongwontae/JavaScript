const numbers = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
]

numbers.filter(num=>{
    return num ===4;
})

const movies = [
    {title : 'Amdeus',
    score : 99,
    year : 1984},

    {title : 'shar',
    score : 35,
    year : 2013},

    {title : '13 going',
    score : 70,
    year : 2004},

    {title : 'sta',
    score : 70,
    year : 2004},

    {title : 'waterWorld',
    score : 62,
    year : 1995},

    {title : 'Jinglebell',
    score : 70,
    year : 1996},
    
    {title : 'Parasite',
    score : 95,
    year : 2019},

    {title : 'koala3121',
    score : 80,
    year : 1920}

]

const goodMovies = movies.filter((movie)=>{
    return movie.score>=80;
})

const goodMovies1 = movies.filter(movie => movie.score>=80)
const badMovies1 = movies.filter(movie => movie.score<=60)
const resentlyMovies = movies.filter(movie => movie.year>=2000)
