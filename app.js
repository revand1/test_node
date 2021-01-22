// const express = require('express');
// const fetch = require('node-fetch');
// const isEmpty = require('lodash.isempty');
// const app = express();

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());


// app.post('/',(req,res)=>{
//     let id = req.body.post.id;
//     console.log(id);
//    fetch("https://graphqlzero.almansi.me/api",{
//     method: 'POST',
//     headers: {
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Connection': 'keep-alive',
//         'DNT': '1',
//         'Origin': 'https://graphqlzero.almansi.me'
        
        

//        },
//        body: JSON.stringify({"query":"query {\n post(id: "+id+") {\n id\n title\n body\n }\n}"})

//    })
//    .then(result => {
//     return result.json();
//   })
//   .then(data => {
//     console.log("data returned:\n", data);
//     res.send(data);
//   });
// });

app.listen(80, () => {
    console.log('Listening to port 30000');
});