const http=require('http')//import nodejs's http module

const fs=require('fs')//nodejs module to handle files in the OS like reading and writing the files

const path=require('path')//another nodejs module to handle path of the files that we are working with

const port=8080//available port of our machine that will listen for incoming request and give response to the users/browsers which are connect to this port


//http module make sure you(your code) to act as an server that listens incoming requests

const server=http.createServer((req,res)=>{
    
    const filePath=path.join(__dirname,req.url==='/'?"index.html":req.url)
    //gives access to the current directory where my files are located and we also provide the filename like index.html which we will provided as a response, but dont want to provide response to any other request, the request should be '/', we makesure that using ternary operator to find url request with '/'
    console.log(req.url);
    
    // the ternary operator says that if url is '/' then serves the index.html otherwise req.url the url/file user requested for 

    const extName=String(path.extname(filePath)).toLowerCase()//accessing the extension name to serve the right file with right extenion name

    const mimeTypes={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript'
        // 'text/javascript' means that in the files with those extensions is text

    }//this object defines that only mentioned types of files an server can host and support them that's why some servers don't support JSON files cuz they don't have definition for it
    

    const contentType=mimeTypes[extName] || 'application/octet-stream' // makesure that the file user demands using url exists in server's directory and server supports the type/format of the file , else store 'application/octet-stream' generic binary file to the contentType........ this contentType will used to tell the browser which type of content the server is going to send

    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code==='ENOENT'){
                res.writeHead(404,{'content-type':'text/html'})
                res.end('404: FILE NOT FOUND BROooooo')
            }

        } else{
            res.writeHead(200,{'content-type':contentType})//200 status code 200=OK acutally we are sending head as a response which is also the part of the response goes from the server
            // 'content-type' tells the browser which type of data is coming .html, .css etc and then 
            res.end(content,'utf-8')//sends the content to the browser also the encoding scheme and now its browser job to render the content of the file on the screen 
        }
    })// using fs(fileSystem) we read the file in the directory for which user is requesting if it exits in the directory run else part , if file not exists in the servers directory than runs if part

     

})//creates a server that activily listening to the port for incoming requests means it is bind to the specific port 

//further we define a callback function in this method (createServer) of http which actually defines the functionality of the server like what to do with request and what response it should provide

server.listen(port,()=>{
    console.log('server is listening to the port ',port);
    
})//this listen method needs port number where the server will listens for the incoming requests and the callback function which confirms that the server has started without any error and is successfully up/awake to listen incoming requests that comes at that mentioned/provided port number




