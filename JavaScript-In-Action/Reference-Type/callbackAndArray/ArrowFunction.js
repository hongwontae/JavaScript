const add = (x,y) =>{
    return x+y;
}

const square = (x) => {
    return x*x;
}

const rollDie = ()=>{
   return Math.floor(Math.random()*6)+1
}

const rollDie2 = ()=>(
    Math.floor(Math.random()*10)+1
)

const add2 = (x,y) => x/y;

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

const newMovies = movies.map((movie)=>(
    `${movie.title} - ${movie.score}/100`
))