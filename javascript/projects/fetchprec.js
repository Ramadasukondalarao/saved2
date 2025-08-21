

let url = 'https://jsonplaceholder.typicode.com/users';

function getdata(){
    fetch(url)
    .then((res) => {
        // console.log(res)
        //error checking
        //200-299
        if(!res.ok) throw new Error("was not a valid responce");
        return res.json(); // method to extract json string and convert it to an string
    })
    .then((dataobj) => {
        console.log(dataobj);
    })
    .catch((err) =>{
        console.warn(err.message)
    })
    //This code below will always fail
    // let responce = fetch(url);
    // let dataobj1 = responce.json();
    // console.log(dataobj1);
}
getdata();


// let url = 'https://jsonplaceholder.typicode.com/users';

// async function getdata(){

//     try{
//         let responce = await fetch(url);
//         console.log(responce)
//         if(!responce.ok)throw new Error("Not a valid responce")
//         let data = await responce.json();
//         console.log(data)
//     }catch(err){
//         console.log(err.message);
//     }
// }
// getdata();