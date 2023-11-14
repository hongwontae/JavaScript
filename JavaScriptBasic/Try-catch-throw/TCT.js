try {
    throw new Error('에러가 발생했다. 후퇴하라')
    
} catch (error) {
    console.log(error);
    console.dir(error)
} finally{
}

