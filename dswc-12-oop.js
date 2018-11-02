// ----- Objects and arrays -----
console.log('----- Objects and arrays -----');

var jsonObject = {'key1':'val1', 'key2':3};
var jsonArray = [1, 'strVal', jsonObject];

console.log('jsonObject:\t', jsonObject);
console.log('jsonArray:\t', jsonArray);
console.log();


// ----- Classes -----
console.log(' ----- Classes ----- ')

// Constructor function
function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender
}
Person.prototype.hello = function() {
    console.log("Hello, I am", this.firstName, this.lastName);
}

var person = new Person('Drago', 'Stevanovic', 'male');
console.log(person);
person.hello();


// ----- Inheritance -----
function Employee(firstName, lastName, gender, position) {
    Person.call(this, firstName, lastName, gender);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSalary = function() {
    return Math.random()*1000+500;
}

var employee = new Employee('Emp', 'Loyee', 'Gardener');
employee.hello();
console.log(employee.getSalary());


// ----- Static fields and methods -----
Person.staticField = "I have created everything!";
Person.help = function() {
    console.log("Use 'new Person(firstName, lastName, gender)' to create a new object");
}
Person.help();

console.log();


// ----- Callbacks -----
console.log(' ----- Callbacks ----- ')

function http_request(callback) {
    console.log('sending request to server...');
    var response = "response";
    callback(response);
}

function on_success(data) {
    console.log('server sent this:', data);
}

http_request(on_success);
console.log();


// ----- Promises -----
console.log(' ----- Promises ----- ');

var promise = new Promise(function(fulfill, reject) {
    setTimeout(
        function() {
            var success = Math.random()<0.6;

            if (success) {
                fulfill('I have done what I promised!');
            }
            else {
                reject('Sorry, something went wrong.');
            }
        },
        1000);
});

promise.then(
    function(data){ console.log(data); },
    function(err) { console.log(err); }
);
