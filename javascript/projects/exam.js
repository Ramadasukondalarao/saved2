// setTimeout(() => {
//     console.log("This example full about in settimeout")
// },5000);

// console.log("print")





//callback example --------


// function register(callback) {
//     setTimeout(() =>{
//         console.log("registe end");
//         callback();
//     },3000)
//     //console.log("registe end");
// }


// function sendemail(callback){ 
//     setTimeout(() =>{
//         console.log("email end")
//         callback();
//     },1000)
// }


// function login(callback) {
//     setTimeout(() =>{
//         console.log("login end")
//         callback();
//     },1000)
    
// }

// function getuserdata(callback) {
//     setTimeout(() =>{
//         console.log("getting the user data")
//         callback();
//      },1000)
//  }


// function displaytheuserdata() {
//     setTimeout(() =>{
//         console.log("user data displayed")
//     },1000)
// }




// register(function(){
//     sendemail(() => {
//         login(() =>{
//             getuserdata(function(){
//                 displaytheuserdata();
//             });
//         });
//     });
// });



//promises -------

// function register() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() =>{
//             //return reject("There is lot of error");
//             console.log("registe end");
//             resolve();
//         },3000)
//     });
// }


// function sendemail(){ 
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("email end")
//             resolve();
//         },4000)
//     });
// }


// function login() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("login end");
//             resolve();
//         },1000)
//     });
// }

// function getuserdata() {
//     return new Promise((resolve,rejaect) => {
//         setTimeout(() =>{
//             console.log("getting the user data")
//             resolve();
//          },1000)
//     });
//  }


// function displaytheuserdata() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("user data displayed")
//             resolve();
//         },1000)
//     });
// }




// register(function(){
//     sendemail(() => {
//         login(() =>{
//             getuserdata(function(){
//                 displaytheuserdata();
//             });
//         });
//     });
// });

//difference between above one and down code ...so there is lot of difference between callback and promise...

// register()
// .then(sendemail)
// .then(login)
// .then(getuserdata)
// .then(displaytheuserdata)
// // .catch((err) => {
// //     console.log('Error',err)
// // })



//Async & await ------------

// async ---- always return a promises if you write async before the function
//await ----- await can only be used inside an async function

// async function getdata(){
//  return "kondala rao ramadasu"
// }


// const realdata = getdata();
// // console.log(realdata);

// realdata.then((res)=> console.log(res));



//async & await are used to handle the promises


// let s = new Promise((reslove,reject) =>{
//     reslove("kondala rao ramadasu")  
// })

//with async and & await keyword
// async function getdata(){
//      const val = await s;
//     console.log(val)
// }

// getdata();

//this below code is without get and async & await key word
// function getdata(){
//     s.then((res) => console.log(res));
// }

// getdata();