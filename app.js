console.log('from app.js, BEFORE anonymous function\t\t'+myVar);

(function() {
    console.log('from app.js, INSIDE anonymous function\t\t'+myVar);
    console.log(myVar);
})();

console.log('from app.js, AFTER anonymous function\t\t'+myVar);
