const fs=require('fs');
const url=require('url');
const PORT=3000;
const http=require('http');


const server=http.createServer((req,res) =>{
    const req_url=req.url;
    console.log(req_url);

    const parsed_url=url.parse(req_url);
    console.log(parsed_url);

    if(parsed_url.pathname === "/datas"){
        res.writeHead(200,{'content-type':'text/json'});
        res.end(fs.readFileSync('datas.json'));

    }

    else if(parsed_url.pathname==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(fs.readFileSync('index.html'))
    }
    else if(parsed_url.pathname==='/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.end(fs.readFileSync('style.css'))
    }
    else if(parsed_url.pathname==='/script.js'){
        res.writeHead(200,{'Content-Type':'text/script'});
        res.end(fs.readFileSync('script.js'))
    }



});
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});