const http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const root=__dirname,port=Number(process.env.PORT||4173),types={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".svg":"image/svg+xml"};
http.createServer((req,res)=>{if(req.method!=="GET"&&req.method!=="HEAD"){res.writeHead(405);return res.end("Method not allowed");}
let p;try{p=decodeURIComponent(new URL(req.url,"http://localhost").pathname)}catch{res.writeHead(400);return res.end("Bad request");}if(p==="/")p="/index.html";
const f=path.resolve(root,"."+p);if(!f.startsWith(root+path.sep)){res.writeHead(403);return res.end("Forbidden");}
fs.stat(f,(e,s)=>{if(e||!s.isFile()){res.writeHead(404);return res.end("Not found");}res.writeHead(200,{"content-type":types[path.extname(f)]||"application/octet-stream","cache-control":"no-store"});if(req.method==="HEAD")return res.end();fs.createReadStream(f).pipe(res);});
}).listen(port,"127.0.0.1",()=>console.log("Memory Fragmentation Lab: http://localhost:"+port));
