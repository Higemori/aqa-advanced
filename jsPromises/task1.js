async function waitFunction(text, time){
    setTimeout(console.log, time, text);
}

waitFunction("text", 1000);