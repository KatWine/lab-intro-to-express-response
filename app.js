
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('ok we did it')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Raquel', (req, res) => {
    res.send('Hire our fellows!')
  })

  app.get('/Corey Kension', (req, res) => {
    res.send('I am the chosen!')
  }) 
  
  app.get('/Flamingo', (req, res) => {
    res.send('You dont miss the past, you miss being happy')
  }) 
  
  app.get('/Saphire', (req, res) => {
    res.send('Wanna hear something scary?')
  }) 
  
  app.get('/Clown Pierce', (req, res) => {
    res.send('I am not the deadliest player on the server because i can overpower 35 people with sheer force, i am the deadliest player because i never give up.')
  })
  
  app.get('/Rengoku', (req, res) => {
    res.send('Tasty!')
  })

  


app.listen(4001, () => {
    console.log('server is running on port 4001')
})