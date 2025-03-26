let pencilPrice=10;
let erasorPrice=5;
//console.log("Thre total price is:",pencilPrive+erasorPrice,"rupees");
//let output="The total price is:"+(pencilPrive+erasorPrice)+"rupees";
//console.log(output);
// let output=`the total price is :${pencilPrice+erasorPrice}Rupees`;
// console.log(output);
// console.log(`the total price is :${pencilPrice+erasorPrice}Rupees`);


//Arithmatic operator
let a=10;
let b=5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

//Unary operator

// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a);
// console.log(a--);
// console.log(a);
// console.log(--a);
// console.log(a);

//Asignment operator

// console.log(a+=5);
// console.log(a*=4);

//Comparision operato
// age=18;
// console.log(typeof(age));
// console.log(age>45);

//((
// let age=17;
// if(age>=18){
//     console.log("you are eligible for vote");
// }
// else {
//     console.log("You cant vote");
// }

// let size='xl';
// if(size==='xl'){
//     console.log("price is 250");
// }
// else if(size==='l'){
//     console.log("price is 200");

// }
// else if(size===m){
//     console.log("price is 150");
// }
// else{
//     console.log("price is 100");
// }


// //logical operator
// let str="apple";
// if(str[0]==="a"&& str.length>3){
//     console.log("good string");

// }else{
//     console.log("Bad string");
// }
// let num=12;
// if((num%3===0)&&((num+1==15)||(num-1==11))){
//     console.log("safe");
// }else
// {
//     console.log("unsafe");
// }
// let day=6;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thurseday");
//         break;
//     case 5:
//             console.log("Friday");
//             break;
//    case 6:
//             console.log("saturday");
//                 break;
//     case 7:
//              console.log("Sunday");
//             break;
//      default:
//                         console.log("invalid");
// }
// alert("Something went wrong!");
// console.error("This is an error");

// console.warn("warnning");

//TAKING INPUT FROM KYEBOARD
// let roll=prompt("Enter your role:");
// console.log(roll);
//  let firstname=prompt("Enter your first name");
// console.log(firstname );
// let lastnane=prompt("Enter your last name:");
// let fulname=firstname + lastnane;
// console.log(fulname);
// console.log(`My name is ${fulname} and my roll is ${roll}`);
// console.log("My first name and role is "+(firstname  + lastnane)+" and role is ",roll)
// console.log("Well come" ,firstname ,lastnane,"!")
// let FirstName=prompt("Enter First name:");
// let lastName=prompt("Enter last NAme:");
// let msg="Welcome "+ FirstName +" "+lastName+"!";
// alert(msg);


//Practice question

// let num=prompt("Enter a no:")
// console.log(num);
// if (num%10==0) {
//     console.log("Good");
    
// }else{
//     console.log("Bad");
// }

//trim()
// let password=prompt("Set your password:");
// let newpass=password.trim();
// console.log(newpass);
// console.log(password);


//Method Chaining

// let msg="  hello  "
// let newMsg=msg.trim();
// console.log("After trim:",newMsg);
// newMsg=newMsg.toUpperCase();
// console.log("Afetr upper case:",newMsg);
// let newMsg=msg.trim().toUpperCase();
//  console.log(newMsg)
 

//slice():

//  let str="Elizadas";

// console.log(str.slice(0,5));
// console.log(str.slice(3));
// console.log(str.slice(-2));
// let student=["Eliza","Sradha","Aman"];
// let start=["January","july","march","Augest"];
// console.log(start.splice(0,1));

//to check empty string

// let str =prompt("Plese enter a string");
// if(str.length==0){
//     console.log("empty string");
// }
// else{
//     console.log("not empty string");
// }

// let arr=["Eliza",'A',"B",3,,66,65];
// let item=66;
// if(arr.indexOf(66)!=-1){
//     console.log("Element present");
// }
// else{
//     console.log("not present");
// }

//for loop

// for(let i=1;i<=3;i++){
//     console.log(`outer loop${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

//While Loop

// let favMovie="Avatar";
// let guess=prompt("Enetr the movie name or quit");
// while((guess!=favMovie)&&(guess!="quit")){
//     console.log("Wrong");
//     guess=prompt("Again enter movie name");

// }
// if (guess==favMovie) {
//     console.log("congrats");
    
// }
// else{
//     console.log("You quit");
// }

        //  OR
        //  let favMovie="Avatar";
        //  let guess=prompt("Enetr the movie name or quit");
        //  while(guess!=favMovie){
        //     if(guess!="quit")
        //   {
        //   console.log("You are quit");
        //   }
        //      console.log("Wrong");
        //      guess=prompt("Again enter movie name");
         
        //  }
        //  if (guess==favMovie) {
        //      console.log("congrats");
             
        //  }
             //LOOPS IN ARRAY   
        
        // let fruits=["Apple","Mango","Guava","papeya","Orange"];
        // for(let i=0;i<fruits.length;i++){
        //     console.log(i,fruits[i]);
        // }

        // for(let i=fruits.length-1;i>0;i--){
        //     console.log(i,fruits[i]);
        // }
             
                //NESTED ARRAY WITH NESTED LOOP
            
        // let heroes=[["Iron man","Spider Man","Thor"],["Superman","Wonder woman","flash"]];
        // for (let i = 0; i < heroes.length; i++) {
        //     console.log(`i,${heroes[i]}`);
        //    for (let j = 0; j < heroes[i].length; j++) {
        //     console.log(`j=${j},${heroes[i][j]}`);
            
        //    } 
        // }  
        
        // let student=[["Eliza",90],["Sradha",89],["mohan",100]];
        // for(let i=0;i<student.length;i++){
        //     console.log(`student no is #${i+1}`);
        //     for(let j=0;j<student[i].length;j++){
        //         console.log(student[i][j]);
        //     }
        // }

              //FOR OF LOOP 
        //       let fruits=["Apple","Mango","Guava","papeya","Orange"];
        // for (fruit of fruits){
        //     console.log(fruit);
        // }      
        // let heroes=[["Iron man","Spider Man","Thor"],["Superman","Wonder woman","flash"]];
        // for(hero of heroes){
        //     for(list of hero){
        //         console.log(list)
        //     }
        // }

        // let arr=[1,2,3,4,5,6,2,3];
        // let num=2;
        // for(let i=0;i<arr.length;i++){
        //     if(arr[i]=num){
        //         arr.splice(i,1);
        // }
        
           
        // }
        // console.log(arr);

        // let num=Math.random();
        // num=num*10;
        // num=Math.floor(num);
        // num=num+1;
//sort trick
//let num1=Math.random(Math.random()*5);
               //Object literals
        // const car= {
        //         name:"farari",
        //         model:"XPt",
        //         color:"red"
        // };


        // const man={
        //             name:"Eliza",
        //             age:21,
        //             city:"austrelia"
        // };
        //    //Update
        // man.city="New york";
        // man.country;
        //   //Add key
        // man.country="United stae";
        //   //Delete
        //   delete man.age;

                 // FUNCTION


        // function AVGE(a,b,c){
        //         let avg=a+b+c/3;
        //         console.log(avg);

        // }
        // AVGE(2,4,6);

        //print a table
        // function printTable(n){
        //         for(let i=n;i<=n*10;i+=n)
        //         {
        //                 console.log(i);
        //         }
        // }
        // printTable(5);

        //1 to n sum calculation 
       
        // function sum(n){
        //         let sum =0;
        //         for(let i=1;i<=n;i++){
        //             sum+=i;
        //         }
        //         return sum;
        // }
        // sum(3);

        //function scope

//         let sum=45;                //Global scope
//         function sum2(a,b){
//                 let sum=a+b;     // function scope
// console.log(sum);
//         }
//         sum2(3,5);
//         console.log(sum);


                      //Higher order function call
        // function MultipleGreet(func,count){
        //         for(let i=0;i<=count;i++){
        //                 func();
        //         }
        // }
        // let greet =function(){

        //         console.log("Hello");
        // }

        // MultipleGreet(function(){console.log("Namaste")},2);

        // function OddorEven(request){
        //         if (request==odd){
        //                 let odd=function(n){
        //                         console.log(!(n%2==0));
        //                 }
                       
        //                 return odd;

        //         }
                
        //         else if(request==even){
        //                 let even=function(n){
        //                         console.log(n%2==o);
        //                 }
        //                 return even;
        //         }
        //         else {
        //                 console.log("Wrong request");
        //         }
        // }


        //Method
//   const Calculator={
//         num:55,
//         add:function(a,b){
//                 return a+b;
//         }
//         ,
//         sub:function(a,b){
//                 return a-b;
//         }
//         ,
//         mul:function(a,b){
//                 return a*b;
//         }
        
//   };
//   //METHOD SORT HAND
//   const Cal={
        
//         add(a,b){
//                 return a+b;
//         }
              
//         ,
//         sub(a,b){
//                 return a-b;
         
//         }
               
//         ,
//         mul(a,b){
//                 return a*b;
//         }
        
//   };


//   let start=100;
//   let end=200;
//   function generateRandom(start,end){
//         let def=end-start;
//         return Math.floor(Math.random()*def)+start;
//   }

  //THIS KEY WORD
// const student={
//         name:"SRadha",
//         age:21,
//         math:93,
//         phy:95,
//         eng:94,
//         getAvg()
        //       {
//                 let avg=(this.eng+this.math+this.phy)/3;
//         console.log(avg);
//         }

          //ARROW function
// let sum=(a,b)=>{
//         console.log(a+b);
// };

// let cube =n=>{
//         return n*n*n;
// };
//  let hello=()=>{
//         console.log("hello world");
//  };


// const mul =(a,b)=>(
//         a*b

// );
// const pow=(a,b)=>
// (
// a**b
// );

//SetTime out
// console.log("Hi There!");
// setTimeout(() => {
//         console.log("Iter /soa");
// }, 4000);
// console.log("Welcome to ");

               //THIS WITH ARROW FUNCTION AND THIS WITH NORMAL FUNCTION
//       const student={
//         name: "eliza",
//         mark:95,
//         prop:this,//global scope
//         getName:function(){
//                 console.log(this);
//                 return this.name;  //student obj 
//         },
//         getMarks:()=>{
//                 console.log(this);
//                 return this.mark;  // parent scope //lexical scope
//         }
//       };
  
//   let id=setInterval=(()=>{
//         console.log("Hello world!");

//   },2000);

//    setTimeout(()=>{
// clearInterval(id);
// console.log("Clear interval");
//    },10000);


//        let arr=[2,4,5,7,8];
           //arrow function
//        arr.forEach((el)=>{
//         console.log(el);
//        });
           //for each loop
//        arr.forEach(function(el){
//         console.log(el);
//        });
              //normal function
//        let print=function (el)
//        {
//            console.log(el);
//        };
// arr.forEach(print);

// let num=[2,45,67,78,99];
// let finalval=num.reduce((res,el)=>{
//         console.log(res);
//         return res+el;

// });
// console.log(finalval);
// [1,5,6,7,8,9].map((el)=>{

// })
       //to find maximum value
// let arr=[1,2,3,4,5,6,75,3,4,5];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//                 max=arr[i];
//         }

// }
// console.log(max);
   
      //Using reduce method
// let nums=[2,45,6,7,86,5,4,43];
// let result=nums.reduce((max,el)=>{
//         if(max<el){
//                 return el;
//         }
//         else {
//                 return max
//         }
// });
// console.log(result);

//Check if all numbers are multiple of 10 or not
// let arr=[30,60,70];
// let ans=arr.every((el)=>
//  el%10==0
// );
// console.log(ans);

    //Create function to find minimum number
//     function getMin(num){
//         let min=num.reduce((min,el)=>{
//                 if(min>el){
//                         return el;
//                 }
             
//                 else
//                  return min;
//             }
        
        
//         );
//         return min ;
//     }
//     let num=[20,23,43,14,23,59];
    
//Spread with literals
// let arr=[1,3,5,7,9];
// let newArr=[...arr];

// let chars=[..."eliza"];

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8];
// let num=[...even,...odd];

//spread with object literals
// let student=
// {
//         name:"Eliza",
//         mark:90,
//         name:"hari",
//         mark:89,
// };
// let studentDetails={...student,sec:"c1"};
      //RESt
// function sum(...args){
//         for (let i=0;i<args.length;i++){
//                 console.log("You gave us:",args[i]);
//         }
// }
// function min(a,b,c,d){
//       console.log(arguments);//its not actual array ,its an collection of aurgument.  
// }//so we cant use array methods 

// function sum2(...args){
// return args.reduce((sum,el)=>sum+el);
// }       

         // ARRAY   DESTRUCTURING
// let names=["tony","bruce","steve","abc","xyz"];
// let [winner,runnerup,...others]=names;
        //   OBJECT DISTRUCTURING
//    const student ={
//         name:"Eliza",
//         age:14,
//         class:"MCA",
//         Subjects:["HINdi","English","math","Science"],
//         Username:"Eliza@3974",
//         Password:"Abcd",
//    };
//    //let {Username,Password}=student;
//    //or 
//    let {Username:user,Password:secret,city:location="mumbai"}=student;
//    let squre=((a)=>
// {
//         return a**2;
// });
// console.log(squre);
// let sum=((a,b)=>{
//         a+b;
// });
// console.log(sum);


//Function Stack
//    function demo(){
//         console.log("Inside demo function");
//                 console.log("Hello");

//    }
//     function hello(){
//         console.log("inside hello function");
//         demo();

//     }
//     console.log("calling hello function");
//     hello();


// function one(){
//         return 1;

// } 
// function two(){
//         return one()+one();         //
                                      ////Synchronous nature (Ek baad ek hota hai)
// }                                  //
// function three(){
//         let ans=two()+one();
//         console.log(ans);
// }
// three();


//Asynchronus Nature

// setTimeout(() => {
//        console.log("Apna college") 
// }, 2000); 
// setTimeout(() => {
//     console.log("Hello world")    
// }, 3000);
// console.log("helloo...s")

// call back hell
//  h1=document.querySelector("h1");
 
//  setTimeout(() => {
//         h1.style.color="red";       
//  }, 1000);
//  setTimeout(() => {
//         h1.style.color="green";
//  }, 2000);
              //or 

        //   callsback nesting ->  call back hell

        // h1=document.querySelector("h1");
        // function changeColor(color,delay,nextColorChnage){
        //         setTimeout(()=>{
        //                 h1.style.color=color;
        //                 if(nextColorChnage) nextColorChnage();

        //         },delay);
        // }
        // changeColor("red",1000,()=>{
        //         changeColor("green",1000,()=>{
        //                 changeColor("pink",1000,()=>{
        //                         changeColor("blue",1000,()=>{
        //                                 changeColor("yellow",1000);
        //                         });
        //                 });
        //         });
        // });
               //Setting of promises  //call back hell

        // function saveToDb(data,success,failuer){
        //         let InterNetSpeed=Math.floor(Math.random()*10)+1;
        //         if(InterNetSpeed>4){
        //         success();
        //         }
        //         else{
        //                 failuer();

        //         }
              
        // }
//         saveToDb("Apna college",()=>{
//          console.log("success:Your data was saved");
//          saveToDb("Hello world",
//                 ()=>{
//                       console.log("success2:data2 saved");

//                         saveToDb("Eliza",()=>{
//                                 console.log("success3:data3 saved");
//                                 saveToDb("das",()=>{
//                                   console.log("success4:data saved");
//                                 },
//                                     ()=>{
//                                         console.log("failuer4:data not saved");
//                                         }
//                                 );
//                                             },
//                                 ()=>{
//                                 console.log("failuer3:data not saved");
//                                     }
//                        );
//                    },
//                      ()=>{
//                         console.log("failuer2:week connection");
//                          }
//                  );
//                 },
//                   ()=>{
//                      console.log("failuer:Week connection data was not saved.")
//                       } 
// );

  //the promise object represent the eventual completion (or failuer) ofan asynchronous operation and its resulting value. 
     // promise  -> Object
        //    .       .
        //    .       .
        //  success  failuer
 
        //ther are three satate in promises->pending,rejected(error),,fulfilled(resolved)


        // function saveToDb(data){
        //         return new Promise((resolved,rejected)=>{
        //                 let InterNetSpeed=Math.floor(Math.random()*10)+1;
        //                 if(InterNetSpeed > 4){
        //                 resolved("SUCCES:DATA SAVED");
        //                 }
        //                 else{
        //                  rejected("failuer:Week connection");
        //                     }
        //         });
                
        // }

             //promise ->fulfiled(.then(),.cathch)
        //      let request=saveToDb("APNA COLLEGE"); //request=promise object
        //        // console.log(request);
        //        request.then(()=>{
        //         console.log("promise was resolved");
        //         console.log(request);
        //        })
        //        .catch(()=>{
        //         console.log("promise was rejectd");
        //         console.log(request);
        //        });

        //        //or
        //        saveToDb("APNA COLLEGE") //request=promise object
        //         .then(()=>{
        //         console.log("promise was resolved");
        //        })
        //        .catch(()=>{
        //         console.log("promise was rejectd");
        //        });

        //        //promise chaning
        //        saveToDb("Fist call")
        //        .then(()=>{
        //          console.log("data1 saved");
        //          saveToDb("2nd call") 
        //          .then(()=>{
        //            console.log("data2 saved");
        //           });
        //        })
        //        .catch(()=>{
        //         console.log("promise was rejectd");
        //        });

               //or improved version(chain promises)
        //        saveToDb("Fist call")
        //        .then(()=>{
        //          console.log("data1 saved");
        //          return saveToDb("2nd call") ;
        //        })
        //        .then(()=>{
        //         console.log("data2 saved");
       // return saveToDb("3rd call") 
        //        })
        //        .then(()=>{
        //         console.log("data3 saved")
        //        })
        //        .catch(()=>{
        //         console.log("promise was rejectd");
        //        });
  //Result and error in promises
//   saveToDb("Fist call")
//   .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promises",result);
//     return saveToDb("2nd call") ;
//   })
//   .then((result)=>{
//    console.log("data2 saved");
//    console.log("result of promises",result);
//    return saveToDb("3rd call") ;
//   })
//   .then((result)=>{
//    console.log("data3 saved")
//    console.log("result of promises",result);
//   })
//   .catch((error)=>{
//    console.log("promise was rejectd");
//    console.log("error of pormises of promises",error)
//   });
     //refactoring old code(callback hell)
//      h1=document.querySelector("h1");
//      function changeColor(color,delay){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         h1.style.color=color;
//                         resolve("color changed");
//                 },delay);
//         });
                
//         }

//         changeColor("red",1000)
//         .then(()=>{
//                 console.log("red color was complited");
//                return changeColor("ornge",1000);
//         })
//         .then(()=>{
//                 console.log("orange color was omplited");
//                 return changeColor("green",1000);
//         })
//         .then(()=>{
//                 console.log("green color was completed");
//                 return changeColor("blue",1000);
//                 })
//          .then(()=>{
//                         console.log("blue color was completed");
//                 })

        // changeColor("red",1000,()=>{
        //         changeColor("green",1000,()=>{
        //                 changeColor("pink",1000,()=>{
        //                         changeColor("blue",1000,()=>{
        //                                 changeColor("yellow",1000);
        //                         });
        //                 });
        //         });
        // });


        //Async keyword -creates an async function(by defult promise function)

        // async function greet() {
        //        // throw "some random error";
        //         return "hello";    
        // }
        // let hello=async()=>{
        //         return 5;
        // };
        // greet()
        // .then((result)=>{
        //         console.log("promised was resolved");
        //         console.log("result was:",result);
        // })
        // .catch((err)=>{
        //         console.log("promise was rejected:",err);
        // });

        // function getNum(){
        //         return new Promise((resolve,reject)=>{
        //                 setTimeout(()=>{
        //                         let num=Math.floor(Math.random()*10)+1;
        //                         console.log(num);
        //                         resolve();
        //                 },1000);
        //         });
        // }
        // async function demo() {
        //         await getNum();
        //         await getNum();
        //         await getNum();
        //         await getNum();
        //         getNum();
                
        // }

        // h1=document.querySelector("h1");
        //      function changeColor(color,delay){

        //         return new Promise((resolve,reject)=>{
        //                 setTimeout(()=>{
        //                         let num=Math.floor(Math.random()*10)+1;
        //                         if (num>3) {
        //                                 reject("promise rejected");
        //                         }
        //                         h1.style.color=color;
        //                         console.log(`color changed to ${color}`);
        //                         resolve("color changed");

        //                 },delay);
        //         });
                        
        //         }

        //         async function demo() {
        //                 try{
        //                         await changeColor("red",1000);
        //                         await changeColor("green",1000);
        //                          await changeColor("yellow",1000);
        //                         await changeColor("pink",1000);
        //                         await changeColor("blue",1000);
        //                 }
        //                 catch(err){
        //                         console.log("error caught");
        //                         console.log(err);


        //                 }
                       

        //                  let a=5;
        //                  console.log(a);
        //                  console.log("new number is:" ,a+3);
        //         }
        

        //API(Aplication program inteface)
        //generally a user or our java script code when sends a request to ApI(or a sever) it response with some data or gives some instruction
        //it basically  used as interface between user and sever
        //Api is just like to communicate  between two s/w.
        //When api used http protocol (internet) then it is called as WebAPIs.
        //api return data in the format of JSoN
        //user or client send a request to Api(or url=> means link(or it also called endpoint )) then it response in json format.


        //JSON(JavaScript Object Notaion)
        //recomondate(www.json.org)
        //json validate website(to check valid json data)
        //all the data in json are in string format.
        //Accseing data from JSON 
        //JSON.parse(data)Method to prepare a string data into a js object .
        //json.stringify(json) Method to parse a js object data into JSON .
//  json.parse convert json data to js object
//json.stringfy convert js object to json data 
       // let JsonRes={"fact":"A cat's field of vision is about 200 degrees.","length":45};
        //console.log(JsonRes.fact);
        //or
//         let validRes=(JsonRes);
//         console.log(validRes.fact);
//      let student={
//         name:"eliza",
//         marks:97,
//      };
//https://echo.hoppscotch.io
//https://catfact.ninja/fact
                             //Ajax=Asyncrronous javascript and xml
// Http verbs
// Examples:
// >Get
// >post
// >Delete
//Status code
//eg:
// >200-ok
// >404-Not Found(User error)
// >400-Bad Request
// >500-Internal Server error
//Add information in url
//http://www.google.com/search?key=value
//eg
//https://www.google.com/search?q=mango
/*   
headers are 2 types-REsponse header
request header
headers are basically used to transfor aditional information

OUR FIRST REQUEST
using fetch(url)
*/
//let url="https://catfact.ninja/fact";
// fetch(url)
// .then((Response)=>{
//         console.log(Response);
//      // console.log(Response.json());
//     Response.json().then((data)=>{
//         console.log(data);
//     });
// })
// .catch((err)=>{
//         console.log("Error-",err);
// })
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((Res)=>{
//         return Res .json();        
//     })
//     .then((data)=>{
//         console.log("data1=",data.fact);
//         return fetch(url);
//     })
//     .then((data2)=>{
//         console.log(("data2=",data2));
//     })

// .catch((err)=>{
//         console.log("Error-",err);
// })

// async function getFacts(url) {
//         try{
//                 let res=await fetch(url);
//                 let data=await res.json();
//                 console.log(data.fact);

//         }
//         catch(e){
//                 console.log("error_",e);
//         }
//         console.log("bye");
        
// }
                //TO FIND RANDOM CAT FACTS
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//         //console.log("Button was clicked")
//         let fact= await getFacts();
//         console.log(fact);
//         let p=document.querySelector("#result");
//         p.innerText=fact;
// });


// let url="https://catfact.ninja/fact";
// async function getFacts() {
//         try{
//                 let res=await axios.get(url);
//                return res.data.fact;

//         }catch(e){
//                 console.log("error_",e);
//                 console.log("No fact found");
//         }
        
// }
         
          //TO FIND AN IMAGE BY SENDING AN API REQUEST


// let btn=document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async ()=>{
//         let link= await getImage();
//         console.log(link);
//         let img=document.querySelector("#image");
//         img.setAttribute("src",link)
// });

// async function getImage() {
//         try{
//                 let res=await axios.get(url2);
//                return res.data.message;

//         }catch(e){
//                 console.log("error_",e);
//                 console.log("No image found");
//         }
        
// }

             //SENDING HEADERS WITH API REQUEST
// const url="http://icanhazdadjoke.com/";
// async function getJokes() {
//         try{
//                 const config={headers:{Accept:"application/json"}};
//                 let res=await axios.get(url,config);
//                 console.log(res.data);

//         }
//         catch(err){
//                 console.log(err);
//         }
// }
        //ACTIVITY USING QUERY STRING
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async () =>{
let country=document.querySelector("input").value;
console.log(country);
       let colArray=await getCollege(country);
       console.log(colArray);
       show(colArray);
});
 
function show(colArray){
        let list=document.querySelector("#list");
        list.innerText="";//to empty previous list
        for(col of colArray){
                console.log(col.name);
                let li=document.createElement("li");
                li.innerText=col.name;
                list.appendChild(li);
        }
}
async function getCollege(country) {
        try{
                let res=await axios.get(url+country);
                return res.data;

        }catch(err){
                console.log("error:",err);
                return[];

        }
        
}