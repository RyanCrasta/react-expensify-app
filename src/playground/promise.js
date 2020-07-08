
const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        //resolve('This is my resolved data')
        reject('ERROR, something is wrong')

    }, 2000)

})


promise.then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
    
})









