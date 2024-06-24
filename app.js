const express = require('express');
const app = express();
const port = 4001;


const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

app.get('/magic8', (req, res) => {
  const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(randomResponse)
});

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

  app.listen(port, () => {
    console.log(`Magic 8-ball app listening at http://localhost:${port}`);
  });

 

  








