const { readFile, writeFile } = require('fs');

// whenever a function is complete then we make the callback 
console.log('start');
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    const first = result; 
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        const first = result; 

        const second = result 
        writeFile('./content/result-async.txt',
        `results : ${first}, ${second}`, (err, result) => {
            if  (err) {
                console.log(err)
            }
            console.log('done with this task')

        } )

    })
}
)
console.log('starting next task')

//since we have this asynchronous approach, the moment we start this task 
// some alternatives are using promises and using async... await 