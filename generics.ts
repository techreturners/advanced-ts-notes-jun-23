//
// Response
// { successCode: number, message: string, ...????... }

// Generics
// types that share some characteristics but also can vary

// allows us to share code where possible

// Response<T> - the general concept of a response
// Response<User> - a specific response we get from calling the /user api
// Response<Product> - a specific response we get from calling /product

// Array<number> is IDENTICAL to number[]
const stuff: Array<number> = [1, 2, 3];

// Array<T> - .push(), .filter(), .sort()

// Array<string>; Array<string | number>; Array<User>

// Array<T>
type MyArray<T> = T[];

const myCoolArray: MyArray<number> = [1, 2, 3];
const otherArray: MyArray<string> = ["dshu", "fhui", "uih"];
const anotherArray: MyArray<Dragon> = [];
