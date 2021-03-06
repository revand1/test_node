const express = require('express');
const fetch = require('node-fetch');
const isEmpty = require('lodash.isempty');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post('/',(req,res)=>{
  if(req.body.user.username=='admin'&&req.body.user.password=='admin')
  {
    let id = req.body.post.id;
    console.log(id);
   fetch("https://graphqlzero.almansi.me/api",{
    method: 'POST',
    headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Origin': 'https://graphqlzero.almansi.me'
        
        

       },
       body: JSON.stringify({"query":"query {\n post(id: "+id+") {\n id\n title\n body\n }\n}"})

   })
   .then(result => {
    return result.json();
  })
  .then(data => {
    console.log("data returned:\n", data);
    res.send(data);
  });
}
else
{
  res.send({"Error":"Invalid Credentials"});
}
});

app.get('/',(req,res)=>{
 fetch("https://graphqlzero.almansi.me/api",{
  method: 'POST',
  headers: {
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Connection': 'keep-alive',
      'DNT': '1',
      'Origin': 'https://graphqlzero.almansi.me'
      
      

     },
     body: JSON.stringify({"query":"query {\n post(id: 27) {\n title\n body\n }\n}"})

 })
 .then(result => {
  return result.json();
})
.then(data => {
  console.log("data returned:\n", data);
  res.send(data);
})
});

app.listen(PORT, () => {
    console.log('Listening to port 30000');
});