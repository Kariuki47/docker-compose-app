const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors())
app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Album Review: When we all Fall asleep where do we go?"
    },
    {
      "id":"2",
      "title":"Book Review: How can we escape this labyrinth of suffering?"
    },
    {
      "id":"3",
      "title":"Documentary Review: How can we escape the rat race?"
    }
  ])
})
app.listen(port, '0.0.0.0', () => {
  console.log('connected on port 4000')
})