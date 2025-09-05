console.log("to do list change in javascript");
let inputBox=document.getElementById("insert");
let addtask=document.getElementById("addtask");
let taskList=document.getElementById("taskList");
let all=document.getElementById("all");
let alltasklist=document.getElementById("alltask");
let clearcoma=document.getElementById("cleare");
let li;
let data=[];
addtask.addEventListener("click",function(event){
 event.preventDefault();  // stop page refresh
  task=inputBox.value;
 if(task.trim()!=""){
  data.push(task);
  // console.log(data);
 let li=document.createElement("li");
    li.textContent=task;
 //  inside the value add
   taskList.appendChild(li);
  //  console.log(taskList);
 }
//  then value is the null
 inputBox.value="";
})

// display all record
all.addEventListener("click",function(event){
       event.preventDefault();
       alltasklist.innerHTML="";
       data.forEach(function(t){
         let li=document.createElement("li");
         li.textContent=t;
         alltasklist.appendChild(li);
       });
       console.log(data);
})
//  all tasks remove
clearcoma.addEventListener("click",function(){
      taskList.innerHTML="";
      alltasklist.innerHTML="";
    
})