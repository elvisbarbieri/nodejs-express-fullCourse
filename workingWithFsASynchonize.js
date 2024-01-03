const {readFile,writeFile, readFileSync} = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{

    let finalResult;
    if(err){
        console.log(err);
    }
    finalResult = result;

    readFile('./content/second.txt','utf8',(err,resultTwo)=>{
        if(err){
            console.log(err);
        }
        finalResult = finalResult+""+resultTwo 
        console.log(finalResult);
    })
});




//asynchronos approach