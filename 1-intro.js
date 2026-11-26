const amount = 10

if(amount <= 10){
    console.log('small amount');
}
else{
    console.log('large amount');
}

console.log(`you're making progress!!!`);

// --dirname - path to current directory
// ==filename - file name
// ==GLOBALS - NO WINDOW !!!
// require - function to use module (commonJS)
// module - info about current (file)/encapsulate code (only share minimum)
// process = info about env where the program is being executed

console.log(__dirname)
setInterval(()=>{
    console.log('node.js 101');
},10)