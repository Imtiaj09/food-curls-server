const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config();

//middle wares
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vep38nb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const serviceCollection = client.db('foodCurls').collection('services')

    app.get('/services', async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services)
    })
  }
  finally {

  }
}
run().catch(err => console.error(err))


app.get('/', (req, res) => {
  res.send('Food Curls Server Is Running')
});

app.listen(port, () => {
  console.log(`Food Curls Server Running On ${port}`)
})

