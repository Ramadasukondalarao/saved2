//Fetch api ------------------------------------

let url ='https://jsonplaceholder.typicode.com/posts'

async function getdata() {
    const responce = await fetch(url);
    const data = await responce.json(); 
    console.log(data);
}

getdata();


// let url1 ='https://jsonplaceholder.typicode.com/posts'

// async function getdata() {
//     try{
//         const responce = await fetch(url1);
//         if(!responce.ok){
//          throw new Error(`HTTP error! status: ${response.status}`);
//        }
//       const data1 = await responce.json(); 
//       console.log(data1);
//     } catch(err){
//         console.error('Error fetching data:', err)
//    }
// }
// getdata();


