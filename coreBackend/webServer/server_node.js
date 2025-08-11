const http=require('http')

const hostname='127.0.0.1'
const port=8080


const Server=http.createServer((req,res)=>{
if (req.url==='/') {
    
        res.statusCode=200//sending back the statusCode for ur request as a response
        res.setHeader('content-type','text/plain')//telling the browser what type of response it will get soon ... here the plain text but it can be js , html
        res.end('Hello Pakistan')//send the response to the browser and finish the response (like tells the server that 'hi bro! i am just done sending data') after that no more content can be written to that response object
}else if(req.url==='/ice-tea'){
    res.statusCode=200//sending back the statusCode for ur request as a response
        res.setHeader('content-type','text/plain')//telling the browser what type of response it will get soon ... here the plain text but it can be js , html
        res.end('14 August is coming soom')//send the response to the browser and finish the response (like tells the server that 'hi bro! i am just done sending data') after that no more content can be written to that response object
}
else{
    res.statusCode=404//sending back the statusCode for ur request as a response
        res.setHeader('content-type','text/plain')//telling the browser what type of response it will get soon ... here the plain text but it can be js , html
        res.end('404 page not found')//send the response to the browser and finish the response (like tells the server that 'hi bro! i am just done sending data') after that no more content can be written to that response object
}
//these if-else are the routes of the server, routes simply means addresses or paths that tells the server what to serve to the client as a response when certain specific URL hits

//but managing 20 30 or more of these routes will be difficult if we are using if-else or switch()



    // console.log(res)

})//creating an server and adding an callback function which define the functionality of the server like what to do when a request comes


Server.listen(port,hostname,()=>{
    console.log(`Server is listening at port ${port} and its IP address is ${hostname} the whole address of server and where server listens it(at which port it listens) is http://${hostname}:${port}`);
})//for us not for the client it tells the server where to listen means at which port for any incoming requests and it do that constantly