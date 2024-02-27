export {};

// EXAMPLE 1 - Declare a function with a Promise return type in TypeScript

// ✅ Named function
function getPromise(): Promise<number> {
  return Promise.resolve(5);
}

// 👇️ Unwrap promise type if necessary
// 👇️ type T = number
type T = Awaited<ReturnType<typeof getPromise>>;

// ✅ Named async function
async function getPromise2(): Promise<number> {
  return 10;
}

// ✅ Arrow function
const getPromise3 = (): Promise<string> => {
  return Promise.resolve('bobbyhadz.com');
};

// ---------------------------------------------------

// // EXAMPLE 2 - In a class method or with Promise<Type>

// // ✅ Class method
// class A {
//   async getPromise(): Promise<string> {
//     return 'bobbyhadz.com';
//   }
// }

// // ✅ Using a type as Promise<Type>
// type Person = {
//   name: string;
//   age: number;
// };

// async function getPromise4(): Promise<Person[]> {
//   return [
//     {
//       name: 'Bobby Hadz',
//       age: 30,
//     },
//   ];
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Unwrapping the type of a Promise from a function's return type

// function getPromise(a: number): Promise<number> {
//   return Promise.resolve(a);
// }

// // 👇️ Unwrap promise type if necessary
// // 👇️ type T = number
// type T = Awaited<ReturnType<typeof getPromise>>;

// ---------------------------------------------------

// // EXAMPLE 4 - Use a union type of the function returns a Promise of multiple types

// async function getPromise2(): Promise<string | null> {
//   if (Math.random() > 0.5) {
//     return null;
//   }

//   return 'bobbyhadz.com';
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Get the return type of a Promise in TypeScript

// // 👇️ type A = string
// type A = Awaited<Promise<string>>;

// // 👇️ type B = string
// type B = Awaited<Promise<Promise<string>>>;

// // 👇️ C = boolean | number
// type C = Awaited<boolean | Promise<number>>;

// async function sum(a: number, b: number): Promise<number> {
//   return a + b;
// }

// // 👇️ type D = number
// type D = Awaited<ReturnType<typeof sum>>;

// ---------------------------------------------------

// // EXAMPLE 6 - Unwrap the return type of a Promise from a function's return type

// function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }

// // 👇️ type E = number
// type E = Awaited<ReturnType<typeof multiply>>;

// ---------------------------------------------------

// // EXAMPLE 7 - Unwrap the return type of an `async` function

// async function sum(a: number, b: number): Promise<number> {
//   return a + b;
// }

// // 👇️ type D = number
// type D = Awaited<ReturnType<typeof sum>>;

// ---------------------------------------------------

// // EXAMPLE 7 - With Promise.all()

// async function getArr(a: number, b: number): Promise<[number, string]> {
//   const result = await Promise.all([
//     Promise.resolve(5),
//     Promise.resolve('bobbyhadz.com'),
//   ]);

//   return result;
// }

// // 👇️ [number, string]
// type E = Awaited<ReturnType<typeof getArr>>;
