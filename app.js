
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('<h1 style = background-color:green;>ok we did it<h1>')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Raquel', (req, res) => {
    res.send('Hire our fellows!')
    res.send('Fail forward')
  })

  app.get('/Corey Kension', (req, res) => {
    res.send('I am the chosen!')
    res.send('better scramble like eggs before you get folded like an omlet')
  }) 
  
  app.get('/Flamingo', (req, res) => {
    res.send('You dont miss the past, you miss being happy')
   
  }) 
  
  app.get('/Saphire', (req, res) => {
    res.send('Wanna hear something scary?')
    res.send('im your a-te saphire')
  }) 
  
  app.get('/Clown Pierce', (req, res) => {
    res.send('I am not the deadliest player on the server because i can overpower 35 people with sheer force, i am the deadliest player because i never give up.')
  })
  
  app.get('/Rengoku', (req, res) => {
    res.send('Tasty!')
    res.send(`Stand tall and be proud, no matter how weak or unworthy you feel. Burn up your heart, grit your teeth and move forward. If you just curl up into a ball and hide, time will pass you by. It won't wait for you while you wallow in your grief.`)
  })

  


app.listen(4001, () => {
    console.log('server is running on port 4001')
})