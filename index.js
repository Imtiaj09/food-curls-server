const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middle wares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Food Curls Server Is Running')
});

app.listen(port, () => {
  console.log(`Food Curls Server Running On ${port}`)
})

