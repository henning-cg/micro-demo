const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let lists = {};

app.get('/lists', (req, res) => {
  res.send({lists: Object.keys(lists)})
});

app.post('/lists', (req, res) => {
  let list = req.body;
  lists[list.name] = list.profiles;
  res.send(lists[list.name]);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
