 //~~~~~~~~~~~~~~~~~Assignments~~~~~~~~~~~~~~~~~~~~~~~~
 //================Promises and Asynchoronus===============

 //>>>>>>>>>>>>>>>>TASK NO 1<<<<<<<<<<<<<<<<<<<<<<
 /*Write a simple asynchronous TypeScript function fetchGreeting that returns a
 greeting message after a 2-second delay using setTimeout.
 */ 
  async function fetchGreeting(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hello Welcome to my Linkdin profile")
     },2000);
    })
    };
  
    fetchGreeting().then((result)=>{console.log(result)});

 


 //<<<<<<<<<<<<<<<<<<<TASK NO 2>>>>>>>>>>>>>>>>>>>>>>>>>>>
 /*Write a function simulateTask that simulates a task by logging "Task started",
 waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
 */

 function simulateTask(){
    console.log("Task Started");
    setTimeout(()=>{
        console.log("Task Completed")
    },1000);
 }
 simulateTask();

 //<<<<<<<<<<<<<<<<<<<<TASK NO 3>>>>>>>>>>>>>>>>>>>>>>>>>>
 /*Write a function fetchData that returns a Promise which resolves with the string
 "Data fetched successfully!" after a delay of 1 second.
 */

 function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully!")
        },1000);
       
    })
 };

 fetchData()
 .then((res)=>{console.log(res)});

  //>>>>>>>>>>>>>>>>>>TASK NO 4<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 /*Write a function fetchWithError that returns a Promise. It should randomly either
 resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
 delay of 1 second. Handle the rejection using .catch
 */

  function fetchWithError(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      const randomNumber = Math.floor(Math.random()* 5 + 1)
      if (randomNumber < 1) {
        resolve("Data fetched successfully!");
    } else {
        reject("Data fetch failed!");
    }
     },1000)
   })
   
  };

  fetchWithError()
  .then((resolve)=>{console.log(resolve)})
  .catch((reject)=>{console.log(reject)});
 
 //<<<<<<<<<<<<<<<<<<<<TASK NO 5>>>>>>>>>>>>>>>>>>>>>>>
 /*Write a function executeSequentially that executes two functions fetchData and
 processData sequentially using Promises, and logs the results in the order they are
 called.*/
 
  function fetchData1(){
   return new Promise((resolve) => {
     resolve("fetch Data Sucessfully"!)
   })
  };

 function processData2(data: any){
  return new Promise((reject) => {
    reject(`Process Data: ${data}`)
  })
 };

 async function executeSequentially(){
  try{
    let fetchDataResult = await fetchData1()
    console.log(fetchDataResult)
  
    let processDataResult = await processData2(fetchDataResult)
    console.log(processDataResult)
  } 
  catch{(Error)
  console.log(Error)
 }
 };

 executeSequentially()