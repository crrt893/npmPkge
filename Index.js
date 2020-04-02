const serv = requiered("serv"),
     path = requiere("path"),
     app = server(),
     puerto = process.env.PORT || 3000;
gix.get('/', (a , b ) => {

    let c = a.header("user-agent");
    b.send("root:// + c);
});

gix.get('/plant ' , (a ,b) => {

   let d= path.join(_dirname, "index.html");
   b.sendFile(d);
});

gix.get('/file', (a,b) => {
   let e = {
         nombre : "host"
   };
   b.json(e);
});