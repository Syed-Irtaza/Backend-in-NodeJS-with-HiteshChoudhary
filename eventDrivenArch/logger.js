const fs=require('fs')
const os=require('os')

const EventEmitter=require('events')//its not like an ordinary module of node it is a class and it needs to be treated as an class, comes with lots of methods and can also be extended like classes

class Logger extends EventEmitter {
    log(message){
        this.emit('message',{message})//it is the definition of throughing the event which will broadcast message to everyone
    }
}

const logger=new Logger() //creating an object of Logger class type

const logFile='./eventlog.txt' //where logs will be stored


const logToFile = (event)=>{

    const logMessage=`${new Date().toISOString()}- ${event.message}\n`
    fs.appendFileSync(logFile,logMessage)

}//method that is responsible for grabbing the data

logger.on('message',logToFile) //listen for the event 'message' constantly and when the event is captured just run the callback function for it





// now we will calculate something (get some resourse like memory calculate it and then launch the event) from OS and then launch/throw the event

setInterval(()=>{
    const memoryUsage=(os.freemem()/os.totalmem)*100
    // to throw the event we need to use 'log' method which is the definition of throwing the event 
    logger.log(`Current Memory Usage: ${memoryUsage.toFixed(2)}`);
    
},3000)// this setInterval method will run the given call-back function under the given time


logger.log('Application Started')
logger.log('Application Event Occurred')
