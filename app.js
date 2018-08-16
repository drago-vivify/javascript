console.log('from app.js, BEFORE anonymous function\t\t'+myVar);

(function() {
    var myVar = 'myVar';
    console.log('from app.js, INSIDE anonymous function\t\t'+myVar);
})();

console.log('from app.js, AFTER anonymous function\t\t'+myVar);
