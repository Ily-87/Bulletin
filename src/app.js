const express = require('express')
const pg = require('pg').Pool
const app = express()
const port = 5342
const { Client } = require('pg')
const client = new Client({
  host: 'Bulletin.com',
  port: 5342
  // user: 'user',
  // password: 'secret',
})

// const pool = new Pool(config)
// async function get_hits(){
//   // let response = await.poolquery("select * from users")
//   console.log(response.rows);
// }
// get_hits()
app.get('/', (req, res) => {
  res.send('form')
})

app.get('/views/form', (req, res) => {
  insert into users values ('messages')

  res.send('form')
})

app.post('views/form', (req, res) => {
  req.query(`messages`, )
})

// pg.connect('postgres://user:secret@locahost/Bulletin', (err, client, done) =>{
//   client.query(`select * from users`, (err, result) => {
//     if (err){
//       return.done (client)
//       else {(done())
//       }
//     }
//     console.log(result.rows)
//     done()
//     pg.end()
//   })
// })
//
// pg.connect('postgres://user:secret@locahost/Bulletin', (err, client, done) =>{
//   client.query(`insert into users ('#j') values ('#j')')` {
//     console.log(`${result.command}: ${result.rowCount}`)
//     if (err){
//       return.done (client)
//       else {done()}
//     }
//     pg.end()
//   })
// })


// app.get('/form', (req, res)= {res.render('/messages')})
//
// app.post('/form', (req, res) => {
//   if(err){
//     throw (err)
//   }
//   const users = JSON.parse(data)
//
//   const addmessages=req.body.name
//   const user = []
//
// })

// $.ajax({
//     type: 'POST',
//     url: '/form',
//     data:  JSON.stringify({name: value,"age": value}),
//     success: function(data) {
//         alert('success');
//        },
//     contentType: "application/json",
//     dataType: 'json'
// });


















app.listen(port, () => console.log(`Example app listening on port ${port}!`))
