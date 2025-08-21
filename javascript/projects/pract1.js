// let glodelvalue  = " I am learning javascript ";

// function greet () {
//     console.log(glodelvalue);
// }

// greet();
// console.log(glodelvalue);



//function scope-------------------


// function myfunction () {
//     let streap = "This is javascript";
//     console.log(streap);
// }

// myfunction();
// console.log(streap);



//dom manipulation  ----------

// let greet = document.getElementById("hello");
// console.log(greet);

// let greet = document.getElementsByTagName("h1");
// console.log(greet);
// console.log(greet[0]);

// let greet = document.getElementsByClassName("hello");
// console.log(greet);


// let greet  = document.querySelector("#hello");
// console.log(greet)


// let greet1  = document.querySelector(".hello");
// console.log(greet1)


// let greet  = document.querySelectorAll(".hello");
// console.log(greet);

// let heading = document.querySelector(".heading");
// let parent = heading.parentNode;
// console.log(parent);

// let parent = document.querySelector(".parent");
// console.log(parent.childNodes);

// let parent = document.querySelector(".heading");
// console.log(parent.nextElementSibling)


// Dom manipulation------------

// let sequel = document.querySelector(".heading");
// sequel.innerHTML = 'Hi ramadasu kondala rao';
// sequel.style.color = "red";
// sequel.style.fontSize = "100px"; 
// sequel.classList.add("title");
// sequel.classList.remove("heading");




//creat element ------


// const heading = document.createElement("h1");
// heading.innerHTML = "Javascript";
// heading.classList.add("title")
// const parent = document.querySelector(".parent");
// parent.appendChild(heading)




// const subheading = document.createElement("h4");
// subheading.innerHTML = "System.in";
// parent.appendChild(subheading)

// console.log(heading);




//Dom Events ---------------

// const button = document.querySelector("#btn");
// const heading = document.querySelector("#heading");


// button.addEventListener('click', function(event) {
//     heading.style.color = "green";
//     heading.style.fontSize = "70px"
//    console.log("Button Clicked",event)
// })



//callback function----------

//A callback function
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// // A higher-order function that accepts a callback
// function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name); // Calling the callback
// }

// // Using the callback
// processUserInput(greet);


//Asynchronous callback by usin setTimeout------------

// console.log("start");

// setTimeout(function(){
//     console.log("This is javascript programm")
// },3000);

// console.log("End");


//nested callbacks-----------

// function first(callback){
// setTimeout(() => {
//     console.log("Starting")
//     callback();
//  },3000)
// }

// function second(callback) {
//     setTimeout(() => {
//         console.log("second callback")
//         callback();
//     },4000);
// }

// function three (){
//     setTimeout(() => {
//         console.log("last one to execute")
//     },5000);
// }

// first (() =>{
//    second (() => {
//     three();
//    })
// })



//callback example with namasta javascript-----------


// let cart1 = ["shoes","pants","watches","toys"];


// api.creatorder(cart,function (){
//   api.proceedtopayment(function(){
//     api.showordersummery(function(){
//         api.updatewallet()
//     })
//   })
// })

// let cart = ["Laptop", "Headphones", "Mouse"];

// let api = {
//   createorder: function (cart, callback) {
//     setTimeout(() => {
//       console.log(`Order created for items: ${cart.join(", ")}`);
//     //    console.log("orderhas be created");
//       callback(); // Call the next function after creating the order
//     }, 2000);
//   },
//   proceedtopayment: function (callback) {
//     setTimeout(() => {
//       console.log("Payment processed successfully.");
//       callback(); // Call the next function after payment
//     }, 3000);
//   },
//   showordersummery: function (callback) {
//     setTimeout(() => {
//       console.log("Order summary displayed to the user.");
//       callback(); // Call the next function after showing the summary
//     }, 1000);
//   },
//   updatewallet: function () {
//     setTimeout(() => {
//       console.log("Wallet updated. Amount deducted.");
//     }, 500);
//   },
// };

// // Executing the process using nested callbacks
// api.createorder(cart, function () {
//   api.proceedtopayment(function () {
//     api.showordersummery(function () {
//       api.updatewallet();
//     });
//   });
// });



//By using THIS keyword --------------

//globel context

// console.log(this);

//inside function

// Non-strict mode
// function globalFunction() {
//     console.log(this); // Window object
// }
// globalFunction();

// // Strict mode
// "use strict";
// function strictFunction() {
//     console.log(this); // undefined
// }
// strictFunction();



//inside a methode

// const me = {
//     name : "kondala rao",
//     age : 24,
//     greet () {
//         console.log(this.name);
//     }
// }

// me.greet();


// function Person(name) {
//     this.name = name;
// }
// const person = new Person("kondala rao");
// console.log(person.name); // kondala rao


//Explict settings

// function greet () {
//     console.log(this.name);
// }

// const person = {name : "kondala rao"}
// greet.call(person);
// greet.apply(person);


// const sleep = greet.bind(person);
// console.log(sleep);
// sleep();

// let obj = {
//     name : "kondala rao",
//      greet : function () {
//         console.log(this.name)
    
//     }
// }
// obj.greet.call(obj);



// Call , Apply , and Bind---------------
// let userdetails = {
//     name : "kondala rao",
//     age : 24,
//     designation: "software engineering",
    // printdetails : function (){
    //     console.log(this.name);
    // }
//}
// userdetails.printdetails.call(userdetails);

// let printdetails = function (state,country){
//     console.log(this.name+ " " + state + " " + country);
// }

// printdetails.call(userdetails ,"ap","India");
// printdetails.apply(userdetails ,["ap","India"]);

// let greet = printdetails.bind(userdetails ,"ap","India");
// console.log(greet);
// greet();


// let userdetails1 = {
//     name : "mani kumar",
//     age : 23,
//     desigantion : "Software enginnering"
// }
// //userdetails.printdetails.call(userdetails1)

// printdetails.call(userdetails1 , "tn","India");
// printdetails.apply(userdetails1 , ["tn","India"]);

// let greet1 = printdetails.bind(userdetails1 , "tn","India");
// console.log(greet1);
// greet1();

//promises -------------

// creating the promises-----
// let mypromise  = new Promise((reslove,reject) =>{
//     let succes = true;
//     if(succes) {
//         reslove("Success!")
//     }
//     else {
//         reject("failed");
//     }
// })
// console.log(mypromise)
// mypromise
// .then (result=> console.log(result))
// // .then (result => {thrownewError("Something went wrong")
// // })
// .catch(err => console.error(err))
// .finally ( () => console.log("operation completed"))


//useing setTimeout ---------------

// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let succes = true;
//             if(succes) {
//                 resolve("Success!")
//             }
//             else {
//                 reject("failed");
//             }
//     },2000)
// })
// console.log(data);
// data.then (result => console.log(result))
// .catch (err => console.error(err))

//asynchronous api-------------

// function delay(milliseconds){
//  return new Promise ((resolve,reject)  => {
//     setTimeout(() => {
//         resolve(`waiting for ${milliseconds} milliseconds`);
//     },milliseconds);
//  })
// }

// delay(3000)
// .then(res => console.log(res));

// Function that returns a Promise ----------- Example-2

 //function fetchData() {
//     return new Promise((resolve, reject) => {
//       console.log("Fetching data...");
      
//       // Simulate a delay using setTimeout
//       setTimeout(() => {
//         const success = false; // Change this to false to simulate an error
        
//         if (success) {
//           resolve("Data fetched successfully!");
//         } else {
//           reject("Failed to fetch data.");
//         }
//       }, 2000); // Simulate a 2-second delay
//     });
//   }

// Using the Promise
//   fetchData()
//     .then((result) => {
//       console.log(result); // Logs "Data fetched successfully!" if resolved
//     })
//     .catch((error) => {
//       console.error(error); // Logs "Failed to fetch data." if rejected
//     });


//Function that returns a Promise to fetch user data

// function fetchUserDataWithConstructor() {
//     return new Promise((resolve, reject) => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//           if (!response.ok) {
//             reject(new Error(`HTTP error! Status: ${response.status}`)); // Reject if response status is not OK
//           }
//           resolve(response.json())
//         })
        // .then((data) => {
        //   resolve(data); // Resolve the Promise with the data
        // })
        // .catch((error) => {
        //   reject(error); // Reject the Promise if there's an error
        // });
  //   });
  // }
  
  // Using the fetchUserDataWithConstructor function
  // fetchUserDataWithConstructor()
  //   .then((data) => {
  //     console.log("User Data:", data); // Logs the user data
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error); // Handles any errors
  //   });



  
// // Function to fetch user data from an API
// function fetchUserData() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       // Check if the response is OK
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json(); // Parse JSON from the response
//     });
// }

// // Using the fetchUserData function
// fetchUserData()
//   .then((data) => {
//     console.log("User Data:", data); // Logs the user data
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error); // Handles any errors
//   });



 //classesin javascript ----------------- class is blueprint of an object in javascript


// class MobileShop {
//   constructor(name, gb /*price*/) {
//       this.name = name;
//       this.gb = gb;
//       // this.price = price;
//   }

  // updateRam(newRam) {
  //     this.gb = newRam; // Update the `gb` property with the new value.
  // }

//   set seperate (price) {
//    if(price){
//     alert("price can not be less than zero")
//    }
//    else{
//     this.p = price;
//    }
//   }
//   get spsname(){
//     return "New name: "+this.name;
//   }
// }

// let getdata = new MobileShop("realMe10", "6gb", 18000);

// console.log(getdata)

// Update RAM using the method `updateRam`.
// getdata.updateRam("8gb");

// Log the updated data.
// console.log(getdata);

//example ---2 of classes ---------------

// class Person {
  //Constructor method to initialize object properties
  // constructor(name, age) {
  //   this.name = name; // Instance property
  //   this.age = age;
  // }

  // // Method
  // introduce() {
  //   console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
  // }

//   // Getter
//   get yearOfBirth() {
//     return new Date().getFullYear() - this.age;
//   }

//   // Setter
//   set updateName(newName) {
//     this.name = newName;
//   }

//   // Static Method
//   static species() {
//     return "Homo sapiens";
//   }
// }

// // Creating an instance of the class
// const person1 = new Person("Alice", 25);

// // Accessing properties and methods
// person1.introduce(); // "Hi, my name is Alice, and I am 25 years old."
// console.log(person1.yearOfBirth); // e.g., 1998
// person1.updateName = "Alicia";
// person1.introduce(); // "Hi, my name is Alicia, and I am 25 years old."

// // Calling a static method
// console.log(Person.species()); // "Homo sapiens"

// example - 3-----------------------

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Rex");
// dog.speak(); // "Rex barks."









