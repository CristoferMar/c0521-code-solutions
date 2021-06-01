function ExampleConstructor() {

}

console.log('ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor prototype:', typeof ExampleConstructor.prototype);

var testConstructor = new ExampleConstructor();
console.log(testConstructor);

var isInstanceOf = testConstructor instanceof ExampleConstructor;
console.log('testConstructor contains ExampleConstructor?', isInstanceOf);
