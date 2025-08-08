const fs=require('fs')
const filePath='./tasks.json'//file to store tasks

//function to load task from the file where tasks are store


//this loadTasks function will return array of objects
const loadTasks=()=>{
    //reading a file is same dangerous as making a web request (hitesh chaudhary) the reason is that reading a file deals with externel inputs or untrusted input while can reveal file to the user mistakenly and attacker can access sensitive data and incase of web requests if making a website involves user input it can raise security issues

    try {
        const dataBuffer=fs.readFileSync(filePath)
        //this fs method returns databuffer which is an object that holds the data from the file that we read and it needs to be converted into the string format
        
        // console.log(dataBuffer)

        //we use readfilesync means don't anything untill whole file is read completely

        const dataJSON=dataBuffer.toString()
        //that dataJSON is quite different from the regular JSON cuz of different Operation systems

        // console.log(dataJSON);

        // console.log(JSON.parse(dataJSON))

        return JSON.parse(dataJSON)//converted to regular JSON format and return array of objects
    } catch (error) {
        return []
    }
    //use try-catch where failures can be happened or are bound to happen

}

const listTasks=()=>{
    const tasks=loadTasks();
    tasks.forEach((task,index)=>console.log(`${index+1} - ${task.taskToBeAdded}`))
    //forEach is a smart higher order loop it has access to the object in the array, index of that object and also the whole list of the array forEach(item,index,arr)
    
};

const saveTasks=(tasks)=>{
   const dataJSON= JSON.stringify(tasks)
   console.log(dataJSON);
   
   fs.writeFileSync(filePath,dataJSON)

}

const addTask=(taskToBeAdded)=>{
    const tasks=loadTasks()
    tasks.push({taskToBeAdded})// pushing an object into an array thats why we used {}

    saveTasks(tasks)
    console.log("Task added successfully ",taskToBeAdded)

}

const removeTask=(argument)=>{
    const tasks=loadTasks();
    const task_no=parseInt(argument)-1
    const removeTask=tasks.splice(task_no,1);//(index which u want to delete, items u want to delete)
    console.log('Task is removed successfully ',removeTask)
    saveTasks(tasks);


}



const command=process.argv[2]//read text from terminal which is in string form everything from terminal is in string form
// at 0 index there is execPath that runs the file with JS code it the 'node' command which we write in the terminal to run the code file
// at 1 the path of the file that will run
// at 2 = 3 is anytext
// and donot need to add anything at 0 it is already handled
 
const argument=process.argv[3]

if(command==='add'){
    addTask(argument)
}
else if(command==='list'){
    listTasks();
}
else if(command==='remove'){
    removeTask(argument)
}
else{
    console.log('no command is found')
}
//this command will be read from the terminal 