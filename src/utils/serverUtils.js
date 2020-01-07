const axios=require('axios')


let users=[]
let locations=[]

 
const getUsers=(async ()=>{
    try {
        return await axios.get('https://next.json-generator.com/api/json/get/NJxAQn8J_')
    } catch (error) {
        console.log('error from 1')
    }
})()



const getLocations=(async ()=>{
    try {
        return await axios.get('http://www.mocky.io/v2/5e0d99d53300004d00aa8712')
    } catch (error) {
        console.log('error from 2')
    }
})()

//In Promise.all pass self invoked functions only
Promise.all([getUsers,getLocations])
.then((responses)=>{
    users=responses[0].data
    locations=responses[1].data
    console.log(users.length,locations.length)
}).catch((err)=>{
   console.log(err)
})

 









 

// const call2=new Promise(
//     (res)=>{
//         data2=res.data
//     },
//     (err)=>{
//         console.log(err)
//     }
// )

// const concurrentCall=new Promise.all([call1,call2])