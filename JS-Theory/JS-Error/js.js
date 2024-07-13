try {
    console.log(aaa)
} catch (error) {
    const ErrorOnj = new Error('Error 발생');
    error.statusCode = 404;
    console.dir(ErrorOnj);
    console.dir(error)
}